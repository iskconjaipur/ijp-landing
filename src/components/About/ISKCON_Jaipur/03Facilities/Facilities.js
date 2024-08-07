"use client";

import { PT_Serif } from "next/font/google";
import { facilities } from "./facilityData";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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
    <div className="py-14 px-10 2xl:flex 2xl:flex-col 2xl:items-center bg-[#d17a29] text-white">
      <h1
        className={`${ptserif.className} pb-6 font-[400] text-center text-4xl`}
        // style={{ textShadow: "20px 20px 40px #d17a29, -20px 20px 40px #d17a29, 20px -20px 40px #d17a29, -20px -20px 40px #d17a29" }}
        // style={{ textShadow: "1px -1px #d17a29" }}
      >
        Facilities
      </h1>
      <div
        ref={ref}
        className="grid lg:grid-cols-4 grid-cols-2 place-items-center gap-4 2xl:w-[1500px]"
      >
        {facilities.map((facility, index) => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: inView ? 0.2 * (index + 1) : 0,
            }}
            key={index}
            className="flex flex-col items-center"
          >
            <div className="w-[90px] h-[90px] flex justify-center items-center mb-2 border-2 border-[#ffd6af] rounded-full">
              <img
                src={"/IJP/facilities/" + facility.icon}
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
