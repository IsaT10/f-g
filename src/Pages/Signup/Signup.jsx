import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/Authprovider";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [checked, setChecked] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { createUser, userProfileUpdate, verifyEmail, googleSignIn } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();

        // update user info
        userProfileUpdate(userInfo.name)
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            console.log(error);
          });

        //verify email
        // verifyEmail().then(() => {
        //   toast.success("Please check your email");
        // });
        navigate(from, { replace: true });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    console.log(name);
    setUserInfo({ ...userInfo, name: name });
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
    console.log(password);

    if (password.length < 8) {
      setErrors({
        ...errors,
        password: "Password must has at least 8 characters",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      setErrors({
        ...errors,
        password: "At least one upper case",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setErrors({
        ...errors,
        password: "At least one digit",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setErrors({
        ...errors,
        password: "At least one special character",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setUserInfo({ ...userInfo, password: password });
      setErrors({ ...errors, password: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    console.log(confirmPassword);

    if (userInfo.password !== confirmPassword) {
      setErrors({
        ...errors,
        confirmPassword: "Please enter the password again",
      });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    } else {
      setUserInfo({ ...userInfo, confirmPassword: confirmPassword });
      setErrors({ ...errors, confirmPassword: "" });
    }
  };

  // const handleChecked = (e) => {
  //   setChecked(e.target.checked);
  // };

  return (
    <div className="hero w-full">
      <div className="hero-content flex-col grid md:grid-cols-2 lg:flex-row mb-24">
        <div className="card  w-[600px] border-2 border-gray border-opacity-50 rounded-md px-10 py-12">
          <h1 className="text-3xl text-center font-bold">Sign up</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold text-[#444444]">
                  Name
                </span>
              </label>
              <input
                type="text"
                onChange={handleNameChange}
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
                placeholder="email"
                className="input input-bordered"
                required
              />
              <p className="text-red text-sm font-semibold mt-1 ml-1">
                {errors.email}
              </p>
            </div>
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
                required
              />
              <p className="text-red text-sm font-semibold mt-1 ml-1">
                {errors.password}
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold text-[#444444]">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                name="confirm"
                onChange={handleConfirmPasswordChange}
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
              <p className="text-red text-sm font-semibold mt-1 ml-1">
                {errors.confirmPassword}
              </p>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn  bg-[#FF3811] border-2 border-[#FF3811] hover:bg-transparent hover:border-[#FF3811] hover:text-orange rounded-md"
              >
                Sign up
              </button>
              <p className="text-center text-lg mt-7">Or Sign In with</p>
            </div>
            <div className="flex justify-center items-center gap-6 mt-6 text-2xl">
              <button onClick={handleGoogleSignIn}>
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
              <span className="text-gray">Already have an account?</span>
              <Link className="text-orange font-semibold underline" to="/login">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
