"use client";

import { Courgette, Great_Vibes, PT_Serif, Playfair_Display, Satisfy, Ubuntu } from "next/font/google";
import { motion } from "framer-motion";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const play = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

const ptserif = Courgette({
  subsets: ["latin"],
  weight: ["400"]
})

const IJPHero = () => {
  return (
    <div
      className="relative h-[95vh] mt-[65px] w-full"
      style={{ 
        backgroundImage: "url('/IJP/temple-day.jpg')",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute h-[95vh] inset-0 bg-black/60"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`${ubuntu.className} absolute flex flex-col items-center w-full top-[60vh] justify-center`}
      >
        <h1
          className={`font-[500] text-white text-5xl md:text-7xl px-2 pb-3 text-center ${ptserif.className}`}
          style={{
            textShadow:
              // "2px 2px black, 20px 20px 50px #d17a29, -20px -20px 50px #d17a29, -20px 20px 50px #d17a29, 20px -20px 50px black",
              "1px 1px black, 1px -1px black, 1px -1px black, -1px -1px black",
          }}
        >
          ISKCON Jaipur 
        </h1>
        <p className="lg:w-3/5 w-4/5 text-white text-[16px] sm:text-[20px] text-justify pt-4" style={{
          textAlignLast: "center"
        }}>
          Sri Sri Giridhari Dauji Mandir | Jaipur (Gupt Vrindavan), Mansarovar
        </p>
      </motion.div>
    </div>
  );
};

export default IJPHero;
