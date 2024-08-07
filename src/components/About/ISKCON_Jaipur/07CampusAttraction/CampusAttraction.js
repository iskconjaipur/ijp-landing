import { Architects_Daughter, Satisfy } from "next/font/google";
import { useEffect } from "react";
import { campus } from "./campusData";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const architect = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

const CampusAttraction = () => {
  return (
    <div className="p-16 px-8">
      <h1 className={`${architect.className} pb-4 text-5xl text-center`}>
        Temple Campus Attraction
      </h1>
      <div className="2xl:flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-4 place-items-center 2xl:w-[1250px]">
          {campus.map((c, i) => (
            <CampusCard c={c} i={i} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CampusCard = ({ c, i }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      key={i}
      className="w-52 hover:scale-105 transition-all duration-500 bg-white shadow-md p-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      <figure>
        <img
          src={c.campusImg}
          alt="Shoes"
          className="w-40 h-40 object-cover rounded-full"
        />
      </figure>
      <div className="card-body items-center justify-center">
        <h2
          className={`${satisfy.className} card-title text-3xl justify-center text-center w-[115px]`}
        >
          {c.title}
        </h2>
        <Link
          href={c.link}
          className="card-actions justify-center hover:scale-110 transition-all duration-500 text-white hover:text-white no-underline hover:no-underline"
        >
          <button className="bg-[#c69653] py-2 px-3 font-semibold rounded-full text-white flex items-center gap-1">
            Visit <img src="/IJP/right.svg" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CampusAttraction;
