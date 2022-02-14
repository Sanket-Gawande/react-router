import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Products() {
  function activeState({ isActive }) {
    return isActive ? "border-b-2 border-sky-400 text-sky-400" : "";
  }
  return (
    <>
      <main className="w-full py-8">
        <h2 className="my-4 text-slate-400 w-4/5 mx-auto font-bold text-4xl">
          Shop by Categories
        </h2>
        <div className="py-4 px-6  w-4/5 mx-auto text-gray-900 bg-slate-100 my-4 flex items-center space-x-6">
          <NavLink className={activeState} to="featured">
            Featured
          </NavLink>
          <NavLink className={activeState} to="new">
            New arrival
          </NavLink>
          <NavLink className={activeState} to="cheaper">
            Pocket friendly
          </NavLink>
        </div>
        <div></div>
      </main>
      <Outlet />
    </>
  );
}

export default Products;
