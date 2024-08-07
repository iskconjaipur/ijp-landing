import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Playfair } from "next/font/google";

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const BvIntro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [animationStarted, setAnimationStarted] = useState(false);

  if (inView && !animationStarted) {
    setAnimationStarted(true);
    controls.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
  }

  return (
    <div className="p-0 py-20 sm:p-16">
      <motion.div
        className="m-auto max-w-screen-xl pt-6 pb-10 border-gray-400"
        style={{ boxShadow: "0 0 54px rgba(0, 0, 0, 0.5)" }}
        ref={ref}
        initial={{ x: -200, opacity: 0 }}
        animate={controls}
      >
        <img
          src="/Connect/BhaktiVriksha/bv2.jpg"
          className="h-[350px] mb-5 mx-auto sm:h-[400px] object-cover"
        />
        <div>
          <h1 className={`${play.className} text-6xl text-center mb-3`}>
            Bhakti Vriksha
          </h1>
          <div className="mx-auto px-5 sm:w-11/12 text-justify text-base">
            <p style={{ textAlignLast: "center" }}>
              Bhakti Vriksha is a community where devotees come together weekly to
              practice Krishna consciousness. These small group meetings helps us
              grow spiritually, support each other, and develop a service
              attitude. The program nurtures both newcomers and seasoned
              devotees, encouraging everyone to share the principles of
              bhakti-yoga. As we grow in our faith, we also enjoy the joy and
              inspiration of larger gatherings, uniting hundreds of friends in
              celebration. Join us at Bhakti Vriksha to be part of a supportive,
              spiritual family.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BvIntro;
