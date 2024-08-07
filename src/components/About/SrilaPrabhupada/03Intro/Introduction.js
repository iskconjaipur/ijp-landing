import { motion } from "framer-motion";
import { Playfair } from "next/font/google";
import { useInView } from "react-intersection-observer";

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Introduction = () => {
  const [imageRef, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.3, // Trigger when 50% of the image is in view
  });

  // UseInView hook to detect when each paragraph is in view
  const [para1Ref, para1InView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [para2Ref, para2InView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [para3Ref, para3InView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [para4Ref, para4InView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: -0 },
  };

  return (
    <div className="md:py-20 md:px-10 py-10 px-4 bg-[#d17a2922]">
      <h2 className={`text-center pb-6 md:pb-16 md:px-24 ${play.className}`}>
        Founder Acharya : His Divine Grace AC{" "}
        <span className="text-[#d17a29]">Bhaktivedanta</span> Swami Srila
        Prabhupada
      </h2>
      <div className="flex justify-center">
        <div className="max-w-[450px] px-4 md:max-w-[750px] lg:max-w-6xl">
          <div className="flex md:flex-row flex-col lg:gap-16 gap-10 items-center justify-center">
            <motion.img
              ref={imageRef} // Reference to the image element
              src="/SrilaPrabhupada/prabhupada-intro.jpg"
              className="max-h-[400px]"
              initial={{ y: 100, opacity: 0 }} // Initial position (off-screen) and opacity
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 1, ease: "easeInOut" }} // Animation duration and easing
            />
            <div className={`text-gray-700 text-justify text-sm md:text-lg`}>
              <motion.p
                ref={para1Ref}
                initial={{ opacity: 0, y: -50 }}
                animate={para1InView ? { opacity: 1, y: -0 } : {}}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                variants={variants}
              >
                Srila Prabhupada was known by many titles - scholar,
                philosopher, cultural ambassador, prolific author, religious
                leader, spiritual teacher, and social critic. But he was much
                more than that.
              </motion.p>
              <motion.p
                ref={para2Ref}
                initial={{ opacity: 0, y: -50 }}
                animate={para2InView ? { opacity: 1, y: -0 } : {}}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                variants={variants}
              >
                Over five hundred years ago, Lord Sri Krishna appeared as Sri
                Chaitanya Mahaprabhu in West Bengal to inaugurate the Sankirtana
                Movement for this age of Kali. He predicted that His{" "}
                <b>commander-in-chief</b> would appear to spread His holy names
                worldwide. Srila Prabhupada fulfilled this prophecy.
              </motion.p>
              <motion.p
                ref={para3Ref}
                initial={{ opacity: 0, y: -50 }}
                animate={para3InView ? { opacity: 1, y: -0 } : {}}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
                variants={variants}
              >
                Born on September 01, 1896, in Calcutta, he was named Abhay
                Charan, meaning one who is{" "}
                <b>fearless by taking shelter at Lord Krishna&apos;s Lotus Feet</b>.
              </motion.p>
              <motion.p
                ref={para4Ref}
                initial={{ opacity: 0, y: -50 }}
                animate={para4InView ? { opacity: 1, y: -0 } : {}}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                variants={variants}
                className="mb-0"
              >
                Srila Prabhupada embarked on this journey when he traveled to
                America in 1965 at the age of sixty-nine. He established the{" "}
                <b>International Society for Krishna Consciousness (ISKCON)</b>,
                traveled the world 14 times, founded over 100 Krishna temples,
                and initiated more than 10,000 disciples into Krishna
                consciousness.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
