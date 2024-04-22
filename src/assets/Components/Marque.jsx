import { motion } from "framer-motion";
import React from "react";

function Marque({ imagesurl, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 12, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-8"
      >
        {imagesurl.map((url,index) => (
          <img key={index} src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 12, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-8"
      >
        {imagesurl.map((url,index) => (
          <img key={index} src={url} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marque;
