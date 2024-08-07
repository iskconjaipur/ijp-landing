"use client";

import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className="bg-[url('/Home/HomePrabhupada/SPBannerHome.png')] h-[100vh] mt-[65px] bg-cover bg-center w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute flex flex-col items-center w-full top-[70vh] justify-center"
      >
        <h1
          className={`font-bold text-white text-6xl md:text-7xl text-center  ${dancing.className}`}
          style={{
            textShadow:
              "2px 2px black, 20px 20px 50px #d17a29, -20px -20px 50px #d17a29, -20px 20px 50px #d17a29, 20px -20px 50px black",
          }}
        >
          Srila Prabhupada
        </h1>
      </motion.div>
    </div>
  );
};

export default Hero;
