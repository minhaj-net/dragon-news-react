import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full  max-w-sm shrink-0 py-4 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold">Login your account</h1>
          <form>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p className="text-gray-600 text-center font-semibold text-[12px]">
            Dont’t Have An Account ?{" "}
            <Link to="/auth/register" className="text-secondary">
              {" "}
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
