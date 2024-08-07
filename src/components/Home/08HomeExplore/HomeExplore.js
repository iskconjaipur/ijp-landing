"use client";

import { useEffect, useState } from "react";
import { Dancing_Script } from "next/font/google";
import { exps } from "./homeexpData";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const HomeExplore = () => {
  return (
    <>
      <div className={`pt-16 text-center bg-white ${dancing.className}`}>
        <h1 className="text-6xl font-[900]">Explore ISKCON</h1>
        <h1 className="text-6xl font-[900] m-0">Jaipur</h1>
      </div>
      <div className="flex flex-wrap md:gap-40 gap-10 md:gap-y-20 justify-evenly max-w-screen-xl mx-auto my-10 bg-white">
        {exps.map((exp, i) => (
          <AchievementCard key={i} index={i} exp={exp} />
        ))}
      </div>
    </>
  );
};

const AchievementCard = ({ index, exp }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: inView ? 0.1 * (index + 1) : 0 }}
      className="hover:bg-[#d17a29] rounded-lg max-w-80 transition-all duration-300 p-2"
    >
      <Link href={exp.link} className="no-underline text-gray-800 hover:no-underline hover:text-white">
        <img
          className="h-[175px] w-[175px] m-auto object-cover object-center rounded-full"
          src={exp.image}
        />
        <h1 className={`${dancing.className} pt-4 text-center font-black m-0`}>
          {exp.title}
        </h1>
      </Link>
    </motion.div>
  );
};

export default HomeExplore;
