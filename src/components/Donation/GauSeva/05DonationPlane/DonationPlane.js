"use client";
import React from "react";
import { Merriweather_Sans, Dosis } from "next/font/google";

const merry = Merriweather_Sans({
  subsets: ["latin"],
});

const dosis = Dosis({
  subsets: ["latin"],
});

const feed = [
  {
    id: "1",
    Title: "Mineral Compound 1 Month",
    Price: "₹ 15,000",
  },
  {
    id: "2",
    Title: "Dry Fruits 1 Month",
    Price: "₹ 25,000",
  },
  {
    id: "3",
    Title: "Cow Adoption For 1 Year",
    Price: "₹ 21,000",
  },
  {
    id: "4",
    Title: "Amount of your",
    Price: "choice",
  },
];

const handleScrollToCard = () => {
  const paymentSection = document.getElementById("paymentSection1");
  if (paymentSection) {
    paymentSection.scrollIntoView({ behavior: "smooth" });
  }
};

const DonationPlane = () => {
  return (
    <div className="flex flex-col items-center mb-[40px]">
      {feed.map((feedItem) => (
        <React.Fragment key={feedItem.id}>
          <div className="flex flex-col w-3/4 pt-[27px] pb-[10px] md:flex-row gap-1">
            <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-1/2">
              <div className="pb-[1px]">
                <span
                  className={`text-[25px] sm:text-[30px] font-bold text-white ${dosis.className}`}
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
  );
};

export default DonationPlane;
