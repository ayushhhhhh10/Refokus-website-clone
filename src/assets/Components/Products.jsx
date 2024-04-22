import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 18.5);
  };
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design..",
      live: true,
      case: true,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate..",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop..",
      live: true,
      case: true,
    },
  ];
  return (
    <div className="mt-20 relative">
      {products.map((val, index) => (
        <Product key={index} mover={mover} data={val} count={index} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
          className="window absolute top-0 w-[28rem] h-[18.5rem] left-[42%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              src="Resources/Arqitel project video 4_3.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              src="Resources/TTR project video 4_3_H.264.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              src="Resources/YIR website 2022 4_3_VP9.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              src="Resources/yahoo.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
