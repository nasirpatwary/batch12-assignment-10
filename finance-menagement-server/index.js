const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const cors = require("cors");
require("dotenv").config();
const admin = require("firebase-admin");
const proEnv = process.env;
const port = proEnv.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const decoded = Buffer.from(proEnv.FB_SERVICE_KEY, "base64").toString("utf8");
const serviceAccount = JSON.parse(decoded);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// verify middleware
const verifyFBToken = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization)
    return res.status(401).send({ message: "unauthorized access" });
  const token = authorization.split(" ")[1];

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.token_email = decoded.email;
    next();
  } catch (error) {
    res.status(401).send({ message: "unauthorized access" });
  }
};

const uri = `mongodb+srv://${proEnv.USER_NAME}:${proEnv.USER_PASS}@cluster0.qhtx1li.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  const db = client.db("financialDB");
  const userCollection = db.collection("users");
  const financialCollection = db.collection("financials");
  try {
    // await client.connect();
    // userCollection
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const query = { email: newUser.email };
      const exist = await userCollection.findOne(query);
      if (exist)
        return res.send({
          message: "user already exist Please log in or use a different email",
        });
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });
    // financialCollection
    app.get("/transactions", verifyFBToken, async (req, res) => {
      const { email } = req.query;
      const query = {};
      if (email) {
        query.email = email;
      }
      if (email !== req.token_email)
        return res.status(403).send({ mesage: "forbidden access" });
      const result = await financialCollection
        .find(query)
        .sort({ date: "desc" })
        .toArray();
      res.send(result);
    });
    app.get("/transactions/:id", verifyFBToken, async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const result = await financialCollection.findOne(query);
      res.send(result);
    });
    app.post("/transactions", verifyFBToken, async (req, res) => {
      const newTransaction = req.body;
      const result = await financialCollection.insertOne(newTransaction);
      res.send(result);
    });
    app.delete("/transactions/:id", verifyFBToken, async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const result = await financialCollection.deleteOne(query);
      res.send(result);
    });

    app.patch("/transactions/:id", verifyFBToken, async (req, res) => {
      const { id } = req.params;
      const updateData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: updateData,
      };
      const result = await financialCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    app.get("/category-total/:category", verifyFBToken, async (req, res) => {
      const category = req.params.category;
      const result = await financialCollection
        .aggregate([
          {
            $match: { category: category },
          },
          {
            $group: {
              _id: null,
              total: { $sum: { $toDouble: "$amount" } },
            },
          },
        ])
        .toArray();
      const totalAmount = result.length > 0 ? result[0].total : 0;
      res.send({ totalAmount });
    });
    app.get("/chartcollections", verifyFBToken, async (req, res) => {
      const users = await userCollection.estimatedDocumentCount();
      const financials = await financialCollection.estimatedDocumentCount();
      const result = await financialCollection
        .aggregate([
          {
            $group: {
              _id: null,
              total: { $sum: { $toDouble: "$amount" } },
            },
          },
        ])
        .toArray();
      const revenue = result.length > 0 ? result[0].total : 0;
      res.send({ revenue, users, financials });
    });
    app.get("/reports/category-summary", verifyFBToken, async (req, res) => {
      const result = await financialCollection
        .aggregate([
          {
            $group: {
              _id: "$category",
              totalAmount: { $sum: { $toDouble: "$amount" } },
            },
          },
          {
            $project: {
              _id: 0,
              name: "$_id",
              totalAmount: 1,
            },
          },
        ])
        .toArray();

      res.send(result);
    });

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
