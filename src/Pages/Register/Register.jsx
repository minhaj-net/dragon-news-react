import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";


const Register = () => {
  const { createUser, setUser,upDateUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        upDateUser({displayName:name,photoURL:photo}).then(()=>{
            setUser({...user,displayName:name,photoURL:photo});

            e.target.reset();
          }).catch(()=>{
            // console.log(error);
          })
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full  max-w-sm shrink-0 py-4  shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold">
            Register your account
          </h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name field */}
              <label className="label">Your Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Your Name"
              />
              {/* Photo url field */}
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="url"
                className="input"
                placeholder="https://example.com"
              />
              {/* Email field */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Your  Email"
              />
              {/* Password field */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </form>
          <p className="text-gray-600 text-center font-semibold text-[12px]">
            Dont’t Have An Account ?{" "}
            <Link to="/auth/login" className="text-secondary">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
