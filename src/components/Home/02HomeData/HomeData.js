'use client'
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Counter from "./Counter";

const text = [
  {
    a: "CRORE MEALS SERVED",
    b: "AROUND THE WORLD",
  },
  {
    a: "CRORE MEALS SERVED",
    b: "IN COVID 19 LOCKDOWN",
  },
  {
    a: "YEARS OF SERVICE",
    b: "TO HUMANITY",
  }
]

const HomeData = () => {
  const duration = 1.71; // The total duration you want for all counters to complete
  // const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    
  }, [isInView]);

  return (
    <div className="bg-opacity-0 flex justify-center bg-white" ref={ref}>
      <motion.div
        className="z-[10] flex 2xl:justify-evenly flex-col lg:flex-row justify-between items-center p-4 border-4 border-[#e5b776] m-[-25px] bg-white xl:w-9/12 w-11/12 lg:h-[100px] sm:h-[300px] h-[400px] mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Counter targetNumber={300} text={text[0]} duration={duration} />
        <Counter targetNumber={76} text={text[1]} duration={duration} />
        <Counter targetNumber={56} text={text[2]} duration={duration} />
      </motion.div>
    </div>
  );
};

export default HomeData;
