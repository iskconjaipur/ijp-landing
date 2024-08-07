import { motion } from "framer-motion";
import { Playfair } from "next/font/google";
import { useInView } from "react-intersection-observer";

const play = Playfair({
  subsets: ["latin"],
});

const Letter = () => {
  const [imageRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="py-14 p-4 sm:px-10 bg-[#d17a2920] flex justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-screen-2xl">
        <motion.img
          ref={imageRef}
          src="https://vanimedia.org/w/images/2/2c/750713_-_Letter_to_Mahavir_Prasad_Jaipuria.JPG"
          className="w-full sm:w-4/5 lg:max-h-[550px] xl:max-h-[650px] 2xl:max-h-[750px] block"
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.div
          className="relative w-full flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h1
            className={`${play.className} pb-6 px-4 text-center text-4xl xl:text-5xl text-bold`}
          >
            A Temple of Dedication...
          </h1>
          <div className="md:w-4/5 p-2 md:p-0 w-full text-justify text-sm sm:text-md xl:text-lg 2xl:text-xl">
            <p>
              Srila Prabhupada envisioned spreading the worship of Sri Sri Radha
              Govindaji to the whole world, expressing his desire to establish a
              beautiful Krishna Balarama Temple in Jaipur. In a letter, he
              wrote,{" "}
              <b className="text-[#d17a29] block pt-1">
                &quot;So I want to open a duplicate Krishna Balarama temple in
                Jaipur. I am sending separately copies of pictures of our
                Krishna Balarama Temple in Vrindaban. Of course there is also
                Radha Krishna and Gaura Nitai. I wish that you have some land in
                Jaipur and help us in constructing a temple like in Vrindaban.
                &quot;
              </b>{" "}
              <b className="text-gray-700 inline-block">(13, July 1975)</b>
            </p>
            <p>
              In 1991, ISKCON Jaipur began its journey, inspired by Srila
              Prabhupada&apos;s vision. Then, in 2019, the grand opening of the
              temple was held, <b>fulfilling Srila Prabhupada&apos;s desire</b>{" "}
              for a Krishna Balarama Mandir in Jaipur. Today, ISKCON Jaipur
              stands as a testament to his devotion and serves as a beacon of
              spiritual enlightenment for all.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Letter;
