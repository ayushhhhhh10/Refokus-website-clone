import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="nav max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
      <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className="links flex gap-16 ml-20">
        {["Home","Work","Culture","","News"].map((elem,index) => (
          elem.length=== 0 ? <span key={index} className="inline-block w-[0.5px] h-6 bg-zinc-600"></span> :(
        <a key={index} className="text-sm font-[400] flex items-center gap-1" href="#">
          {index=== 1 && <span key={index} className="inline-block w-1 h-1 rounded-full bg-green-400"></span>}
          {elem}</a>)
        ))}
      </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
