import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../pages/auth/firebase.init";
const Navber = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Shoe Inventory
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
            {user ? (
                <li>
                  <Link to={"/add-item"}>Add Item</Link>
                </li>
              ) : (
                ""
              )}
            {user ? (
                <li>
                  <Link to={"/manage"}>Manage</Link>
                </li>
              ) : (
                ""
              )}
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              {user ? (
                ""
              ) : (
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
              )}
              {user ? (
                ""
              ) : (
                <li>
                  <Link to={"/signup"}>Signup</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <span
                  onClick={(e) => {
                    signOut(auth);
                    navigate("/");
                  }}
                >
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
