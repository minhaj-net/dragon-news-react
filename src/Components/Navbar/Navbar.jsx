import React from "react";
import { Link, NavLink } from "react-router";
import user from "../../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/carrer">Career</NavLink>
      </div>
      <div className="flex gap-4">
        <img src={user} alt="" />
        <Link className="btn btn-primary px-8">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
