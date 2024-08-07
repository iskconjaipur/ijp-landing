"use client";

import { Dancing_Script, Playfair_Display } from "next/font/google";
import { homeActivities } from "./homeActivitiesData";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const HomeActivities = () => {
  return (
    <div className="bg-[#fac592] text-white">
      <div className={`pt-16 text-center text-gray-700 ${playfair.className}`}>
        <h1 className="text-6xl font-[500]">Connect With Us</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 text-center max-w-screen-2xl m-auto">
          {homeActivities.map((activity, i) => (
            <ActivityCard key={i} index={i} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ActivityCard = ({ index, activity }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Link href={activity.link}>
      <motion.div
        className="p-10 flex flex-col items-center text-white no-underline hover:text-white hover:no-underline"
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          className="h-[350px] relative w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${activity.image})`,
            textShadow:
              "0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black",
          }}
        >
          <h1 className={`absolute bottom-2 w-full ${playfair.className} pt-4 font-medium px-4`}>
            {activity.title}
          </h1>
        </div>
      </motion.div>
    </Link>
  );
};

export default HomeActivities;
