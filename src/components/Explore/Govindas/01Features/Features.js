"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Playfair } from "next/font/google";
import { featuresGovindas } from "./featuresData";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Features = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will only trigger once
    threshold: 0.1,    // Trigger when 10% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="py-10 px-4 sm:px-10">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="flex flex-wrap justify-center gap-7 sm:gap-10 lg:gap-16"
      >
        {featuresGovindas.map((feature, i) => (
          <motion.div
            className="flex items-center gap-2"
            key={i}
            variants={variants}
          >
            <div className="h-9 w-9 rounded-full flex justify-center items-center bg-[#d17a29]">
              <img src={feature.icon} className="h-7" />
            </div>
            <h4 className="font-medium">{feature.title}</h4>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
