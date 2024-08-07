"use client";

import Intro from "@/components/Connect/IYF/01Intro/Intro";
import Activities from "@/components/Connect/IYF/02Activities/Activities";
import Contact from "@/components/Connect/IYF/04Contact/Contact";
import Service from "@/components/Connect/IYF/03Services/Service";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import Residencies from "@/components/Connect/IYF/03Residencies/Residencies";

const dancing = Dancing_Script({
  subsets: ["latin"],
})

const page = () => {
  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-top"
        style={{ backgroundImage: "url('/Connect/IYF/iyf.jpg')" }}
      >
        <h1
          className={`${dancing.className} absolute p-0 w-full text-center text-white text-5xl sm:text-7xl top-1/2`}
          style={{ textShadow: "0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black" }}
        >
          <span className="p-4 px-8 bg-black/40 rounded-lg">Youth Forum</span>
        </h1>
        <Link href="#contact" className="absolute w-full flex justify-center top-[80vh] no-underline hover:no-underline active:no-underline">
          <button className="py-3 px-6 rounded-full text-xl bg-[#d17a29] text-white font-semibold top-[80vh]">
            Contact Us
          </button>
        </Link>
      </div>
      <Intro />
      <Activities />
      <Residencies />
      <Service />
      <Contact />
    </div>
  );
};

export default page;
