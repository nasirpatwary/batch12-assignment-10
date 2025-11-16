import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import SocialLogin from "../shared/SocialLogin";
import CustomLink from "../shared/CustomLink";
import Lottie from "lottie-react";
import success from "../assets/looties1.json";
import Container from "../shared/Container";
import useAxiosPublic from "../hooks/useAxiosPublic";
const Register = () => {
  const axioPublic = useAxiosPublic();
  const [showEye, setShowEye] = useState(false);
  const navigate = useNavigate();
  const { createUser, updateUserProfile, logOutUser, setUser } = useAuth();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;
    if (!passwordRegex.test(password))
      return toast.error(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one special character."
      );
    if (!terms) return toast.error("Please accept terms condition!");
    try {
      const { user } = await createUser(email, password);
      await updateUserProfile(name, photo);
      const newUser = {
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL,
      };
      console.log(newUser);
      await axioPublic.post(`/users`, newUser);
      try {
        await logOutUser();
        toast.success("register successfully Please varify your email!");
        setUser(null);
      } catch (error) {
        if (error) return toast.error(error);
      }
      navigate("/");
      form.reset();
    } catch (error) {
      if (error) toast.error("auth/email-already-in-use");
    }
  };
  return (
    <>
      <title>Register || Page</title>
      <Container className="flex flex-col lg:flex-row-reverse items-center justify-around my-12">
        <div className="max-w-1/2">
          <Lottie animationData={success} loop={true} />
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl font-semibold text-center mt-4">
            Register your account
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input-field"
                placeholder="Your Name"
                required
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input-field"
                placeholder="Your Photo URL"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input-field peer"
                placeholder="Your Email"
                required
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showEye ? "text" : "password"}
                  name="password"
                  className="peer input-field"
                  placeholder="Your Password"
                  required
                />
                <div className="absolute right-6 top-3 z-10 cursor-pointer peer-focus:text-primary">
                  {showEye ? (
                    <FaRegEye size={16} onClick={() => setShowEye(!showEye)} />
                  ) : (
                    <FaRegEyeSlash
                      size={16}
                      onClick={() => setShowEye(!showEye)}
                    />
                  )}
                </div>
              </div>
              <label className="label">
                <input
                  name="terms"
                  type="checkbox"
                  className="checkbox focus:outline-1 focus:outline-primary"
                />
                Accept terms conditions
              </label>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </form>
          <div className="px-6 space-y-3 pb-5">
            <SocialLogin />
            <CustomLink
              routPath="Dont’t Have An Account?"
              to="/login"
              path="Login"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
