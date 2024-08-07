"use client";

import { Dancing_Script } from "next/font/google";
import Image from "next/image";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const Intro = () => {
  return (
    <div className="flex justify-center p-5 lg:p-10 bg-[#d17a2910] text-black">
      <div className="max-w-[1100px] flex md:flex-row flex-col-reverse items-center gap-5 lg:gap-10">
        <div>
          <h1 className={`${dancing.className} pb-5 font-bold`}>
            ISKCON <span className="text-[#d17a29]">Value</span> Education
          </h1>
          <div className="text-sm lg:text-base text-justify">
            <p>
              When a child&apos;s foundation is strong, it sets the stage for a
              lifetime of happiness. To help build this foundation, the ISKCON
              Temple in Jaipur has launched the{" "}
              <b className="text-[#d17a29]">
                ISKCON Value Education Online School.
              </b>{" "}
              This unique program blends traditional academics with essential
              life values, emphasizing compassion, integrity, respect, and
              discipline. With engaging online classes led by{" "}
              <b className="text-[#d17a29]">experienced educators,</b> children
              explore cultural and ethical teachings through storytelling,
              activities, and discussions, ensuring they grow into well-rounded
              individuals with a strong moral compass.
            </p>
            <p>
              Enrolling your children in the ISKCON Value Education Online
              School is an investment in their future, providing them with the
              tools for a happy and meaningful life. This holistic approach to
              education prepares children to face life&apos;s challenges confidently
              and wisely. Join us in this transformative journey, where
              education builds a strong foundation for life.
            </p>
          </div>
        </div>
        <div className="min-w-[300px] sm:min-w-[400px] lg:min-w-[500px]">
          <Image src="/Connect/Kids/kids.jpg" height={500} width={500} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
