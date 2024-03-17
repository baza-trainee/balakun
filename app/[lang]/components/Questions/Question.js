"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import { RiArrowUpSLine } from "react-icons/ri";



export default function Question({ item }) {
  const variants = {
    open: { opacity: 1, height: "auto", pointerEvents: "auto" },
    closed: { opacity: 0, height: 0, pointerEvents: "none" },
  };
  const [openQuestion, setOpenQuestion] = useState(false);

  const handleOpen = () => {
    setOpenQuestion(!openQuestion);
  };

  return (
    <section
      className={`relative rounded-xl border-b border-neutral-200 p-2  ${openQuestion ? "border-b border-red-600" : ""}`}
      onClick={handleOpen}
    >
      <h2 className="font-semibold cursor-pointer select-none pb-1 pr-8 text-left text-base  text-black md:pb-2">
        {item.title}
      </h2>
      <motion.div
        initial="closed"
        animate={openQuestion ? "open" : "closed"}
        variants={variants}
        transition={{
          opacity: { duration: 0.4, delay: openQuestion ? 0.3 : 0 },
          height: { duration: 0.6, delay: openQuestion ? 0 : 0.3 },
        }}
        className="flex"
      >
        <p className="pr-4 text-left text-base  font-normal text-neutral-600 md:pr-8 lg:max-w-xl 2xl:pr-0">
          {item.text}
        </p>
      </motion.div>
      <RiArrowUpSLine
        className={`absolute right-0 top-0 h-6 w-6 cursor-pointer duration-500 ${openQuestion ? "" : "-rotate-180"}`}
      />
    </section>
  );
}
