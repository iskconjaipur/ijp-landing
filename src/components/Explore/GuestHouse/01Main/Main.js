"use client";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

export default function GuestHouseMain() {
  return (
    <>
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
        }}
        className="relative h-[100vh] mt-[65px] w-full overflow-hidden"
      >
        <Image
          src="/Explore/GuestHouse/guest_main.jpg"
          alt="Main Poster"
          layout="fill"
          objectFit="cover"
          priority={true} // This ensures the image loads as a priority
          quality={75} // Adjust quality to balance performance and appearance
        />
        <div className="absolute flex flex-col items-center w-full top-[40vh] justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`font-bold text-white text-6xl md:text-7xl text-center ${dancing.className}`}
            style={{
              textShadow:
                "2px 2px black, 4px 4px 10px #d17a29, -4px -4px 10px #d17a29",
            }}
          >
            Welcome To GuestHouse
          </motion.h1>
        </div>
      </div>
    </>
  );
}
