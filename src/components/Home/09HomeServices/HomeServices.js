"use client";

import { Architects_Daughter, Dancing_Script } from "next/font/google";
import { homeServices } from "./homeServiceData";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const architects = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const HomeServices = () => {
  return (
    <div className="bg-[#d17a29] text-white pb-10">
      <div className={`pt-16 pb-10 text-center ${architects.className}`}>
        <h1 className="text-6xl font-[400]">Our Services</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-2xl m-auto">
          {homeServices.map((service, i) => (
            <ServiceCard key={i} index={i} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ index, service }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: inView ? index * 0.1 : 0 }}
    >
      <Link
        href={service.link}
        className="hover:no-underline no-underline hover:scale-110 text-white p-5 transition-all duration-500"
      >
        <img
          src={service.image}
          className="h-[150px] w-[175px] object-cover object-center m-auto"
          alt={service.title}
          style={{
            clipPath:
              index % 2
                ? "polygon(0 0, 100% 20%, 100% 100%, 0 80%)"
                : "polygon(100% 0%, 0 20%, 0 100%, 100% 80%)",
          }}
        />
        <h1
          className={`text-center ${dancing.className}`}
          style={{
            transform: `rotate(${index % 2 ? "9deg" : "-9deg"})`,
          }}
        >
          {service.title}
        </h1>
      </Link>
    </motion.div>
  );
};

export default HomeServices;
