import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../../assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("logout button clicek");
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>
      <div className="flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/carrer">Career</NavLink>
      </div>
      <div className="flex gap-4">
        <img src={userImg} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-8">
            Log out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
