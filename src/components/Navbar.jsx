import React from "react";
import {NavLink , Link} from 'react-router-dom'
function Navbar() {
  function activeState({isActive}){
    return isActive ? "border-b-2 border-red-400 text-red-400 font-bold" : ""
  }

  return (
    <nav className=" width-screen shadow-md px-6 py-6 sm:px-24 flex justify-between items-center">
      <h4 className="font-bold text-xl text-red-600 cursor-pointer">
       <Link to='/'>React-Router</Link>
      </h4>
      <ul className="flex items-center text-sm  space-x-4 sm:space-x-6 text-gray-700 cursor-pointer">
        <li className="hover:text-red-400">
          <NavLink className={activeState} to="/">Home</NavLink>
        </li>
        <li className="hover:text-red-400">
          <NavLink className={activeState} to="/about">About</NavLink>
        </li>
        <li className="hover:text-red-400">
          <NavLink className={activeState} to="/products">Products</NavLink>
        </li>
        <li className="hover:text-red-500 transition-all px-4 py-1.5 bg-slate-100 rounded-md shadow-sm">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;