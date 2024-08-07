"use client";
import React, { useState } from "react";
import { Merriweather_Sans, Source_Code_Pro } from "next/font/google";

const sorce = Source_Code_Pro({
  subsets: ["latin"],
});

const merry = Merriweather_Sans({
  subsets: ["latin"],
});

const handleScrollToCard = () => {
  const cardSection = document.getElementById("cardSection");
  if (cardSection) {
    cardSection.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const sadhuseva = [
  {
    id: "1",
    img: "/Donation/SadhuSeva/sadhu-bhojan-2.png",
    Title: "Sunday Feast",
    Description:
      "Roti, Daal, Chawal, and Multiple Vegies with 3-4 types Sweets",
    Donation: "₹ 25,000",
  },
  {
    id: "2",
    img: "/Donation/SadhuSeva/sadhu-bhojan-1.jpg",
    Title: "Maha Preeti Bhoj",
    Description: "Paneer Meal + Special Sweets + Snacks",
    Donation: "₹ 30,000",
  },
  {
    id: "3",
    Title: "Preeti Bhoj",
    img: "/Donation/SadhuSeva/jp1.jpeg",
    Description: "Normal Meal + 1 Sweet + 2 special Subji",
    Donation: "₹ 21,000",
  },
  {
    id: "4",
    img: "/Donation/SadhuSeva/img3.jpg",
    Title: "Regular Bhoj",
    Description: "Normal Meal (Daal Chawal) + 1 Vegie",
    Donation: "₹ 5,000",
  },
];

const handleScrollToPaymentSection = () => {
  const paymentSection = document.getElementById("paymentSection");
  if (paymentSection) {
    paymentSection.scrollIntoView({ behavior: "smooth" });
  }
};

export default function SadhuCardSection() {
  return (
    <>
      {/* sadhus card section start */}
      <div
        id="cardSection"
        className="flex justify-center items-center h-full mb-[40px] py-10"
      >
        <div className=" grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 justify-center items-center gap-4 md:gap-6">
          {sadhuseva.map((x, i) => (
            <div
              key={i}
              className="max-w-sm overflow-hidden shadow-lg w-[300px] xl:w-[270px] md:w-[300px]  h-[450px] bg-[#ffffff] 
                hover:scale-110 transition-transform duration-500 rounded-lg"
            >
              <img
                className="w-full"
                src={x.img}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4">
                <div className="font-bold text-xl mb-2 text-center">
                  {x.Title}
                </div>
                <p className="text-gray-700 text-base text-center">
                  {x.Description}
                </p>
              </div>
              <div className=" px-6">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-center items-center">
                    <span
                      className={`text-[30px] font-bold text-[#870909] ${merry.className}`}
                    >
                      {x.Donation}
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className={`bg-[#FCD6A0] font-medium text-[20px] text-[#870909] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${merry.className} hover:scale-105 transition-transform`}
                      onClick={() => handleScrollToPaymentSection()}
                    >
                      Donate Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* sadhus card section end */}
    </>
  );
}
