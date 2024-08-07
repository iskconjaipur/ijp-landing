"use client";

import { PT_Serif } from "next/font/google";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { features } from "./featuresData";

const ptserif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Facilities = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });

  return (
    <div className="py-14 px-10 2xl:flex 2xl:flex-col 2xl:items-center">
      <h1
        className={`${ptserif.className} mb-10 font-[400] text-center text-4xl`}
      >
        Facilities
      </h1>
      <div
        ref={ref}
        className="flex justify-center gap-20 gap-y-8 flex-wrap max-w-screen-lg m-auto"
      >
        {features.map((facility, index) => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: inView ? 0.2 * (index + 1) : 0,
            }}
            key={index}
            className="flex flex-col items-center max-w-32"
          >
            <div className="w-[90px] h-[90px] flex justify-center items-center mb-2 border-2  rounded-full">
              <img
                src={"/Connect/Kids/icons/" + facility.icon}
                alt={facility.text}
                className="h-10"
              />
            </div>
            <h6 className="text-center">{facility.text}</h6>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
