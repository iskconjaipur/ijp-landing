import { useEffect } from "react";
import { Dancing_Script, Poppins } from "next/font/google";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { points } from "./pointsData";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
})

const Intro = () => {
  return (
    <div className="py-10 p-6 md:px-10 xl:px-16 bg-[#d17a2922]">
      <h2 className={`pl-1 font-medium md:text-4xl text-center md:text-left text-black`}>
        ISKCON <span className="text-[#d17a29]">Youth</span> Forum
      </h2>
      <hr className="pb-10 md:pt-2 m-0 w-full border-t border-gray-400 md:w-2/3" />
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row gap-12 items-center sm:text-justify max-w-screen-xl">
          <motion.img
            src="/Connect/IYF/iyf_intro.jpg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full m-3 sm:m-0 md:w-8/12 lg:w-[500px] h-auto rounded-lg object-cover"
          />
          <div className="w-11/12 md:w-9/12 lg:w-full">
            {points.map((point, i) => (
              <Point key={i} point={point} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Point = ({ point, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex gap-3 items-center mb-5 lg:mb-3"
    >
      <div className="sm:min-w-16 min-w-12 h-12 sm:h-16 flex justify-center items-center rounded-full bg-[#d17a29]">
        <img src={point.icon} className="h-9" />
      </div>
      <div>
        <h5 className="mb-0.5 leading text-orange-950">{point.title}</h5>
        <p className="hidden sm:block text-gray-950">{point.details}</p>
      </div>
    </motion.div>
  );
};

export default Intro;
