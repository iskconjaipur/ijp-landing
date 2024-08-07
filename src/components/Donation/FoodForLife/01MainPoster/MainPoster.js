"use client";
import React, { useState, useRef } from "react";
import {
  Merriweather_Sans,
  Oswald,
  Dosis,
  Architects_Daughter,
} from "next/font/google";
import FoodForLifePaymentSection from "../02FoodForLifePaymentSection/FoodForLifePaymentSection";
import CirclePoster from "../03CircleCarousel/CirclePoster";
import PriceDistribution from "../04PriceDistribution/PriceDistribution";

const merri = Merriweather_Sans({
  subsets: ["latin"],
});

const merry = Merriweather_Sans({
  subsets: ["latin"],
});

const oswa = Oswald({
  subsets: ["latin"],
});

const dosis = Dosis({
  subsets: ["latin"],
});

const Architects = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

const feed = [
  {
    id: "1",
    Title: "General Donation",
    Price: "Amount of your choice ~ ₹ 51 Per Dona",
  },
  {
    id: "2",
    Title: "21 Dona",
    Price: "₹ 1,050 ~ Do your part and contribute this amount.",
  },
  {
    id: "3",
    Title: "51 Dona",
    Price: "₹ 2,500 ~ Do your part and contribute this amount.",
  },
  {
    id: "4",
    Title: "151 Dona",
    Price: "₹ 3,775 ~ Do your part and contribute this amount.",
  },
  {
    id: "5",
    Title: "251 Dona",
    Price: "₹ 7,550 ~ Do your part and contribute this amount.",
  },
  {
    id: "6",
    Title: "501 Dona",
    Price: "₹ 25,050 ~ Do your part and contribute this amount.",
  },
  {
    id: "7",
    Title: "1,001 Dona",
    Price: "₹ 50,050 ~ Do your part and contribute this amount.",
  },
  {
    id: "8",
    Title: "3,001 Dona",
    Price: "₹ 150,050 ~ Do your part and contribute this amount.",
  },
  {
    id: "9",
    Title: "5,001 Dona",
    Price: "₹ 2,50,050 ~ You can serve these meals to needy people.",
  },
];

