import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center">
      <img className="w-[350px]" src={logo} alt="" />
      <h3 className="text-accent">Journalism Without Fear or Favour</h3>
      <p>{format(new Date(), "EEEE , MMMM dd , yyyy")}</p>
    </div>
  );
};

export default Header;
