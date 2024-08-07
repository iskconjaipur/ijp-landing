"use client";
import React, { Component, useState } from "react";

const handleScrollToCard = () => {
  const cardSection = document.getElementById('cardSection');
  if (cardSection) {
      cardSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function MainPoster() {
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <>
      <div className="relative bg-[url('/Donation/SadhuSeva/Sadhu.jpg')] h-[100vh] bg-cover bg-center w-full mt-[60px]">
        <div className="absolute inset-0 flex items-center justify-center top-[25vh]">
          <button
            onClick={() => handleScrollToCard()}
            className={`relative bg-[#ff5151] font-bold text-[#ffffff] text-[20px] py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full overflow-hidden`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Donate for Brahman&apos;s
            {isHovered && (
              <svg
                className="inline-block ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L15 7z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="relative bg-[url('/Donation/SadhuSeva/curve.svg')] h-[150px] bg-cover bg-center w-full mt-[-150px]"></div>
      
    </>
  );
}
