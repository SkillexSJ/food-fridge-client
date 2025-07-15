import React from "react";
import { NavLink } from "react-router";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "./Navbar.css";
import { BiFridge } from "react-icons/bi";
const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? "nav-link active" : "nav-link"} rounded-xl p-2`
        }
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to="/fridge"
        className={({ isActive }) =>
          `${isActive ? "nav-link active" : "nav-link"} rounded-xl p-2`
        }
      >
        <li>Fridge</li>
      </NavLink>

      <NavLink
        to="/addfood"
        className={({ isActive }) =>
          `${isActive ? "nav-link active" : "nav-link"} rounded-xl p-2`
        }
      >
        <li>Add Food</li>
      </NavLink>

      <NavLink
        to="/myitems"
        className={({ isActive }) =>
          `${isActive ? "nav-link active" : "nav-link"} rounded-xl p-2`
        }
      >
        <li>My Items</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar py-5 lg:px-15 lg:py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <HiOutlineMenuAlt2 size={30}></HiOutlineMenuAlt2>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex  flex-row-reverse items-center">
          <BiFridge
            className="-translate-x-5"
            color="green"
            size={50}
          ></BiFridge>
          <h2 className="btn btn-ghost font-arvo text-2xl">Food Fridge</h2>
        </div>
      </div>
      <div className="navbar-center hidden font-semibold font-arvo lg:flex">
        <ul className="px-1 flex space-x-5">{links}</ul>
      </div>
      <div className="navbar-end flex items-center gap-5 px-2">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
        <NavLink
          className="btn bg-teal-800 border-none text-teal-50 font-arvo hidden lg:flex"
          to="/auth/login"
        >
          {" "}
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
