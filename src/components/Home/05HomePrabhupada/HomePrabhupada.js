"use client";
import { motion, useInView } from "framer-motion";
import { Satisfy } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef } from "react";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

const HomePrabhupada = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {}, [isInView]);

  return (
    <div className="relative w-full h-[93vh] md:h-[90vh] bg-top bg-cover bg-[url('/Home/HomePrabhupada/SPBannerHome.png')]">
      <div className="absolute flex w-10/12 lg:w-8/12 md:flex-row flex-col-reverse justify-between bottom-10 md:bottom-20 text-center left-0 right-0 ml-auto mr-auto items-center gap-5">
        <motion.section
          ref={ref}
          className={`text-white text-3xl md:text-5xl font-medium ${satisfy.className}`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <p
            style={{
              textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em #d17a29",
            }}
          >
            HDG AC Bhaktivedanta{" "}
          </p>
          <p
            style={{
              textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em #d17a29",
            }}
          >
            Swami Srila Prabhupada
          </p>
        </motion.section>
        <Link href='/srila-prabhupada'>
          <motion.button
            ref={ref}
            className="px-5 rounded-full h-20 bg-[#ff7a29]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
            transition={{ delay: 1 }}
          >
            <img src="/Home/HomePrabhupada/right.svg" className="w-10" />
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default HomePrabhupada;
