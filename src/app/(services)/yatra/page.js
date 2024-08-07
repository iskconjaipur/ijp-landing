"use client";
import IntroYatra from "@/components/Services/Yatra/01IntroYatra/IntroYatra";
import Benefits from "@/components/Services/Yatra/02Benefits/Benefits";
import ActivitiesYatra from "@/components/Services/Yatra/03Activities/ActivitiesYatra";
import { motion } from "framer-motion";
import { Dancing_Script, Playfair } from "next/font/google";
import Link from "next/link";

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
  return (
    <div>
      <div>
        <div
          className="relative h-screen w-full bg-cover bg-top"
          style={{
            backgroundImage: "url('/IJP/ijpBanner.jpg')",
          }}
        >
          <motion.h1
            className={`${dancing.className} absolute p-4 w-full text-center text-white text-5xl sm:text-7xl top-1/2`}
            style={{ textShadow: "0px 0px 5px black" }}
            variants={popOutTitleVariants}
            initial="hidden"
            animate="visible"
          >
            Dham Yatra
          </motion.h1>
          <Link
            href="#contact"
            className="absolute w-full flex justify-center top-[80vh] no-underline hover:no-underline active:no-underline"
          >
            <motion.button
              variants={popOutButtonVariants}
              initial="hidden"
              animate="visible"
              className="py-3 px-6 rounded-full text-xl bg-[#d17a29] text-white font-semibold top-[80vh]"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
        <IntroYatra />
        <Benefits />
        <ActivitiesYatra />
        <h2
          className={`font-medium  text-center bg-[#d17a29] text-white py-10`}
          id="contact"
        >
          <span className={`${play.className} text-5xl font-semibold`}>
            CONTACT US:
          </span>{" "}
          9649689649
        </h2>
      </div>
    </div>
  );
};

export default page;
