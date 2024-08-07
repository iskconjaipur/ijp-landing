"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dancing_Script, Playfair } from "next/font/google";

const bookings = [
  "House Program",
  "Birthday Party",
  "Anniversary",
  "Marriage",
  "Corporate Events",
  "Spiritual Events",
  "Feast",
  "Other Bookings",
];

const popOutTitleVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const popOutButtonVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
};

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  const handleAnimation = () => {
    setIsVisible(true);
  };

  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-top"
        style={{
          backgroundImage: "url('/Services/CommunityHall/community-hall.jpg')",
        }}
      >
        <motion.h1
          className={`${dancing.className} absolute p-4 w-full text-center text-white text-5xl sm:text-7xl top-1/2`}
          style={{ textShadow: "0px 0px 5px black" }}
          variants={popOutTitleVariants}
          initial="hidden"
          animate="visible"
        >
          Community Hall
        </motion.h1>
        <Link
          href="#contact"
          className="absolute w-full flex justify-center top-[80vh] no-underline hover:no-underline active:no-underline"
          variants={popOutButtonVariants}
            initial="hidden"
            animate="visible"
        >
          <motion.button
            className="py-3 px-6 rounded-full text-xl bg-[#d17a29] text-white font-semibold top-[80vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
      <div className="py-10">
        <h1
          className={`${play.className} text-center text-orange-900 font-medium`}
        >
          Bookings For
        </h1>
        <div className="flex flex-wrap gap-4 justify-center p-5" ref={ref}>
          {bookings.map((booking, i) => (
            <motion.button
              key={i}
              className="text-white text-base font-medium bg-[#d17a29] px-3 py-1 rounded-full"
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {booking}
            </motion.button>
          ))}
        </div>
        <h2
          className={`font-medium text-3xl text-orange-900 text-center pt-10`}
          id="contact"
        >
          <span className={`${play.className} text-4xl font-semibold`}>
            CONTACT US:
          </span>{" "}
          9649689649
        </h2>
      </div>
    </div>
  );
};

export default Page;
