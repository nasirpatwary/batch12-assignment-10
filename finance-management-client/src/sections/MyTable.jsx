import TableCart from "./TableCart";

const MyTable = ({ transactions }) => {
  return (
    <div className="mt-12">
      {transactions.length === 0 ? (
        // 🟢 Empty State (Improved UX)
        <div className="flex flex-col items-center justify-center text-center py-16 space-y-3 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
            alt="No data"
            className="w-20 opacity-70"
          />
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">
            No Transactions Yet
          </h3>
          <p className="text-gray-500 max-w-md">
            Start by adding an income or expense to visualize your financial
            data here.
          </p>
        </div>
      ) : (
        // 🟢 Table Section
        <div className="overflow-x-auto shadow rounded-xl border border-gray-100">
          <table className="table w-full">
            {/* Head */}
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm font-semibold">
              <tr>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Details</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map((transaction) => (
                <TableCart key={transaction._id} transaction={transaction} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTable;
