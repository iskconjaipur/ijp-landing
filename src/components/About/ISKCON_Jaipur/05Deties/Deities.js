"use client";

import { Lobster } from "next/font/google";
import "./Deities.css";
import { deities } from "./deitiesData";

const dancing = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

const Deities = () => {
  return (
    <div className="bg-[#d17a2942]">
      <h1 className={`speakers pt-16 pb-10 xl:px-12 px-5 ${dancing.className}`}>
        Eternal Beauty
      </h1>
      <div className="overflow-hidden pb-10">
        <div className="image-row flex xl:h-[450px] justify-center mb-5 mr-0">
          {deities.map((dts, index) => (
            <div
              key={index}
              className="image-item"
              style={{
                backgroundImage: `url(${dts.image})`,
              }}
            >
              <h3
                style={{ textShadow: "2px 2px black" }}
                className="sm:text-center w-90% ml-0 text-left sm:ml-0 sm:text-4xl text-lg lg:h-full hover:bg-transparent bg-black/50"
              >
                {dts.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deities;
