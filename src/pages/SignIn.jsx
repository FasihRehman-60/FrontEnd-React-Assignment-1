import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-amber-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Welcome Back 👋
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1"> Password </label>
            <input type="password" placeholder="Enter your password"  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"  required   />
          </div>
 
          <button type="submit"  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-md transition"> Sign In</button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-amber-500 font-medium hover:underline"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
