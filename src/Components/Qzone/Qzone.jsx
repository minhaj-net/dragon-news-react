import React from "react";
import Swimming from "../../assets/swimming.png";
import Class from "../../assets/class.png";
import playGround from "../../assets/playground.png";
const Qzone = () => {
  return (
    <div className="bg-base-200 items-center justify-center p-4">
      <h1 className="font-bold ">Qzone</h1>
      <div className="space-y-6 flex flex-col items-center justify-center">
        <img src={Swimming} alt="" />
        <img src={Class} alt="" />
        <img src={playGround} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
