"use client";

import { Playfair } from "next/font/google";
import { benefits } from "./benifitData";

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Benefits = () => {
  return (
    <div className="bg-[#d17a29] py-16 px-5">
      <h1 className={`${play.className} text-center text-white text-5xl pb-10`}>
        BLESSINGS OF A PILGRIMAGE
      </h1>
      <div className="flex flex-wrap  gap-10 max-w-screen-xl m-auto justify-center">
        {benefits.map((benefit, i) => (
          <div
            key={i}
            className="block max-w-80 p-2 bg-transparent rounded-sm text-white hover:rounded hover:bg-white hover:text-gray-900 transition-all duration-500"
          >
            {/* <h5 className="mb-2 text-2xl text-center font-medium tracking-tight">
              {benefit.title}
            </h5> */}
            <p className="text-justify">
              <span className="text-2xl">&quot;</span> {benefit.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
