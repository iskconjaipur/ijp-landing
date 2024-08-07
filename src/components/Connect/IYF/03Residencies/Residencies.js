"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Kalam, Tillana } from "next/font/google";
import Link from "next/link";
import { residencies } from "./redidencyData";

const dance = Kalam({
  subsets: ["latin"],
  weight: ["400", "300", "700"],
});

const tillana = Tillana({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});


const ResidencyCard = ({ connect, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.2,
        },
      });
    } else {
      controls.start({
        x: -100,
        opacity: 0,
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div ref={ref} initial={{ x: -100, opacity: 0 }} animate={controls}>
      <img
        src={connect.image}
        className="w-72 h-52 object-cover object-top rounded-2xl border-2"
        alt="Connect Image"
      />
      <h3
        className={`${tillana.className} w-72 my-2 text-xl font-medium text-black text-center`}
      >
        {connect.title}
      </h3>
      <Link href={connect.link} target="_blank" className="hover:no-underline">
        <button className="font-medium hover:bg-white hover:text-[#e75e16] hover:scale-105 bg-[#e75e16] text-white transition-all duration-300 border-2 border-[#e75e16] text-sm py-1 px-4 rounded-full flex items-center gap-1 m-auto">
          <span>Location</span>
        </button>
      </Link>
    </motion.div>
  );
};

// Connect component
const Residencies = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [controls, inView]);

  return (
    <section className="py-12 px-10 bg-[#f9ede2]">
      <motion.h1
        ref={ref}
        initial={{ y: -50, opacity: 0 }}
        animate={controls}
        className={`text-[#d17a29] text-center text-5xl md:text-7xl font-medium mb-5 ${dance.className}`}
      >
        Student Residencies
      </motion.h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {residencies.map((connect, index) => (
          <ResidencyCard key={index} connect={connect} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Residencies;