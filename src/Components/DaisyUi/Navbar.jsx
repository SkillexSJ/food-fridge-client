import React from "react";
import { NavLink } from "react-router";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>

      <NavLink to="/fridge">
        <li>Fridge</li>
      </NavLink>

      <NavLink to="/addfood">
        <li>Add Food</li>
      </NavLink>

      <NavLink to="/myitems">
        <li>My Items</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-primary">
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
        <a className="btn btn-ghost font-arvo text-xl">Food Fridge</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1 flex space-x-2">{links}</ul>
      </div>
      <div className="navbar-end flex items-center gap-5 px-2">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
        <NavLink to="/auth/login"> Login</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
