"use client";
import React from "react";
import { Dancing_Script, Playfair } from "next/font/google";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const FunerallIntro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [animationStarted, setAnimationStarted] = useState(false);

  if (inView && !animationStarted) {
    setAnimationStarted(true);
    controls.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
  }

  return (
    <div className="p-0 py-20 sm:p-20">
      <motion.div
        className="m-auto max-w-screen-lg pt-6 pb-10 border-gray-400 text-center flex justify-center items-center flex-col gap-4"
        style={{ boxShadow: "0 0 54px rgba(0, 0, 0, 0.5)" }}
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={controls}
      >
        <h1 className={`${play.className} font-black text-4xl max-md:text-2xl`}>
          Prayer For Peace To The Departed Soul
        </h1>
        <div className="px-5 lg:w-10/12 text-justify text-base">
          <div className="leading-8">
            <p
              className={` text-[22px] max-[428px]:text-[16px] text-black text-center ${play.className}`}
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
            >
              {""}ममैवांशो जीवलोके जीवभूत: सनातन: ।
              <br />
              <span className="ml-16 max-[500px]:ml-7">
                मन:षष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति ।।
              </span>{" "}
              <span className="text-[15px]">BG 15.2</span>
            </p>
          </div>

          <p className="text-black" style={{ textAlignLast: "center", marginBottom: "0.75rem" }}>
            The living entities in this conditioned world are My eternal
            fragmental parts. Due to conditioned life, they are struggling very
            hard with the six senses, which include the mind.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default FunerallIntro;
