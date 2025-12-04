import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { haatData } from "./haatData";
import Image from "next/image";
import { Dancing_Script, Playfair } from "next/font/google";
import { useInView } from "react-intersection-observer";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const popOutTitleVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const popOutButtonVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
};

const VrindavanaHaat = () => {
  const [imageRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/Explore/VrindavanHaat/haat-banner.jpg')",
        }}
      >
        <div className="absolute text-center w-full top-[25vh]">
          <img src="/Comittee/templeComitte/img5.png" className="h-72 m-auto" />
          <motion.h1
            className={`${dancing.className} p-4 -mt-12 pt-0 text-white text-5xl sm:text-7xl`}
            style={{ textShadow: "0px 0px 5px black, 0px 0px 5px black" }}
            variants={popOutTitleVariants}
            initial="hidden"
            animate="visible"
          >
            Vrindavan Haat
          </motion.h1>
        </div>
        <Link
          href="#contact"
          className="absolute w-full hover:scale-110 transition-all duration-300 flex justify-center top-[80vh] no-underline hover:no-underline active:no-underline"
        >
          <motion.button
            className="py-3 px-6 rounded-full text-xl bg-[#d17a29] text-white font-semibold top-[80vh]"
            variants={popOutButtonVariants}
            initial="hidden"
            animate="visible"
          >
            Contact Us
          </motion.button>
        </Link>
      </div>

       <div className="py-14 p-4 sm:px-10 bg-[#d17a2920] flex justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center max-w-screen-2xl">
          <motion.img
            ref={imageRef}
            src="/Explore/VrindavanHaat/merathan.jpeg"
            className="w-full sm:w-4/5 lg:max-h-[550px] xl:max-h-[650px] 2xl:max-h-[750px] block"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.div
            className="relative w-full flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1
              className={`${play.className} pb-6 px-4 text-center text-4xl xl:text-5xl text-bold`}
            >
              Bhagavad Gita MARATHON...
            </h1>
            <div className="md:w-4/5 p-2 md:p-0 w-full text-justify text-sm sm:text-md xl:text-lg 2xl:text-xl">
              <p>
                <b className="text-[#d17a29] block pt-1">
                  &quot;Distributing these books is the greatest welfare activity for the human society.
                  By reading them, people will understand the purpose of life and be happy — Srila Prabhupada, Letter, 1973.
                  &quot;
                </b>{" "}
              </p>
              <p>
                In a world of noise and confusion, the Bhagavad Gita remains a timeless anchor. 
                It helps us rise above fear and doubt, teaches us to live with faith and purpose, and connects us with Lord Krishna who is always guiding us from within. 
                <b>Even a few minutes daily can bring profound change—one verse a day can purify the heart and illuminate the path of life</b>{" "}
              </p>
              <div className="flex justify-center mt-4">
                <Link href="#contact" className="no-underline hover:no-underline active:no-underline">
                  <motion.button
                    className="mb-1 py-3 px-6 rounded-full text-xl bg-[#d17a29] text-white font-semibold hover:scale-110 transition-all duration-300"
                    variants={popOutButtonVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-10 bg-[#e5b776]">
        <h1
          className={`${dancing.className} pb-10 text-7xl sm:text-8xl font-extrabold text-center text-white`}
        >
          Categories
        </h1>
        <div className="flex gap-10 flex-wrap justify-center">
          {haatData.map((haat, i) => (
            <div
              key={i}
              className="bg-white w-72 sm:w-80 p-2 flex items-center flex-col hover:scale-105 transition-all duration-500"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                <Image
                  src={`/Explore/VrindavanHaat/${haat.image}`}
                  alt="ISKCON Value Education"
                  layout="fill"
                  objectFit="contain"
                  className="object-scale-down"
                />
              </div>
              <button
                className={`font-medium px-3 py-1 bg-[#d17a29] rounded-full text-white m-1 hover:scale-110 transition-all duration-500`}
              >
                {haat.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      <h2
        className={`font-medium text-orange-900 text-center py-10`}
        id="contact"
      >
        <span className={`${play.className} text-5xl font-semibold`}>
          CONTACT US:
        </span>{" "}
        7408615687
      </h2>
    </div>
  );
};

export default VrindavanaHaat;