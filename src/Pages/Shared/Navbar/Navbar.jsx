import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-t-8 border-dark px-0 py-6 md:py-12">
      <div className="md:navbar-start px-6 lg:px-0 w-full flex justify-between">
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
        <ul className="flex gap-6">
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
          <li>
            <Link
              className="md:text-base lg:text-lg font-semibold hover:text-orange duration-100"
              to="/signup"
            >
              Sign up
            </Link>
          </li>
          <li>
            <Link
              className="md:text-base lg:text-lg font-semibold hover:text-orange duration-100"
              to="/reviews"
            >
              reviews
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Get started</a>
      </div> */}
    </div>
  );
};

export default Navbar;
