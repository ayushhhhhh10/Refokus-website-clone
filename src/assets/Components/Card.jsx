import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para }) {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-2xl ${width} min-h-[25rem] flex flex-col justify-between 
    hover:bg-violet-700 hover:pl-6 transition-all`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-sm">
            {para === true ? "Up Next: Culture" : "Get In Touch"}
          </h3>
          <IoIosArrowRoundForward className="text-2xl" />
        </div>
        <h1 className="text-3xl font-medium mt-5">
          {para === true ? "Who we are" : "Let's get to it, together."}
        </h1>
      </div>
      <div className="down w-full">
        {start === true && (
          <>
            <h1 className="text-8xl font-medium leading-none">
              Start a Project
            </h1>
            <button className="py-2 px-4 font-medium rounded-full border-[2px] border-zinc-400 mt-5">
              Contact us
            </button>
          </>
        )}
        {para === true && (
          <p className="text-sm font-[300] text-zinc-300">
            Explore what drives our team.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
