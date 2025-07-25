import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex w-[90%] max-w-6xl shadow-xl rounded-2*2 overflow-hidden">
        
        {/* Left Illustration */}
        <div className="hidden md:flex w-1/2 bg-white-100 p-10 items-center justify-center">
          <img
            src="/illustration.png"  
            alt="illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-10">
          <div className="flex justify-center mb-6">
            <div className="bg-red-600 text-white font-bold py-2 px-6 rounded-full text-lg">
              Company Logo
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md bg-gray-200 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-gray-200 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md bg-gray-200 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-md bg-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700"
            >
              Sign up
            </button>
          </form>

          <div className="text-center mt-6 text-gray-600">
            <p className="relative">
              <span className="absolute left-1/2 top-[-12px] transform -translate-x-1/2 bg-white px-2 text-gray-500">
                Or
              </span>
              <hr className="border-gray-300" />
            </p>
            <p className="mt-6">
              Have an account?{" "}
              <a href="signin" className="text-blue-600 font-semibold">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
