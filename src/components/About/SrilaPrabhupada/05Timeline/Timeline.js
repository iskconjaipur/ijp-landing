import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { journeyData } from "./journey";
import { Playfair_Display } from "next/font/google";

const play = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Timeline = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(100, 100, 100, 0.68) 0%, rgba(175, 175, 175, 0.68) 100%), url(/SrilaPrabhupada/his-divine-grace.jpg) center/cover",
      }}
    >
      <h1
        className={`${play.className} text-center text-white pt-10 px-4 text-4xl leading-[3.25rem]`}
        style={{
          textShadow:
            "5px 5px 20px #d17a29, -5px 5px 20px #d17a29, 5px -5px 20px #d17a29",
        }}
      >
        GLorious Journey of Srila Prabhupada
      </h1>
      <ul className="p-5 mb-0 text-white timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {journeyData.map((journey, index) => (
          <TimelineItem key={index} journey={journey} index={index} />
        ))}
      </ul>
    </div>
  );
};

const TimelineItem = ({ journey, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this value based on when you want the animation to start
  });

  useEffect(() => {
    if (inView) {
      // You can trigger animations here
    }
  }, [inView]);

  // const isOdd = index % 2 !== 0;

  return (
    <li ref={ref}>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="lightblue"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={`${
          index % 2 ? "timeline-start md:text-end" : "timeline-end"
        }  mb-10`}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{ duration: 1 }}
        >
          <time
            className="font-mono italic text-[#e5b776] text-xl font-bold"
            style={{ textShadow: "0px 0px 2px black, 0px 0px 2px black" }}
          >
            {journey.year}
          </time>
          <p className="font-medium">{journey.description}</p>
        </motion.div>
      </div>
      <hr />
    </li>
  );
};

export default Timeline;
