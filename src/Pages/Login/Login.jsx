import React, { useContext, useState } from "react";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/Authprovider";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const { logIn, googleSignIn, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    logIn(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const currentUser = {
          email: user.email,
        };
        // console.log(currentUser);
        navigate(from, { replace: true });

        //get jwt token
        // form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        // navigate(from, { replace: true });
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Please enter a valid email address" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setUserInfo({ ...userInfo, email: email });
      setErrors({ ...errors, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;

    if (password.length < 8) {
      setErrors({
        ...errors,
        password: "Password must has at least 8 characters",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setUserInfo({ ...userInfo, password: password });
      setErrors({ ...errors, password: "" });
    }
  };

  const handleEmailBlur = (e) => {
    const email = e.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setUserInfo({ ...userInfo, email: email });
    }
  };

  const handleResetPassword = () => {
    resetPassword(userInfo.email)
      .then(() => {
        console.log(userInfo.email);
        toast.success("Password reset email sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(userInfo.email);
        console.log(errorMessage, errorCode);
        toast.warning("Please enter a valid email");
      });
  };

  return (
    <div className="hero w-full">
      <div className="hero-content flex-col grid md:grid-cols-2 lg:flex-row mb-24">
        <div className="card  w-[600px] border-2 border-gray border-opacity-50 rounded-md px-10 py-12">
          <h1 className="text-3xl text-center font-bold">Login</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold text-[#444444]">
                  Email
                </span>
              </label>
              <input
                type="text"
                name="email"
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <p className="text-red text-sm font-semibold mt-1 ml-1">
              {errors.email}
            </p>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold text-[#444444]">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                onChange={handlePasswordChange}
                placeholder="password"
                className="input input-bordered"
              />
              <p className="text-red text-sm font-semibold mt-1 ml-1">
                {errors.password}
              </p>
              <label className="label">
                <button
                  onClick={handleResetPassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn  bg-[#FF3811] border-2 border-[#FF3811] hover:bg-transparent hover:border-[#FF3811] hover:text-orange rounded-md"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center text-lg mt-7">Or Login with</p>
          <div className="flex justify-center items-center gap-6 mt-6 text-2xl">
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaLinkedin />
            </button>
            <button onClick={handleGoogleSignIn}>
              <FaGoogle />
            </button>
          </div>
          <div className="text-center mt-10">
            <span className="text-gray">Have an account?</span>
            <Link className="text-orange font-semibold underline" to="/signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
