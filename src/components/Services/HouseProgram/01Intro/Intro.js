"use client";
import { Dancing_Script, Playfair } from "next/font/google";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from "react";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Intro = () => {
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
        <h1 className={`${play.className} text-6xl`}>Home Satsang</h1>
        <div className="px-5 lg:w-10/12 text-justify text-base">
          <p style={{ textAlignLast: "center", marginBottom: "0.75rem" }}>
            House Programs Satsang, organized by the ISKCON Temple, are
            gatherings in the homes of interested participants, aimed at those
            searching for eternal truth. These sessions foster devotional habits
            and a loving relationship with Krishna, enhancing happiness and
            peace.
          </p>
          <p style={{ textAlignLast: "center" }}>
            Open to both congregation members and newcomers, the program
            features Kirtana (chanting the Holy names of Krishna), spiritual
            discussions on the Bhagavad-gita or other Vedic scriptures, a Q&A
            session, and concludes with prasad (sanctified food). These
            gatherings can be planned for special occasions like birthdays and
            anniversaries, offering a meaningful way to celebrate while
            deepening spiritual practice.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
