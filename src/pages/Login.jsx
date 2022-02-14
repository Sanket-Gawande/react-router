import React from "react";

const login = () => {
  return (
    <>
      <div className="mx-auto w-full pt-20">
        <div className=" w-[400px] text-center pb-6 mx-auto bg-white  flex flex-col items-center justify-center shadow-md rounded-md">
          <div className="w-full h-10 px-6 my-6 space-x-2 text-left ">
            <span className="w-6 h-6 rounded-full bg-orange-300 inline-block"></span>
            <span className="w-6 h-6 rounded-full bg-green-300 inline-block"></span>
            <span className="w-6 h-6 rounded-full bg-red-300 inline-block"></span>
          </div>
          <h4 className="w-4/5 text-left text-sm  text-slate-500">Username</h4>
          <input
            className="outline-none w-4/5 my-4 border block px-2 py-2 rounded-md border-slate-400"
            type="text"
          />
          <h4 className="w-4/5 text-left text-sm  text-slate-500">Password</h4>
          <input
            className="outline-none w-4/5 my-4 border block px-2 py-2 rounded-md border-slate-400"
            type="Password"
          />
          <button className="w-4/5 rounded-md shadow-md bg-red-500 px-8 py-2 text-sl800 transition-all mt-4 text-sm font-bold  text-white hover:bg-red-600 ">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default login;
