import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    // console.log("Login button clicked ");
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    signInUser(email, password)
      .then(() => {
        // const user = result.user;
        // console.log(user);
      })
      .catch(() => {
        // console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full  max-w-sm shrink-0 py-4 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold">Login your account</h1>
          <form onSubmit={handleSignIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
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
