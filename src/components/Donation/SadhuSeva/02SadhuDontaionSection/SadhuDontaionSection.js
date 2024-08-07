"use client";
import React, { useState } from "react";
import { Merriweather_Sans, Dosis } from "next/font/google";

const merri = Merriweather_Sans({
  subsets: ["latin"],
});

const merry = Merriweather_Sans({
  subsets: ["latin"],
});

const dosis = Dosis({
  subsets: ["latin"],
});

const feed = [
  {
    id: "1",
    Title: "Feed 51 Sadhus",
    Price: "₹ 8,000 ~ Single Meal",
  },
  {
    id: "2",
    Title: "Feed 11 Sadhus",
    Price: "₹ 31,00 ~ Single Meal",
  },
  {
    id: "3",
    Title: "Amount of your",
    Price: "choice",
  },
];

const handleScrollToCard = () => {
  const paymentSection = document.getElementById("paymentSection");
  if (paymentSection) {
    paymentSection.scrollIntoView({ behavior: "smooth" });
  }
};

export default function SadhuDonationSection() {
  return (
    <>
      {/* feed the sadhus section start */}
      <div className="mx-[20px] lg:mx-[220px] mb-[40px] pt-12 ">
        <div className="flex flex-col">
          <div className="pb-[10px] text-center sm:text-left">
            <h2
              className={`text-[50px] font-bold text-[#ffffff] ${merri.className}`}
            >
              Feed the Sadhus
            </h2>
          </div>
          <div>
            <p
              className={`text-[20px] text-[#ffffff] text-justify ${merri.className}`}
            >
              By contributing to Sadhu Bhojan, you are supporting the dedicated saints at ISKCON Mandir. These revered individuals devote their lives to spreading love and embodying the Lord&apos;s compassion, offering spiritual guidance and enlightenment to countless people. Your donation helps sustain their vital mission, bringing divine wisdom and peace to many lives.
            </p>
          </div>
        </div>
      </div>
      {/* feed the sadhus section end */}

      {/* donation section start */}
      <div className="flex flex-col items-center mb-[40px]">
        {feed.map((feedItem) => (
          <React.Fragment key={feedItem.id}>
            <div className="flex flex-col w-3/4 pt-[27px] pb-[10px] md:flex-row gap-1">
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-1/2">
                <div className="pb-[1px]">
                  <span
                    className={`text-[34px] font-bold text-white ${dosis.className}`}
                  >
                    {feedItem.Title}
                  </span>
                </div>
                <div>
                  <span
                    className={`text-[18px] font-bold text-white ${merry.className}`}
                  >
                    {feedItem.Price}
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <button
                  className={`bg-[#FCD6A0] font-medium text-[20px] text-[#870909] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${merry.className} hover:scale-105 transition-transform`}
                  onClick={() => handleScrollToCard()}
                >
                  Donate Now
                </button>
              </div>
            </div>
            <div className="border-b-[1px] w-3/4 border-yellow-400"></div>
          </React.Fragment>
        ))}
      </div>
      {/* donation section end */}
    </>
  );
}
