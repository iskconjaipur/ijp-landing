"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contactData = [
  { name: "Govinda's & D' Cafe", number: "7742633232" },
  { name: "Guest House", number: "8905661443" },
  { name: "Community Hall", number: "9649689649" },
  { name: "Youth Classes", number: "6378588289" },
  { name: "Online Youth Classes", number: "9649689649" },
  { name: "Elder Classes", number: "9649689649" },
  { name: "Kids And Teenager Classes", number: "9819413260" },
  { name: "Life Member", number: "9649689649" },
  { name: "Yatra", number: "9649689649" },
  { name: "Other Queries", number: "9649689649" },
];

const Queries = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="h-[508px] rounded w-full sm:w-[500px] shadow-xl text-white bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 px-4 pt-8"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl text-center font-bold mb-5">Queries</h2>
      <table className="w-full">
        <tbody>
          {contactData.map((item, index) => (
            <tr
              key={index}
            >
              <td className="p-2 pr-0 font-semibold border border-white">
                {item.name}:
              </td>
              <td className="text-center font-semibold border border-white">
                +91 {item.number}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Queries;
