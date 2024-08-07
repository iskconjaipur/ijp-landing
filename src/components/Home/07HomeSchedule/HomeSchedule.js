"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Comfortaa } from "next/font/google";
import { schedule } from "./scheduleData";

const comfortaa = Comfortaa({
  subsets: ["latin"],
})

const HomeSchedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {}, [isInView]);

  return (
    <div className="h-[80vh] md:h-screen md:flex items-center bg-[#e5b776] justify-center md:gap-8 lg:gap-20">
      <div className="flex items-center h-full justify-center flex-col">
        <div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -100 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-[18px] lg:text-[22px] text-[#3e4991] text-left font-semibold mb-[10px]">
            Hare Krishna!
          </p>
          <h1 className="text-[40px] pb-2 text-left">Daily Schedule</h1>
        </motion.div>
        <div>
          {schedule.map((s, i) => (
            <motion.div
              key={i}
              ref={ref}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -100 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`${comfortaa.className}`}
            >
              <div className="gap-2 md:gap-2.5 lg:gap-5 pb-0.5 text-[14px] md:text-[16px] lg:text-[18px] font-medium flex">
                <span className="w-[150px] md:w-[190px] lg:w-[200px]">{s.time}</span>
                <span>{s.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <img src="/Home/HomeSchedule/homeSchedule.jpg" className="h-[70vh] hidden md:block" />
      </motion.div>
    </div>
  );
};

export default HomeSchedule;
