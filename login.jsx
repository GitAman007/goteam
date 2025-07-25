import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-white-1000 flex items-center justify-center">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-center mb-6">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="w-12 h-12"
          />
        </div>
        <h2 className="text-black text-2xl font-semibold text-center mb-6">Sign in to GoMeet</h2>
        <form>
          <label className="block text-black-300 text-lg mb-2">Username or email address</label>
          <input
            type="text"
            className="w-full px-3 py-2 mb-4 rounded border border-gray-600 bg-white-800 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex justify-between items-center mb-2">
            <label className="text-black-300 text-sm">Password</label>
            <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
          </div>
          <input
            type="password"
            className="w-full px-3 py-2 mb-6 rounded border border-gray-600 bg-white-700 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
