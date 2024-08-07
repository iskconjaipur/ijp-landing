// MainSectionPujaSeva.js

import React, { useState, useRef } from "react";
import { Caveat, Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import PujaSevaPaymentSection from "../02PujaSevaPaymentSection/PujaSevaPaymentSection";
import PriceDistribution from "../../FoodForLife/04PriceDistribution/PriceDistribution";

const caveat1 = Caveat({
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const feed = [
  {
    id: "1",
    img: "/Donation/PujaSeva/thali1.webp",
    Title: "Aarti Archana Thali",
    price: "₹ 501",
  },
  {
    id: "2",
    img: "/Donation/PujaSeva/thali2.jpeg",
    Title: "Maha Arti Archana Thali",
    price: "₹ 1100",
  },
  {
    id: "3",
    img: "/Donation/PujaSeva/thali5.jpg",
    Title: "Maha Bhog Arti Archana Thali",
    price: "₹ 2100",
  },
  {
    id: "4",
    img: "/Donation/PujaSeva/ino.jpg",
    Title: "Home & Shop inauguration",
    price: "₹ 10,000",
  },
  {
    id: "5",
    img: "/Donation/PujaSeva/vehicle.jpg",
    Title: "Vehicle Puja",
    price: "₹ 2500",
  },
];

const MainSectionPujaSeva = () => {
  const [showUpArrow, setShowUpArrow] = useState({
    button1: false,
    button2: false,
  });

  const donationSectionRef = useRef(null); // Ref to the donation section
  const imageSize = { width: 800, height: 1000 }; // Set width and height to match the "Gau Seva" image
  const firstRow = feed.slice(0, 3); // First three items for the first row
  const secondRow = feed.slice(3); // Remaining items for the second row

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

  return (
    <>
      


      <div className="bg-[url('/Donation/PujaSeva/puja.jpg')] h-[100vh] bg-cover bg-center w-full mt-[40px]">
        <div className="absolute flex flex-col items-center w-full top-[25vh] sm:top-[45vh] justify-center">
          <h1
            className={`font-bold text-white text-6xl md:text-7xl text-center ${caveat1.className}`}
            style={{
              textShadow:
                "2px 2px black, 20px 20px 50px #d17a29, -20px -20px 50px #d17a29, -20px 20px 50px #d17a29, 20px -20px 50px black",
              padding: "10px", // Add padding for better readability
              borderRadius: "10px", // Optional: Add rounded corners
            }}
          >
            Puja Seva
          </h1>
          <div className="xl:px-64 px-10 pb-3">
            <p
              className={`text-center text-[20px] font-medium text-[#ffffff] ${playfair.className}`}
              style={{
                textShadow: "6px 6px 12px rgba(0, 0, 0, 0.9)",
                backgroundColor: "rgba(0, 0, 0, 0.3)", // Add semi-transparent background
                padding: "10px", // Add padding for better readability
                borderRadius: "10px", // Optional: Add rounded corners
              }}
            >
              <strong>
                Our world abounds with the boundless mercy and kindness of Lord
                Krishna. During these challenging times as we battle the
                Coronavirus, his blessings are needed more than ever.
              </strong>
            </p>
          </div>

          <button
            className={`bg-[#fb3f3f] font-medium text-[30px] text-[#ffffff] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${caveat1.className} transition-transform hover:scale-105`}
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
      <div className="bg-[url('/Donation/PujaSeva/curve.svg')] h-[150px] bg-cover bg-center w-full z-10 mt-[-150px]"></div>

      <div className="w-full bg-gradient-to-b from-[#f193da] to-[#9b51e0] bg-cover bg-center py-10">
        <div className=" flex flex-col px-44 max-md:px-5">
          <div className=" py-2 text-center">
            <h2 className={`text-[#ffffff] ${playfair.className}`}>
              Show compassion and love
            </h2>
          </div>
          <div className=" py-10 text-[#ffffff] text-[20px] text-center">
            <strong className="{`text-[#ffffff] ${playfair.className} `}">
              Those who serve Krishna with unwavering faith will surely
              experience his divine response. Chanting the mantra “Hare Krishna,
              Hare Krishna, Krishna Krishna, Hare Hare.. Hare Rama, Hare Rama,
              Rama Rama, Hare Hare..” brings immense peace and inner strength to
              navigate the challenging phases of life.
            </strong>
          </div>
        </div>

        <div
          ref={donationSectionRef}
          className="flex flex-wrap justify-center py-20 px-2"
        >
          {/* Rendering the first row */}
          {firstRow.map((item, index) => (
            <div
              key={item.id}
              className=" shadow-lg max-w-xs bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 mx-10 mb-6 w-full md:w-1/3 flex-shrink-0
              hover:scale-110 transition-transform duration-500 "
            >
              <div href="#">
                <Image
                  className="rounded-t-lg"
                  src={item.img}
                  alt={item.Title}
                  width={imageSize.width}
                  height={imageSize.height}
                  layout="responsive"
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-[18px] font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                  {item.Title}
                </h5>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                  {item.price}
                </h5>
                <div href="#">
                  <button
                    className={`ml-[80px] bg-[#fb3f3f] font-medium text-[20px] text-[#ffffff] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${caveat1.className} transition-transform hover
                    :scale-105`}
                    onClick={handleScrollToPaymentSection} // Changed this line
                  >
                    Donate Now{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Rendering the second row */}
          {secondRow.map((item, index) => (
            <div
              key={item.id}
              className="shadow-lg mt-5 max-w-xs bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 mx-10 mb-6 w-full md:w-1/2 flex-shrink-0
          hover:scale-110 transition-transform duration-500"
            >
              <Link href="#">
                <Image
                  className="rounded-t-lg"
                  src={item.img}
                  alt={item.Title}
                  width={200}
                  height={100}
                  layout="responsive"
                />
              </Link>
              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                  {item.Title}
                </h5>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                  {item.price}
                </h5>
                <div href="#">
                  <button
                    className={`ml-[90px] bg-[#fb3f3f] font-medium text-[20px] text-[#ffffff] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${caveat1.className} transition-transform hover:scale-105`}
                    onClick={handleScrollToPaymentSection} // Changed this line
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <PujaSevaPaymentSection />
        <PriceDistribution />
      </div>
    </>
  );
};

export default MainSectionPujaSeva;
