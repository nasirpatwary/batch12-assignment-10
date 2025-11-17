import useAuth from "../hooks/useAuth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import success from "../assets/looties3.json";
import SocialLogin from "../shared/SocialLogin";
import CustomLink from "../shared/CustomLink";
import Lottie from "lottie-react";
import Container from "../shared/Container";

const Login = () => {
  const { signInUser, user } = useAuth();
  const [showEye, setShowEye] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);

  useEffect(() => {
    if (user) {
      navigate(location.state ? location.state : "/");
    }
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await signInUser(email, password);
      toast.success("Login successfully!");
      navigate(location.state ? location.state : "/");
      form.reset();
    } catch (error) {
      toast.error("Email or password doesn’t match our records.");
    }
  };

  return (
    <>
      <title>Login || Page</title>
      <Container className="flex flex-col lg:flex-row-reverse items-center justify-around my-12">
        <div className="max-w-1/2">
          <Lottie animationData={success} loop={true} />
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-white dark:bg-gray-800">
          <h1 className="text-2xl font-semibold text-center mt-4 text-gray-900 dark:text-gray-100">
            Login your account
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="label text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                className="input-field bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="Email"
                required
              />
              <label className="label text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div className="relative">
                <input
                  type={showEye ? "text" : "password"}
                  name="password"
                  className="peer input-field bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Your Password"
                  required
                />
                <div className="absolute right-6 top-3 z-10 dark:text-gray-300 cursor-pointer peer-focus:text-primary">
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
              <div>
                <a className="link link-hover text-gray-700 dark:text-gray-300">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </fieldset>
          </form>
          <div className="px-6 space-y-3 pb-5">
            <SocialLogin />
            <CustomLink
              routPath="Don’t Have An Account?"
              to="/register"
              path="Register"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
