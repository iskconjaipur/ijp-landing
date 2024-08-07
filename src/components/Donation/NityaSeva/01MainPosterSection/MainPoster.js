"use client";
import React, { useState, useRef } from "react";
import { Caveat, Playfair_Display, Quicksand, Oswald } from "next/font/google";
import NityaSevaPaymentSection from "../02NityaSevaPaymentSection/NityaSevaPaymentSection";
import PriceDistribution from "../../FoodForLife/04PriceDistribution/PriceDistribution";

const caveat1 = Caveat({
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const setis = Quicksand({
  subsets: ["latin"],
});

const oswald1 = Oswald({
  subsets: ["latin"],
});

const item = [
  {
    id: "1",
    Price: "Rs. 100 Auto Debit Per Month till an Year",
  },
  {
    id: "2",
    Price: "Rs. 500 Auto Debit Per Month till an Year",
  },
  {
    id: "3",
    Price: "Rs. 1000 Auto Debit Per Month till an Year",
  },
  {
    id: "4",
    Price: "Rs. 2000 Auto Debit Per Month till an Year",
  },
  {
    id: "5",
    Price: "Rs. 5000 Auto Debit Per Month till an Year",
  },
  {
    id: "6",
    title: "General Donation",
    Price: "Choose an amount whatever you like to donate monthly",
  },
];

const MainPoster = () => {
  const [showUpArrow, setShowUpArrow] = useState({
    button1: false,
    button2: false,
    button3: false,
  }); // State to manage the visibility of the up arrow for each button
  const donationSectionRef = useRef(null); // Ref to the donation section

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
    const nityaSevaPaymentSection = document.getElementById("nityaSevaPaymentSection");
    if (nityaSevaPaymentSection) {
      nityaSevaPaymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttonClasses = `bg-[#fb3f3f] font-medium text-[30px] text-[#ffffff] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${caveat1.className} transition-transform hover:scale-105`;

  return (
    <>
      <div className="relative h-[100vh] mt-[40px] w-full">
        <div className="absolute inset-0 bg-[url('/Donation/NityaSeva/NITYA_SEWA.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Semi-transparent overlay */}
        <div className="absolute flex flex-col items-center w-full top-[25vh] sm:top-[45vh] justify-center">
          <h1
            className={`font-bold text-white text-6xl md:text-7xl text-center ${caveat1.className}`}
            style={{
              textShadow:
                "2px 2px black, 20px 20px 50px #d17a29, -20px -20px 50px #d17a29, -20px 20px 50px #d17a29, 20px -20px 50px black",
            }}
          >
            Nitya Seva
          </h1>
          <div className="xl:px-64 px-10 pb-3 mt-2">
            <p
              className={`text-center text-[18px] font-extrabold drop-shadow-lg text-[#ffffff] ${playfair.className}`}
            >
              <strong>
                Nitya Seva is a monthly donation program, automatically debiting
                your chosen amount each month. Your ongoing support sustains
                Krishna&apos;s work. Choose your donation wisely and be a steady
                beacon of devotion.
              </strong>
            </p>
          </div>
          <button
            className={buttonClasses}
            onMouseEnter={() => handleMouseEnter("button3")}
            onMouseLeave={() => handleMouseLeave("button3")}
            onClick={scrollToDonationSection}
          >
            Donate Now{" "}
            {showUpArrow.button3 && (
              <img
                src="/Donation/NityaSeva/down_arrow.svg"
                className="inline-block w-6 h-6"
                alt="Up Arrow"
              />
            )}
          </button>
        </div>
      </div>

      <div className=" relative bg-[url('/Donation/NityaSeva/curve.svg')] h-[150px] bg-cover bg-center w-full z-10 mt-[-150px]"></div>

      <div className="w-full h-[50px] bg-[#642F15]"></div>

      <div className="bg-gradient-to-b from-[#642F15] via-[#F7CA18] to-[#9fbfdf] py-[70px]">
        <div className=" mx-[50px] lg:mx-[200px] max-sm:mx-[20px] flex flex-col  mb-[135px]">
          <div className=" pb-[10px]">
            <h2 className={`${setis.className} text-[#ffffff]`}>Nitya Seva</h2>
          </div>
          <div className=" pb-[20px]">
            <p
              className={`text-[20px] text-justify font-medium ${playfair.className} text-[#ffffff]`}
            >
              It is essential for devotees to worship their lordship in a
              wealthy and gorgeous manner befitting palatial standards.
              <br />
              To make progress in Krishna consciousness, we always need the
              blessing of the Lord on your special day. And when the Lord is
              pleased with our services, we will surely get the unlimited
              blessing from the Lord Shree Krishna
            </p>
          </div>
          <div
            className={`text-[#ffffff] font-bold text-center ${caveat1.className} pb-[20px]`}
          >
            <h3>
              <strong className="text-[33px]">
                ~Nitya Seva is a monthly charity program where a devotee can
                monthly participate by donating in the lotus feet of the
                Krishna. ~
              </strong>
            </h3>
          </div>
          <div className=" mt-3 text-[#ffffff]">
            <p
              className={`text-[20px] font-medium ${playfair.className} text-justify `}
            >
              Note:- Please note that Nitya Seva is a monthly donation program
              in which every month your desired amount will be automatically
              debited from your account. So, please choose the donation amount
              accordingly.!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[url('/Donation/NityaSeva/download.svg')] h-[150px] bg-cover bg-center w-full z-10 mt-[-150px]"></div>

      {/* donation section start */}
      <div
        ref={donationSectionRef}
        className="bg-[url('/Donation/NityaSeva/NITYA_SEWA.jpg')] bg-cover bg-center w-full relative"
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(100, 47, 21, 0.8) 0%, rgba(247, 202, 24, 0.8) 100%)",
          }}
        >
          <div className="flex flex-col items-center mb-[40px]">
            {item.map((item) => (
              <React.Fragment key={item.id}>
                <div className="flex flex-col w-3/4 pt-[27px] pb-[10px] md:flex-row gap-1">
                  <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-1/2">
                    <div className="pb-[1px]">
                      <span
                        className={`text-[34px] text-start max-sm:text-center font-light md:font-medium text-white ${playfair.className}`}
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                      >
                        <h2>
                          {item.id === "6" ? item.title : "Your Nitya Seva"}
                        </h2>
                      </span>
                    </div>
                    <div className="flex sm:text-left text-center">
                      <span
                        className={`text-[18px] font-bold text-white ${playfair.className}`}
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                      >
                        {item.Price}
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center items-center">
                    <button
                      className={`bg-[#FCD6A0] font-medium text-[20px] text-[#870909] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${playfair.className} hover:scale-105 transition-transform `}
                      onClick={() => handleScrollToPaymentSection()}
                    >
                      Donate Now
                    </button>
                  </div>
                </div>
                <div className="border-b-[2px] w-3/4 border-white/50"></div>
              </React.Fragment>
            ))}

            
              <PriceDistribution />
            
          </div>
          <div className="bg-[url('/Donation/NityaSeva/reverse_curve.svg')] h-[100px] bg-cover bg-center w-full z-10 mt-[20px]"></div>
        </div>
      </div>

      {/* donation section end */}

      <div className="bg-gradient-to-b from-[#500a0a] via-amber-600 to-amber-400 py-[70px]">
        <div className="w-full h-16" id="paymentSection"></div>
        <div id="nityaSevaPaymentSection" className=" mx-[60px] max-sm:mx-[2px] flex flex-col">
          <NityaSevaPaymentSection />
        </div>
      </div>

      <div className="relative bg-[url('/Donation/NityaSeva/new_curve.svg')] h-[100px] bg-cover bg-center w-full z-50"></div>

      <div className="relative h-[80vh] bg-cover bg-center w-full mt-[-100px] flex justify-center items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Donation/NityaSeva/Krishna-Painting.jpg')",
          }}
        ></div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #4c1900db 0%, rgba(10, 9, 0, 0.79) 100%)",
          }}
        ></div>

        {/* Content */}
        <div className="relative flex flex-col items-center px-5">
          <h1
            className={`font-bold text-white text-[30px] sm:text-[50px] text-center ${caveat1.className}`}
          >
            Be A Nitya Sewak of Krishna 
          </h1>
          <div className="xl:px-64 pb-3">
            <p
              className={`text-center text-[18px] sm:font-medium text-[#ffffff] ${playfair.className}`}
            >
              <strong>
                Collectively once in a time or as per your bank account choices
                or pay by any other mode of your wish. But, at the same time,
                you get overflowing mercy for joining in the service of the
                supreme Lord.
              </strong>
            </p>
          </div>
          <button
            className={buttonClasses}
            onMouseEnter={() => handleMouseEnter("button2")}
            onMouseLeave={() => handleMouseLeave("button2")}
            onClick={scrollToDonationSection}
          >
            Donate Now{" "}
            {showUpArrow.button2 && (
              <img
                src="/Donation/NityaSeva/up_arrow.svg"
                className="inline-block w-6 h-6"
                alt="Up Arrow"
              />
            )}
          </button>
        </div>
      </div>
      {/* <div className=" relative mt-[-100px] max-sm:mt-[-150px]">
        <NityaSevaPaymentSection />
      </div> */}
    </>
  );
};

export default MainPoster;