const MainPoster = () => {
  const [showUpArrow, setShowUpArrow] = useState({
    button1: false,
    button2: false,
  });

  const donationSectionRef = useRef(null); // Ref to the donation section
  const paymentSectionRef = useRef(null); // Ref to the payment section

  const handleMouseEnter = (button) => {
    setShowUpArrow((prev) => ({ ...prev, [button]: true })); // Show the up arrow for the hovered button
  };

  const handleMouseLeave = (button) => {
    setShowUpArrow((prev) => ({ ...prev, [button]: false })); // Hide the up arrow for the hovered button
  };

  const scrollToDonationSection = () => {
    // Scroll to the donation section
    if (donationSectionRef.current) {
      window.scrollTo({
        top: donationSectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToPaymentSection = () => {
    const paymentSection = document.getElementById("paymentSection");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToDonationSection = () => {
    const donationSection = document.getElementById("donationSection");
    if (donationSection) {
      donationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-[url('/Donation/FoodForNeed/BannerforHome.jpg')] h-[100vh]   bg-cover bg-center w-full mt-[60px]">
        <div className="absolute flex flex-col items-center w-full top-[30vh] justify-center">
          <h1
            className={`font-bold text-white text-6xl md:text-7xl text-center ${merri.className}`}
            style={{
              textShadow:
                "2px 2px black, 20px 20px 50px #d17a29, -20px -20px 50px #d17a29, -20px 20px 50px #d17a29, 20px -20px 50px black",
            }}
          >
            Food Relief
          </h1>
          <p
            className={`mx-40 text-center leading-7 font-medium text-[20px] max-md:text-[20px] max-md:mx-10 z-10 text-white ${oswa.className}`}
            style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)" }}
          >
            &quot;Join our food donation drive and be a hero in the fight
            against hunger! Your support can transform lives, providing
            nutritious meals to those who need them most. Together, we can
            create a brighter future and bring hope to our community. Let&apos;s
            come together to make a powerful impact and change lives for the
            better! &quot;
          </p>

          <button
            className={`relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% mt-3 font-bold text-[#ffffff] text-[20px] py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full overflow-hidden`}
            onMouseEnter={() => handleMouseEnter("button1")}
            onMouseLeave={() => handleMouseLeave("button1")}
            onClick={handleScrollToDonationSection}
          >
            Donate Now{" "}
            {showUpArrow.button1 && (
              <img
                src="/Donation/NityaSeva/down_arrow.svg"
                className="inline-block w-6 h-6"
                alt="Up Arrow"
              />
            )}
          </button>
        </div>
      </div>

      <div className=" relative bg-[url('/Donation/FoodForNeed/curve.svg')] h-[150px] bg-cover bg-center w-full z-10 mt-[-150px]"></div>

      <div className="w-full h-[50px] bg-[#9a9fe0]"></div>

      <div
        className="relative bg-[url('/Donation/FoodForNeed/mv2.jpg')] bg-cover bg-center w-full"
      >
        <div
          style={{
            backgroundImage: "linear-gradient(to bottom, #9a9fe0, #380020d6)",
            paddingBottom: "44px",
          }}
        >
          <div className=" mx-[20px] lg:mx-[220px] py-[60px] max-[640px]:py-0  max-[640px]:mb-20">
            <div className="flex flex-col">
              <p
                className={`text-[20px] py-[20px] font-medium text-[#ffffff] text-center ${oswa.className}`}
              >
                Food for Need is dedicated to alleviating hunger by distributing
                food to those in need across various communities. Our efforts
                reach out to diverse locations such as
                <span className="highlight text-[#e22b2b]"> Govind Dev Ji</span>
                ,
                <span className="highlight text-[#e22b2b]">
                  Anath Ashram,local colleges,
                </span>
                <span className="highlight text-[#e22b2b]">
                  {" "}
                  bastis (slum areas)
                </span>
                . By targeting these areas, we ensure that nutritious meals are
                provided to vulnerable populations, including the homeless,
                students in need, and residents of underprivileged
                neighborhoods. Join us in our mission to combat hunger and make
                a meaningful impact in the lives of many.
              </p>
            </div>
          </div>

          <CirclePoster />

          {/* donation section start */}
          <div id="donationSection" className=" flex flex-col items-center mb-[40px] mt-24">
            {feed.map((feed) => (
              <>
                <div className=" flex flex-col w-3/4 pt-[27px] pb-[10px] md:flex-row gap-1 ">
                  <div className=" flex flex-col justify-center items-center md:justify-start md:items-start  w-full md:w-1/2">
                    <div className="pb-[1px]">
                      <span
                        className={`text-[30px] sm:text-[34px] font-bold text-white ${dosis.className}`}
                      >
                        {feed.Title}
                      </span>
                    </div>
                    <div className="max-md:text-center">
                      <span
                        className={`text-[18px] font-bold text-white ${merry.className}`}
                      >
                        {feed.Price}
                      </span>
                    </div>
                  </div>
                  <div className=" w-full md:w-1/2 flex justify-center items-center">
                    <button
                      className={`bg-[#FCD6A0]  font-medium text-[20px] text-[#870909] py-2 px-4 md:py-2  md:px-4 rounded-full drop-shadow-xl ${merry.className} hover:scale-105 transition-transform `}
                      onClick={() => handleScrollToPaymentSection()}
                    >
                      Donate Now{" "}
                      {showUpArrow.button2 && (
                        <img
                          src="/Donation/NityaSeva/down_arrow.svg"
                          className="inline-block w-6 h-6"
                          alt="Up Arrow"
                        />
                      )}
                    </button>
                  </div>
                </div>
                <div className="border-b-[1px] w-3/4 border-yellow-400"></div>
              </>
            ))}
          </div>
          {/* donation section end */}
          <FoodForLifePaymentSection />
           
          <PriceDistribution />
        </div>
      </div>
    </>
  );
};

export default MainPoster;
