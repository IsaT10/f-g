import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Authprovider";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="navbar bg-base-100 border-t-8 border-dark px-0 py-6 md:py-12">
      <div className="md:navbar-start px-6 lg:px-0 w-full flex justify-between items-center">
        <Link to="/" className=" text-xl md:text-3xl font-bold uppercase">
          Fast <span className="text-orange">Gear</span>
        </Link>

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content -left-14 mt-3 p-2 shadow bg-base-100 rounded-box w-24 mr-10"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden md:flex md:mr-5 lg:mr-0">
        <ul className="flex gap-6 items-center">
          <li>
            <Link
              className="md:text-base lg:text-lg font-semibold hover:text-orange duration-100"
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="md:text-base lg:text-lg font-semibold hover:text-orange duration-100"
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="md:text-base lg:text-lg font-semibold hover:text-orange duration-100"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          {user?.email ? (
            <>
              <li>
                <Link
                  className="md:text-base lg:text-lg font-semibold hover:text-orange duration-100"
                  to="/reviews"
                >
                  My Reviews
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-base lg:text-lg font-semibold hover:text-orange duration-100"
                  to="/addservice"
                >
                  Add service
                </Link>
              </li>
              <button
                onClick={handleLogOut}
                className="border-2 border-orange px-4 py-2 text-orange font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <li>
              <Link
                className="md:text-base lg:text-lg font-semibold hover:text-orange duration-100"
                to="/signup"
              >
                Sign up
              </Link>
            </li>
          )}
        </ul>
        {user?.photoURL ? (
          <div className="avatar">
            <div className="w-14 rounded-full ml-4">
              <img src={user?.photoURL} alt={user?.name} />
            </div>
          </div>
        ) : (
          <div className="avatar">
            <div className="w-12  pl-1 rounded-full ml-4">
              <FaRegUserCircle className="text-3xl mt-[9px]" />
            </div>
          </div>
        )}
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Get started</a>
      </div> */}
    </div>
  );
};

export default Navbar;
