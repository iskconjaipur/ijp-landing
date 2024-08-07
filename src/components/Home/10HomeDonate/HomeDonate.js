"use client";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { donate } from "./donateData";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const HomeDonate = () => {
  return (
    <div className="pb-14 bg-white">
      <div className={`pt-16 pb-4 text-center ${dancing.className}`}>
        <h1 className="text-6xl font-[900]">Receive Blessings from</h1>
        <h1 className="text-6xl font-[900]">Sri Sri Giridhari Dauji</h1>
      </div>
      <div>
        <div className="pt-10 flex md:flex-row flex-col justify-evenly gap-4 max-w-screen-2xl m-auto">
          {donate.map((d, i) => (
            <DonateCard key={i} index={i} donate={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

const DonateCard = ({ index, donate }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Link href={donate.link} className="hover:no-underline">
      <motion.div
        className="flex flex-col overflow-hidden items-center pb-4 text-gray-600 hover:text-gray-600 hover:no-underline"
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.2 }}
      >
        <div className="text-center shadow-md mt-2 ml-2 hover:mt-0 hover:ml-0 hover:mr-2 hover:mb-2 transition-all duration-300">
          <img
            src={donate.image}
            className="h-[120px] w-[220px] object-cover object-center"
            alt={donate.title}
          />
          <h1 className={`${dancing.className} pt-4 font-black px-2`}>
            {donate.title}
          </h1>
          <button className="px-2 py-1 bg-[#d17a29] mb-2 text-white rounded-full mt-1">
            Donate
          </button>
        </div>
      </motion.div>
    </Link>
  );
};

export default HomeDonate;
