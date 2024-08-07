"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Kanit, Playfair_Display } from "next/font/google";
import { achieveData } from "./achieveData";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const play = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Achievements = () => {
  return (
    <div
      className="py-16 text-gray-700 relative"
      style={{
        background:
          "url(https://media.istockphoto.com/id/1061786950/photo/sky-in-the-pink-and-blue-colors-effect-of-light-pastel-colored-of-sunset-clouds-cloud-on-the.webp?b=1&s=170667a&w=0&k=20&c=NHX4Y9h374Mjp73IolBTVXGJGtqCjjt_Hiq5cAoWcTI=) center/cover",
      }}
    >
      <h1 className={`${play.className} text-center pb-10`}>
        Srila<span className="text-[#d17a29]"> Prabhupada&apos;s</span>{" "}
        Priceless Gift to the World
      </h1>
      <div
        className={`${kanit.className} grid grid-cols-2 gap-y-5 md:grid-cols-4 place-items-center`}
      >
        {achieveData.map((achieve, index) => (
          <AchievementCard key={index} index={index} achieve={achieve} />
        ))}
      </div>
    </div>
  );
};

const AchievementCard = ({ index, achieve }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust the threshold as needed
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: inView ? 0.1 * (index + 1) : 0 }}
      className={`w-[150px] xl:w-[180px] text-center p-1 bg-black/10 rounded-lg h-[150px] sm:h-40 flex justify-center flex-col`}
    >
      <p className="mb-2 text-base xl:text-lg">{achieve.pre}</p>
      <h2 style={{ color: achieve.color }}>{achieve.title}</h2>
      <p className="text-base mb-0 xl:text-lg">{achieve.post}</p>
    </motion.div>
  );
};

export default Achievements;
