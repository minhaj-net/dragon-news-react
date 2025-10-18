import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold">Login With</h1>
      <div className="flex flex-col justify-center items-center space-y-3 mt-4">
        <button className="btn btn-wide btn-outline btn-secondary">
          <FcGoogle />
          Login With Google{" "}
        </button>
        <button className="btn btn-wide btn-outline btn-info">
          <span className="text-black">
            <FaGithub />
          </span>
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
