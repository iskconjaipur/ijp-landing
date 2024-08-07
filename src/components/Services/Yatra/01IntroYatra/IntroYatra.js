import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Playfair } from 'next/font/google';

const play = Playfair({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const IntroYatra = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [animationStarted, setAnimationStarted] = useState(false);

  if (inView && !animationStarted) {
    setAnimationStarted(true);
    controls.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
  }

  return (
    <div className="p-0 py-20 sm:p-20">
      <motion.div
        className="m-auto max-w-screen-lg pt-6 pb-10 border-gray-400 text-center flex justify-center items-center flex-col gap-4"
        style={{ boxShadow: '0 0 54px rgba(0, 0, 0, 0.5)' }}
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={controls}
      >
        <h1 className={`${play.className} text-6xl`}>Yatra</h1>
        <div className="px-5 lg:w-10/12 text-justify text-base">
          <p style={{ textAlignLast: 'center' }}>
            Pilgrimage sites hold special significance for spiritual growth,
            offering easy access to Lord Krishna&apos;s presence amidst the company
            of sages and abundant mercy. By visiting these sacred places, one
            can alleviate the burdens of sin and return enriched with spiritual
            benefits, ready to joyfully chant through life. ISKCON Jaipur
            extends a wonderful opportunity to explore revered destinations like
            Vrindavan, Jagannath Puri, and Dwarka, with the support of fellow
            devotees, ensuring comfortable arrangements for accommodation,
            transportation, and prasadam. Guided by seasoned devotees, your
            pilgrimage becomes an unforgettable journey, deepening your
            connection to Krishna Consciousness and enriching your spiritual
            experience.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroYatra;
