import React from "react";
import {Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <NavLink to="/" className="text-xl font-bold tracking-tight">
              <span className="text-gray-900">News</span>
              <span className="text-amber-500">Wave</span>
            </NavLink>
          </div>

          <div className="flex absolute right-50 items-center gap-8">
            <NavLink to="/dashboard" className={({ isActive }) => `text-sm ${isActive ? "text-amber-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}>Dashboard</NavLink>

            <NavLink to="/" end  className={({ isActive }) => `text-sm ${isActive ? "text-amber-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}>Home</NavLink>

            <NavLink to="/business" className={({ isActive }) => `text-sm ${isActive ? "text-amber-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}>Business</NavLink>

            <NavLink to="/entertainment" className={({ isActive }) => `text-sm ${isActive ? "text-amber-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}>Entertainment</NavLink>

            <NavLink to="/health" className={({ isActive }) => `text-sm ${isActive ? "text-amber-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}>Health</NavLink>

            <NavLink to="/science" className={({ isActive }) => `text-sm ${isActive ? "text-amber-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}>Science</NavLink>

            <NavLink to="/sports" className={({ isActive }) => `text-sm ${isActive ? "text-amber-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}>Sports</NavLink>

            <NavLink to="/technology" className={({ isActive }) => `text-sm ${isActive ? "text-amber-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}>Technology</NavLink>

            <NavLink to="/about" className={({ isActive }) => `text-sm ${isActive ? "text-gray-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}> About</NavLink>

            <NavLink to="/contact" className={({ isActive }) => `text-sm ${isActive ? "text-amber-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}>Contact</NavLink>
          </div>

          <div className="absolute right-5 flex items-center gap-2">
            <Link to="/signin" className="text-sm text-gray-700 hover:text-amber-400 font-medium">Sign In</Link>
            <Link to="/signup" className="px-3 py-1.5 bg-amber-500 text-white text-sm rounded-md hover:bg-amber-400 transition"> Sign Up</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
