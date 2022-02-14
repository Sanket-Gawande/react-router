import React, { useState } from "react";

import AboutComp from "./products/AboutComp";

function About() {
  const [showDesc, setShowDesc] = useState({
    state: false,
    arrDown: true,
    arrUp: false,
  });

  return (
    <div className="p-12 mx-auto sm:w-4/6">
      <h4 className="text-red-500 text-xl font-semibold">Something about me</h4>
      <p className="my-4 text-slate-500 "> about me section</p>
      <p
        onClick={() => {
          setShowDesc({
            state: !showDesc.state,
            arrDown: !showDesc.arrDown,
            arrUp: !showDesc.arrUp,
          });
        }}
        className="text-sky-600 text-sm cursor-pointer"
        to="company"
      >
        Company
        {showDesc.arrDown && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {showDesc.arrUp && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </p>
      <p className="my-4 text-slate-800 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        architecto soluta adipisci deleniti provident labore beatae molestias
        perspiciatis minus amet, rem odio iure, commodi itaque incidunt, porro
        quia praesentium perferendis neque sint. Saepe laudantium rem corrupti,
        quaerat excepturi enim molestiae.
      </p>
      <p className="my-4 text-slate-800 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum
        similique doloribus itaque ab pariatur aliquam delectus consequuntur
        repudiandae, laboriosam beatae enim maiores veritatis nihil ea placeat
        quis aliquid in repellat dolor fugit tempore illum dolores. Quo, id fuga
        unde culpa, corporis facere quam rerum, aliquid similique ad inventore
        modi?
      </p>
      {showDesc.state && <AboutComp />}
    </div>
  );
}

export default About;
