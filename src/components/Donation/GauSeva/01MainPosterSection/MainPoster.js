"use client";
import React, { useState, useRef } from "react";
import {
  Caveat,
  Playfair_Display,
  Quicksand,
  Oswald,
  Montserrat,
  Merriweather_Sans,
} from "next/font/google";
import SadhuPaymentSection from "../../SadhuSeva/04SadhuPaymentSection/SadhuPaymentSection";
import GauSevaPaymentSection from "../03GauSevaPaymentSection/GauSevaPaymentSection";
import CowCarousel from "../02Carousel/CowCarousel";
import AdoptCow from "../04AdoptCow/AdoptCow";
import GauSeva from "@/app/(donation)/gau-seva/page";
import PriceDistribution from "../../FoodForLife/04PriceDistribution/PriceDistribution";
import DonationPlane from "../05DonationPlane/DonationPlane";

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

const mons = Montserrat({
  subsets: ["latin"],
});

const merry = Merriweather_Sans({
  subsets: ["latin"],
});

const merri = Merriweather_Sans({
  subsets: ["latin"],
});

const textData = [
  { category: "UPI:", content: "8152687.6278.payuqr@indus" },
  { category: "Account No:", content: "2223330044191637" },
  { category: "Account Name:", content: "ISKCON DELHI" },
  { category: "IFSC:", content: "UTIB000RAZP" },
];

const feed = [
  {
    id: "1",
    img: "https://as2.ftcdn.net/v2/jpg/01/09/32/85/1000_F_109328596_CeXFdvVlQhG1WBBCIkxt99hNigHFB1OD.jpg",
    Title: "Feeds 1 cow for 3 days",
    Price: "₹ 500",
  },
  {
    id: "2 ",
    img: "https://wallpaperaccess.com/full/2220002.jpg",
    Title: "Feeds 1 cow for 7 days",
    Price: "₹ 1100",
  },
  {
    id: "3",
    img: "https://vedicfeed.com/wp-content/uploads/2018/09/Krishna-Cows.jpg",
    Title: "Feeds 3 cows for 7 days",
    Price: "₹ 2100",
  },
  {
    id: "4",
    img: "https://shyamasundaradasa.com/jyotish/images/articles/_crazy_story/Krsna_with_cows.jpg",
    Title: "Feeds 5 cows for 7 days",
    Price: "₹ 3100",
  },
  {
    id: "5",
    img: "Donation/GauSeva/wp.webp",
    Title: "Feeds 7 cows for 7 days",
    Price: "₹ 5100",
  },
  {
    id: "6",
    img: "https://4.bp.blogspot.com/-9N5FcrV8iEc/UGJ3VPJhwZI/AAAAAAAAMEQ/C6xGZzYkMms/s1600/310_001.jpg",
    Price: "Amount of Your Choice",
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
    const paymentSection = document.getElementById("paymentSection1");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttonClasses = `bg-[#fb3f3f] font-medium text-[30px] text-[#ffffff] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${caveat1.className} transition-transform hover:scale-105`;

  return (
    <>
      <div className="bg-[url('/Donation/GauSeva/pr.jpeg')] h-[100vh] bg-cover bg-center w-full mt-[40px]">
        <div className="absolute flex flex-col items-center w-full top-[25vh] sm:top-[45vh] justify-center">
          <h1
            className={`font-bold text-white text-6xl md:text-7xl text-center ${caveat1.className}`}
            style={{
              textShadow:
                "2px 2px black, 20px 20px 50px #d17a29, -20px -20px 50px #d17a29, -20px 20px 50px #d17a29, 20px -20px 50px black",
            }}
          >
            Gau Seva
          </h1>
          <div className="xl:px-64 px-10 pb-3">
            <p
              className={`text-center text-[18px] font-fold text-[#ffffff] ${playfair.className}`}
            >
              <strong>
                Serving and protecting cows is serving and protecting all living
                beings
              </strong>
            </p>
          </div>
          <button
            className={buttonClasses}
            onMouseEnter={() => handleMouseEnter("button1")}
            onMouseLeave={() => handleMouseLeave("button1")}
            onClick={scrollToDonationSection}
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
      <div className="bg-[url('/Donation/GauSeva/curve.svg')] h-[150px] bg-cover bg-center w-full z-10 mt-[-150px]"></div>

      <div
        className="pt-[10px] pb-28"
        style={{ background: "linear-gradient(to bottom, #ca7527, #000000)" }}
      >
        <CowCarousel />
      </div>

      <div
        ref={donationSectionRef}
        className=" flex flex-col justify-center items-center bg-[url('/Donation/GauSeva/digital_art.jpg')] bg-cover bg-center"
      >
        <div className=" w-4/5 max-[500px]:w-4/5 flex flex-col gap-8">
          <div className="text-center font-medium flex justify-center items-center mt-10">
            <p className={`text-[42px] text-[#f43e3e] ${playfair.className}`}>
              Donation Plans
            </p>
          </div>
          <div className=" grid grid-cols-2 lg:grid-cols-3 max-[700px]:grid-cols-1 gap-1">
            {feed.map((item) => (
              <div
                key={item.id}
                className=" h-[310px] flex justify-center items-center"
              >
                <div className=" flex flex-col justify-center items-center z-20 w-[230px] hover:scale-110 transition-transform duration-500 rounded-lg">
                  <div className="">
                    <img
                      className="w-[230px] h-[150px] object-cover object-top"
                      src={item.img || "https://via.placeholder.com/230x150"}
                      alt={item.Title}
                    />
                  </div>
                  <div className=" w-[230px] h-10 text-center">
                    <h3
                      className={`text-[${
                        item.id === "6" ? "18px" : "18px"
                      }] text-[#ffffff]`}
                    >
                      {item.Price}
                    </h3>
                    <div className=" w-full border-white-400"></div>
                  </div>
                  <div className="mt-2">
                    <p
                      className={`text-[16px] text-[#ffffff] font-medium ${oswald1.className}`}
                    >
                      {item.Title}
                    </p>
                  </div>
                  <div className="mt-2">
                    <button
                      className={`bg-[#ffffff] font-bold text-[20px] text-[#000000] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${caveat1.className} hover:scale-105 transition-transform`}
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
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 w-full">
          <AdoptCow />
        </div>
        <div className="w-full">
          <DonationPlane />
        </div>
        <div id="paymentSection1" className="mt-5 mb-5 w-full">
          <GauSevaPaymentSection />
        </div>

        <PriceDistribution />
        <div  id="contactSection"> 
          <h1
            className="text-white text-center text-5xl max-sm:text-2xl py-16 px-5"
            style={{ textShadow: "0px 0px 5px black, 0px 0px 5px black" }}
          >
            Contact Us: 9351549745
          </h1>
        </div>
      </div>
    </>
  );
};

export default MainPoster;
