"use client";

import { Playfair } from "next/font/google";
import { objectives } from "./objData";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Objectives = () => {
  return (
    <div className="p-14 px-0 sm:px-5 bg-[#d17a29]">
      <h1
        className={`${play.className} text-center bg-[#d17a29] text-white pb-10 text-6xl`}
      >
        Our Activities
      </h1>
      <div className="flex flex-wrap justify-evenly gap-10 m-auto max-w-screen-xl">
        {objectives.map((activity, i) => (
          <ObjCard key={i} activity={activity} i={i} />
        ))}
      </div>
    </div>
  );
};

const ObjCard = ({ activity, i }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={ { y: inView ? 0 : 20, opacity: inView ? 1 : 0 } }
      transition={{ duration: 1, delay: inView ? 0.1 * (i + 1) : 0 }}
      className="sm:min-w-72 sm:max-w-72 min-w-64 max-w-64 hover:scale-105 transition-all duration-500 bg-white rounded-lg shadow-lg"
    >
      <img
        className="rounded-t-lg object-cover h-64 w-full object-top"
        src={`/Connect/BhaktiVriksha/objectives/${activity.image}`}
        alt="Noteworthy technology acquisitions 2021"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          {activity.title}
        </h5>
        <p className="mb-3 font-normal text-justify">{activity.description}</p>
      </div>
    </motion.div>
  );
};

export default Objectives;
