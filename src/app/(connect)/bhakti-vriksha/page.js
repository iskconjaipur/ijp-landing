"use client"

import BvIntro from "@/components/Connect/BhaktiVriksha/01Intro/BvIntro"
import Benefit from "@/components/Connect/BhaktiVriksha/02Benefits/Benefits"
import Objectives from "@/components/Connect/BhaktiVriksha/02Objectives/Objectives"
import Contact from "@/components/Connect/BhaktiVriksha/03Contact/Contact"
import { Dancing_Script } from "next/font/google"
import Link from "next/link"

const dancing = Dancing_Script({
  subsets: ["latin"],
})

const page = () => {
  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-top"
        style={{ backgroundImage: "url('/Connect/BhaktiVriksha/bhakti-vriksha.png')" }}
      >
        <h1
          className={`${dancing.className} absolute p-0 w-full text-center text-white text-5xl sm:text-7xl top-1/2`}
          style={{ textShadow: "0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black" }}
        >
          Bhakti Vriksha
        </h1>
        <Link href="#contact" className="absolute w-full flex justify-center top-[80vh] no-underline hover:no-underline active:no-underline">
          <button className="py-3 px-6 rounded-full text-xl bg-[#d17a29] text-white font-semibold top-[80vh]">
            Contact Us
          </button>
        </Link>
      </div>
      <BvIntro />
      <Benefit />
      <Objectives />
      <Contact />
    </div>
  )
}

export default page