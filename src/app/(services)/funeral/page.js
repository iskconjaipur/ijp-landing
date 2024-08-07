"use client";
import FunerallIntro from "@/components/Services/Funeral/01FuneralIntro/FuneralIntro";
import FuneralActivites from "@/components/Services/Funeral/02FuneralActivites/FuneralActivites";
import { motion } from "framer-motion";
import { Dancing_Script, Playfair } from "next/font/google";
import Link from "next/link";
import React from "react";
const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const popOutTitleVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const popOutButtonVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
};

const page = () => {
  const handleScrollToContactSection = () => {
    const contactSection = document.getElementById("contactSection");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-top"
        style={{
          backgroundImage: "url('/Services/HouseProgram/funeral.webp')",
          backgroundSize: "cover",
        }}
      >
        <motion.h1
          className={`${dancing.className} absolute p-4 w-full text-center text-white text-5xl sm:text-7xl top-1/2`}
          style={{ textShadow: "0px 0px 5px black" }}
          variants={popOutTitleVariants}
          initial="hidden"
          animate="visible"
        >
          <span
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "0 10px" }}
          >
            Prayer For The Departed Soul
          </span>
        </motion.h1>
        <div className="absolute w-full flex justify-center top-[80vh] no-underline hover:no-underline active:no-underline">
          <motion.button
            onClick={handleScrollToContactSection}
            className="py-3 px-6 rounded-full text-xl bg-[#d17a29] text-white font-semibold top-[80vh]"
            initial="hidden"
            animate="visible"
          >
            Contact Us
          </motion.button>
        </div>
      </div>
      
      <FunerallIntro />
      <FuneralActivites />
    </div>
  );
};

export default page;
