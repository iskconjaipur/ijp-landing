"use client";

import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  // weight: ["400"],
});

const About = () => {
  return (
    <div className="flex lg:pl-10 justify-center xl:gap-10 bg-[#d17a29] text-white">
      <div className="lg:text-left lg:w-full mt-5 2xl:min-w-[600px] 2xl:max-w-[600px] p-10 lg:p-0">
        <h2
          className={`${dancing.className} font-medium text-5xl 2xl:text-6xl`}
        >
          International Vegetarian Restaurant
        </h2>
        <p className="pb-0 text-lg mt-5 font-medium text-justify pr-5">
          Govinda’s, located in the ISKCON Temple Complex in Mansarovar, Jaipur,
          offers an exceptional Pure Vegetarian dining experience in a
          spiritually enriched environment. Renowned for its Satvik cuisine and
          impeccable service, Govinda’s presents a blend of warm Indian and fine
          international dishes. Our culinary experts promise a soul-stirring
          dining journey that harmonizes body, mind, and soul. Amidst the
          tranquil Gupt Vrindavana, indulge in transcendental flavors and divine
          ambience, setting us apart in the world of karma-free food.
        </p>
        <div className="flex justify-center lg:block">
          <button className="bg-slate-500 mb-10 lg:mb-0 mt-14 2xl:mt-14 rounded-sm px-4 py-2 mt">
            CONTACT US
          </button>
        </div>
      </div>
      <img
        src="/IJP/ijpBanner.jpg"
        className="h-[550px] overflow-hidden hidden lg:block lg:w-1/2 2xl:w-full object-cover"
      />
    </div>
  );
};

export default About;
