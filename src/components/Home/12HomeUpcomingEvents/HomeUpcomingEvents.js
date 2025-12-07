"use client";

import { Architects_Daughter, Dancing_Script } from "next/font/google";
import { upcomingEvents } from "./upcomingEventsData";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";

const architects = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const HomeUpcomingEvents = () => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white text-gray-800 pb-16 pt-8">
      <div className={`pt-16 pb-12 text-center ${architects.className}`}>
        <h1 className="text-6xl font-[400] text-[#d17a29] mb-4">Upcoming Events</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d17a29] to-transparent mx-auto"></div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-2xl m-auto gap-8 px-4">
          {upcomingEvents.map((event, i) => (
            <EventCard key={i} index={i} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ index, event }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (event.formLink && event.formLink !== "#") {
      window.open(event.formLink, "_blank");
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: inView ? index * 0.15 : 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        onClick={handleClick}
        className="cursor-pointer group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      >
        {/* Image Container with Overlay */}
        <div className="relative h-[280px] overflow-hidden">
          <motion.img
            src={event.eventImage}
            className="w-full h-full object-cover transition-transform duration-700"
            alt={event.eventName}
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#d17a29]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#d17a29]/20 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="p-6 relative">
          {/* Event Name */}
          <h2 className={`text-center text-2xl font-bold text-[#d17a29] ${dancing.className} transition-colors duration-300 group-hover:text-[#b8651f]`}>
            {event.eventName}
          </h2>

          {/* Decorative Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d17a29] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Shine Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeUpcomingEvents;

