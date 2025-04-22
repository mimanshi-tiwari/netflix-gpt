import { useState } from "react";
import Header from "./header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative">
      <Header />
      <img
        alt="backdrop-image"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg"
      />
      <form className="flex flex-col gap-4 w-3/12 absolute top-[30%] left-[35%] p-6 bg-black text-white rounded bg-opacity-80">
        <p className="text-2xl font-semibold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 rounded bg-gray-900 border border-gray-300 bg-opacity-80"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 rounded bg-gray-900 border border-gray-300 bg-opacity-80"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded bg-gray-900 border border-gray-300 bg-opacity-80"
        />
        <button className="px-4 py-2 bg-[#e50914] rounded font-semibold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-xs">
          {isSignIn ? (
            <div className="flex gap-1">
              New to Netflix?
              <span
                className="font-semibold underline cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign up now.
              </span>
            </div>
          ) : (
            <div className="flex gap-1">
              Already a user?
              <span
                className="font-semibold underline cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign In
              </span>
            </div>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
