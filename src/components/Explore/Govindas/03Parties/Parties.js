"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const slideInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.5 },
  },
};

const AnimatedItem = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInVariants}
    >
      {children}
    </motion.div>
  );
};

const Parties = () => {
  return (
    <div
      className="text-center bg-cover bg-center bg-fixed z-1"
      style={{
        backgroundImage: "url('/Explore/Govindas/marrige.jpg')",
      }}
    >
      <div className="flex flex-col justify-center items-center text-white bg-black/60">
        <div className="w-full sm:w-11/12 py-14 md:py-24">
          <AnimatedItem>
            <h1 className={`${dancing.className} pb-2 text-7xl pt-2`}>
              Functions and Parties
            </h1>
          </AnimatedItem>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-1 sm:gap-5">
            <div className="max-w-[900px] p-3">
              <AnimatedItem>
                <p
                  className="text-justify text-lg md:text-xl pb-1"
                  style={{ textAlignLast: "center" }}
                >
                  Having an AC party hall with the capacity of 250 persons and a
                  community centre with 600 persons capacity. Here we do
                  functions like{" "}
                  <span className="text-[#d17a29]">
                    Birthdays, Anniversaries, retirement parties, Marriages etc.
                  </span>{" "}
                  for the public and cater complete delicious food prasadam.
                </p>
              </AnimatedItem>
              <AnimatedItem>
                <p className="text-justify text-lg md:text-xl mb-0">
                  Have successfully done so many mini and big functions like
                  marriages till now. Along with the prasadam we arrange special
                  Pooja and Bhajan Sandhya and kirtan for the groups.
                </p>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parties;
