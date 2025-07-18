import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "./Navbar.css";
import { BiFridge } from "react-icons/bi";
import { AuthContext } from "../../Provider/AuthContext";
import { Magnetic } from "../../Components/animate-ui/effects/Magnetic";
import toast, { Toaster } from "react-hot-toast";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
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

  const links2 = (
    <>
      <NavLink
        to="/myprofile"
        className={({ isActive }) =>
          `${isActive ? "nav-link active" : "nav-link"} rounded-xl p-2`
        }
      >
        <li>My Profile</li>
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? "nav-link active" : "nav-link"} rounded-xl p-2`
        }
      >
        {user ? <li onClick={() => handleLogOut()}>Logout</li> : <li>Login</li>}
      </NavLink>
    </>
  );

  const notify = () =>
    toast.success("BYE BYE ! 👋", {
      style: {
        border: "1px solid #116f6f",
        padding: "16px",
        color: "black",
      },
      iconTheme: {
        primary: "#116f6f",
        secondary: "#FFFAEE",
      },
    });

  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/auth/login");
      notify();
    });
  };
  return (
    <div className="navbar py-5 lg:px-15 lg:py-5">
      <Toaster></Toaster>
      <div className="navbar-start space-x-4">
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
        <div className="flex flex-row-reverse gap-5 items-center">
          <BiFridge
            className="-translate-x-5 hidden lg:flex"
            color={"teal"}
            size={50}
          ></BiFridge>
          <NavLink to="/">
            <h2 className="font-arvo text-xl cursor-pointer text-teal-800 font-bold lg:text-2xl">
              Food Fridge
            </h2>
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden font-semibold font-arvo lg:flex">
        <ul className="px-1 flex space-x-5">{links}</ul>
      </div>
      <div className="navbar-end flex items-center gap-5 px-2">
        {/* OLD SYSTEM */}
        {/* <div className="avatar ">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div> */}

        {/* NEW SYSTEM */}
        <div className="relative group inline-block">
          {/* Avatar Trigger */}
          <div className="avatar cursor-pointer">
            <div className="w-14 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>

          {/* Dropdown */}
          <div className="absolute right-0 top-full bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
            <ul className="px-1 flex flex-col space-x-5">{links2}</ul>
          </div>
        </div>
        {user?.email ? (
          <NavLink
            onClick={handleLogOut}
            className="btn bg-teal-800 border-none text-teal-50 font-arvo hidden lg:flex"
          >
            {" "}
            Logout
          </NavLink>
        ) : (
          <NavLink
            className="btn bg-teal-800 border-none text-teal-50 font-arvo hidden lg:flex"
            to="/auth/login"
          >
            {" "}
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
