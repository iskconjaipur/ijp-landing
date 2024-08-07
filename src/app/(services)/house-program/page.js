"use client"
import Intro from "@/components/Services/HouseProgram/01Intro/Intro";
import Activities from "@/components/Services/HouseProgram/02Activities/Activities";
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

const Page = () => {
  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-top"
        style={{ backgroundImage: "url('/Services/HouseProgram/house-program.png')" }}
      >
        <motion.h1
          className={`${dancing.className} absolute p-4 w-full text-center text-white text-5xl sm:text-7xl top-1/2`}
          style={{ textShadow: "0px 0px 5px black" }}
          variants={popOutTitleVariants}
          initial="hidden"
          animate="visible"
        >
          House Program
        </motion.h1>
        <Link
          href="#contact"
          className="absolute w-full flex justify-center top-[80vh] no-underline hover:no-underline active:no-underline"
        >
          <motion.button
            className="py-3 px-6 rounded-full text-xl bg-[#d17a29] text-white font-semibold top-[80vh]"
            variants={popOutButtonVariants}
            initial="hidden"
            animate="visible"
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
      <Intro />
      <Activities />
      <h2 className={`font-medium text-orange-900 text-center py-10`} id="contact">
        <span className={`${play.className} text-5xl font-semibold`}>
          CONTACT US:
        </span>{" "}
        9649689649
      </h2>
    </div>
  );
};

export default Page;
