"use client";
import React from "react";
import { Playfair_Display , Merriweather } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const merri = Merriweather({
  subsets: ["latin"],
  weight: ["400"]
});

export default function RoomSection() {
  const handleScrollToContactSection = () => {
    const contactSection = document.getElementById("contactSection");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bookNowUrl = "https://cloud.kwhotel.com/be/en/1/adcbfdf2-b742-427e-9f0c-d67666bfc1a8";

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
                <a
                href={bookNowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-[#FCD6A0] font-medium text-[20px] text-[#870909] py-2 px-6 md:px-8 rounded-lg drop-shadow-xl transition-transform transform hover:scale-105 hover:no-underline ${playfair.className} ${merri.className}`}
                aria-label="Book Now for Room 3"
              >
                Book Now
              </a>
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
                <a
                href={bookNowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-[#FCD6A0] font-medium text-[20px] text-[#870909] py-2 px-6 md:px-8 rounded-lg drop-shadow-xl transition-transform transform hover:scale-105 hover:no-underline ${playfair.className} ${merri.className}`}
                aria-label="Book Now for Room 3"
              >
                Book Now
              </a>
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
               <a
                href={bookNowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-[#FCD6A0] font-medium text-[20px] text-[#870909] py-2 px-6 md:px-8 rounded-lg drop-shadow-xl transition-transform transform hover:scale-105 hover:no-underline ${playfair.className} ${merri.className}`}
                aria-label="Book Now for Room 3"
              >
                Book Now
              </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <room section start> */}
    </>
  );
}
