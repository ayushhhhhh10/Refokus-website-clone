import React from "react";
import Button from "./Button";

function Product({ data,mover,count}) {
  return (
    <div className="w-full py-20 text-white">
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl font-medium">{data.title}</h1>
        <div className="w-1/3 ">
          <p className="mb-6">{data.description}</p>
          <div className="flex items-center gap-5 select-none">
            {data.live && <Button title="Live Website" />}
            {data.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
