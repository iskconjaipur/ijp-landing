"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Architects_Daughter,
  Caveat,
  Playfair_Display,
} from "next/font/google";

const architect = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

const caveat = Caveat({
  subsets: ["latin"],
});

const play = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const slideInLeftTitleVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.5, delay: 0.5 }, // Adjust delay here
  },
};

const slideInLeftTextVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.5, delay: 0.7 }, // Adjust delay here
  },
};

const slideInBottomVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.5, delay: 0.5 },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.7 },
  },
};

const AnimatedItem = ({ children, variants }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const Details = () => {
  return (
    <div>
      <div className="p-14 px-6 bg-[#d17a29] text-white text-center">
        <div className="max-w-screen-lg gap-7 mx-auto flex justify-evenly items-center flex-wrap">
          <AnimatedItem variants={slideInLeftTitleVariants}>
            <h1 className={`${architect.className} text-6xl font-extrabold`}>
              Timings
            </h1>
          </AnimatedItem>
          <AnimatedItem variants={slideInLeftTextVariants}>
            <div className={`text-3xl font-medium ${caveat.className}`}>
              <p>
                Morning: <span className="font-normal">9:30am - 2:30pm</span>
              </p>
              <p>
                Evening: <span className="font-normal">6:00pm - 9:30pm</span>
              </p>
            </div>
          </AnimatedItem>
        </div>
      </div>

      <div className="py-16 px-5 text-center max-w-screen-lg m-auto">
        <AnimatedItem variants={slideInBottomVariants}>
          <h1
            className={`text-black mb-3 font-medium text-5xl ${play.className}`}
          >
            Our Awesome Menu
          </h1>
        </AnimatedItem>
        <AnimatedItem variants={slideInBottomVariants}>
          <h4 className="text-lime-500 mb-6">DINE IN | FOOD DELIVERY</h4>
        </AnimatedItem>
        <AnimatedItem variants={slideInBottomVariants}>
          <p className="text-lg font-medium mb-8">
            Have a facility for home delivery of all food prasadam of our
            complete menu with a very <b className="text-[#d17a29]">nominal</b>{" "}
            delivery charges{" "}
            <b className="text-[#d17a29]">anywhere in Jaipur</b>.
          </p>
        </AnimatedItem>
        <AnimatedItem variants={fadeInVariants}>
          <img
            src="/Explore/Govindas/qr-govindas.jpg"
            className="h-72 mx-auto mb-4"
          />
        </AnimatedItem>
        <AnimatedItem variants={slideInBottomVariants}>
          <p className="text-lg font-medium">
            Provide food prasadam at{" "}
            <b className="text-[#d17a29]">Jaipur railway</b> station for
            travelers and devotees. We also offer home delivery for large family{" "}
            <b className="text-[#d17a29]">
              functions, programs, and spiritual groups.
            </b>{" "}
            Place your order with Govinda&apos;s Restaurant Jaipur for{" "}
            <b className="text-[#d17a29]">doorstep delivery.</b>
          </p>
        </AnimatedItem>
      </div>

      <h2
        className={`font-medium text-center bg-[#d17a29] text-white py-10`}
        id="contact"
      >
        CONTACT US: 7742633232
      </h2>
    </div>
  );
};

export default Details;
