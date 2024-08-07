"use client";
import { React, useState } from "react";
import {
  Poppins,
  Dancing_Script,
  Sriracha,
  Timmana,
  Tenali_Ramakrishna,
} from "next/font/google";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { activities } from "./CouncilMemberData";

const dancing = Sriracha({
  subsets: ["latin"],
  weight: "400",
});

const agdaFont = Tenali_Ramakrishna({
  subsets: ["latin"],
  weight: ["400"],
});

const CouncilMembersIntro = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHoverStart = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className="bg-[#d17a29] text-black p-4 md:p-10">
        <h1 className={`${dancing.className} text-4xl text-white mt-20`}>
          Temple Managers <span className="underline decoration-wavy decoration-[#9eadc6]">Zonal</span> Secretaries:
        </h1>
        {/* <hr className="sm:w-1/2 border-white mt-2 mb-0" /> */}
        <div className="flex flex-wrap justify-evenly gap-10 mt-10">
          {activities.map((pt, i) => (
            <ActivityCard pt={pt} i={i} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

const ActivityCard = ({ pt, i }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      // className="relative w-72 pt-10 hover:scale-110 transition-all duration-500"
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.7, delay: inView ? 0.1 * (i + 1) : 0 }}
    >
      <div className="p-2 rounded-full h-[210px] w-[210px] border-dotted border-2 border-[#9eadc6]">
        <div>
          <img src={pt.image} className="w-48 h-48 object-cover rounded-full" />
        </div>
      </div>
      <h4
        className={`w-[210px] mt-2 text-white text-center font-semibold leading-5 pt-2 ${agdaFont.className}`}
      >
        {pt.Name}
      </h4>
      <h6 className="text-center w-[210px] text-[#e1dfea] font-semibold">
        {pt.title}
      </h6>
    </motion.div>
  );
};

export default CouncilMembersIntro;
