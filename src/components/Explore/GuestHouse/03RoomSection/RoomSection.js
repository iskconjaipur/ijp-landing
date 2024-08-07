"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function RoomSection() {
  const handleScrollToContactSection = () => {
    const contactSection = document.getElementById("contactSection");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* <room section start> */}
      <div className=" flex mx-[30px] sm:mx-[92px] justify-evenly items-center flex-wrap gap-5 my-10">
        <div className="flex flex-col  gap-2 w-full justify-center items-center ">
          <div>
            <p className="text-[#D9A55B] text-[22px] tracking-widest ">
              Discover Our Room
            </p>
          </div>
          <div>
            <p
              className={`md:text-[55px] text-[24px] flex justify-center items-center ${playfair.className}`}
            >
              A Gander At Our Rooms
            </p>
          </div>
        </div>
        <div
          className="w-[365px] h-[400px] bg-cover bg-center shadow-xl"
          style={{ backgroundImage: "url('/Explore/GuestHouse/room3.jpg')" }}
        >
          <div className=" flex flex-col gap-5 p-[10px]">
            <div className=" h-[300px]"></div>
            <div className=" h-[20px]">
            <div className="h-[20px] flex items-center justify-center">
              <p className={`text-[16px] ${playfair.className}`}>
                <button
                  onClick={handleScrollToContactSection}
                  className="bg-[#FCD6A0] font-medium text-[20px] text-[#870909] py-1 px-8 md:py-2 md:px-4 rounded-lg drop-shadow-xl ${merri.className} hover:scale-105 transition-transform"
                >
                  Book Now
                </button>
              </p>
            </div>
            </div>
          </div>
        </div>

        <div
          className="w-[365px] h-[400px] bg-cover bg-center shadow-xl"
          style={{ backgroundImage: "url('/Explore/GuestHouse/room2.jpg')" }}
        >
          <div className=" flex flex-col gap-5 p-[10px]">
            <div className=" h-[300px]"></div>
            <div className=" h-[20px]">
            <div className="h-[20px] flex items-center justify-center">
              <p className={`text-[16px] ${playfair.className}`}>
                <button
                  onClick={handleScrollToContactSection}
                  className="bg-[#FCD6A0] font-medium text-[20px] text-[#870909] py-1 px-8 md:py-2 md:px-4 rounded-lg drop-shadow-xl ${merri.className} hover:scale-105 transition-transform"
                >
                  Book Now
                </button>
              </p>
            </div>
            </div>
          </div>
        </div>

        <div
          className="w-[365px] h-[400px] bg-cover bg-center shadow-xl"
          style={{ backgroundImage: "url('/Explore/GuestHouse/room1.jpg')" }}
        >
          <div className=" flex flex-col gap-5 p-[10px]">
            <div className=" h-[300px]"></div>
            <div className="h-[20px] flex items-center justify-center">
              <p className={`text-[16px] ${playfair.className}`}>
                <button
                  onClick={handleScrollToContactSection}
                  className="bg-[#FCD6A0] font-medium text-[20px] text-[#870909] py-1 px-8 md:py-2 md:px-4 rounded-lg drop-shadow-xl ${merri.className} hover:scale-105 transition-transform"
                >
                  Book Now
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <room section start> */}
    </>
  );
}
