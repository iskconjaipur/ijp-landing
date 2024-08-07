"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { services } from "./serviceData";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if the device is touch-enabled
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleHoverStart = (index) => {
    if (!isTouchDevice) {
      setHoveredIndex(index);
    }
  };

  const handleHoverEnd = () => {
    if (!isTouchDevice) {
      setHoveredIndex(null);
    }
  };

  const handleCardClick = (index) => {
    setHoveredIndex(hoveredIndex === index ? null : index);
  };

  return (
    <div className='p-2 sm:px-10 py-10'>
      <h1 className={`text-center text-5xl font-medium text-orange-950 pb-4 ${dancing.className}`}>
        Our Counselling Domains
      </h1>
      <div className="flex flex-wrap justify-evenly gap-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="relative w-72 pt-10"
            onHoverStart={() => handleHoverStart(i)}
            onHoverEnd={handleHoverEnd}
            onClick={() => handleCardClick(i)}
          >
            <motion.div
              transition={{ duration: 0.7 }}
              animate={{ rotateY: hoveredIndex === i ? 180 : 0 }}
              className="h-96 rounded-lg absolute bg-gradient-to-r from-[#d17a29] via-red-500 to-yellow-500 text-white p-2"
              style={{ opacity: hoveredIndex === i ? 0 : 1 }}
            >
              <div>
                <h4 className="text-center py-2 font-medium h-[84px]">{service.domain}</h4>
                <img src={'/Connect/IYF/councelling/' + service.image} className="object-cover w-full bg-white h-64" />
              </div>
            </motion.div>
            <motion.div
              transition={{ duration: 0.7 }}
              animate={{ rotateY: hoveredIndex === i ? -180 : 0 }}
              className="h-96 w-72 rounded-lg bg-gradient-to-r from-[#d17a29] via-red-500 to-yellow-500 text-white"
              style={{ opacity: hoveredIndex === i ? 1 : 0 }}
            >
              <motion.ul
                className="px-6 text-left flex flex-col justify-evenly font-semibold text- h-full list-disc list-inside"
                style={{ rotateY: hoveredIndex === i ? 180 : 0, transformStyle: "preserve-3d" }}
              >
                {service.subtopics.map((s, j) => (
                  <li key={j}>{s}</li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
