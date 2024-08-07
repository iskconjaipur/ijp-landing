"use client";

import { motion } from "framer-motion";
import Features from "@/components/Explore/Govindas/01Features/Features";
import About from "@/components/Explore/Govindas/02About/About";
import Parties from "@/components/Explore/Govindas/03Parties/Parties";
import Details from "@/components/Explore/Govindas/04Details.js/Details";

const page = () => {
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <div>
      <div
        className="relative w-full h-screen bg-cover bg-top"
        style={{ backgroundImage: "url('/Explore/Govindas/govindas.jpg')" }}
      >
        <div className="absolute h-screen inset-0 bg-black/50"></div>
        <div className="absolute top-[40vh] w-full flex justify-center">
          <motion.img
            src="/Explore/Govindas/Govindas_Logo.png"
            className="md:w-auto w-9/12"
            initial="hidden"
            animate="visible"
            variants={logoVariants}
          />
        </div>
      </div>
      <Features />
      <About />
      <Parties />
      <Details />
    </div>
  );
};

export default page;
