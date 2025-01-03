import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center w-screen mt-10">
      <form action="" className="flex flex-col gap-3 bg-white p-4 w-[20%]">
        <h1 className="font-bold text-2xl uppercase my-2">Sign Up </h1>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <input
          type="password"
          placeholder="secret pass"
          className="border border-gray-400 rounded-md px-2 py-1"
        />

        <button
          className="bg-gray-800 p-2 text-amber-200 my-2 rounded-md"
          type="submit"
        >
          SignUp
        </button>
        <p>
          Already Have An Account?{" "}
          <Link to={"/login"} className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
