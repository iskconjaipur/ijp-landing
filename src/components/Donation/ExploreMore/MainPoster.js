"use client";
import React from "react";
import "flowbite";
import Image from "next/image";
import Link from "next/link";

import {
  Caveat,
  Playfair_Display,
  Quicksand,
  Oswald,
  Montserrat,
  Merriweather_Sans,
} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const oswald1 = Oswald({
  subsets: ["latin"],
});

const caveat1 = Caveat({
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

const feed = [
  {
    id: "1",
    img: "/Donation/FoodForNeed/Needy.jpg",
    link: "/food-for-life",
    Title: "Food For Needy",
  },
  {
    id: "2",
    img: "/Donation/SadhuSeva/Sadhu.jpg",
    link: "/sadhu-seva",
    Title: "Sadhu Seva",
  },
  {
    id: "3",
    img: "/Donation/NityaSeva/NITYA_SEWA.jpg",
    link: "/nitya-seva",
    Title: "Nitya Seva",
  },
  {
    id: "4",
    img: "/Donation/GauSeva/Gaushala.jpg",
    link: "/gau-seva",
    Title: "Gau Seva",
  },
  {
    id: "5",
    img: "/Donation/PujaSeva/puja.jpg",
    link: "/puja-seva",
    Title: "Puja",
  },
];

const MainPoster = () => {
  const imageSize = { width: 800, height: 1000 }; // Set width and height to match the "Gau Seva" image
  const firstRow = feed.slice(0, 3); // First three items for the first row
  const secondRow = feed.slice(3); // Remaining items for the second row

  return (
    <>
      <div className="mt-20 mx-3 text-center  text-[#000000] p-2">
        <h1>Welcome to ISKCON</h1>
      </div>
      <div className=" mx-3 flex flex-col">
        <div className="  flex justify-center items-center py-4">
          <img
            className="max-xl:w-[176px] max-xl:h-[190px]  xl:w-[400px] xl:h-[365px]"
            src="/Donation/ExploreMore/new.png"
          ></img>
        </div>

          <div className="flex justify-center items-center py-4">
            <p
              className={`font-bold text-[22px] max-[428px]:text-[16px] text-[#D9A55B] text-center ${playfair.className}`}
            >
              {"    "}दातव्यमिति यद्दानं दीयतेऽनुपकारिणे ।
              <br />
              देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम् ॥२०॥
            </p>
          </div>
          <div className="flex justify-center items-center py-4">
            <p
              className={`font-bold text-[22px] text-center max-[428px]:text-[16px] text-[#D9A55B] ${playfair.className}`}
            >
              dātavyam iti yad dānaṁ <br /> &nbsp;&nbsp;&nbsp;&nbsp;dīyate
              ’nupakāriṇe <br /> &nbsp;&nbsp;deśe kāle ca pātre ca <br />
              tad dānaṁ sāttvikaṁ smṛtam
            </p>
          </div>
          <div className="flex justify-center items-center py-4">
            <p
              className={`font-semibold text-[20px] text-center max-[428px]:text-[14px] text-[#D9A55B] ${playfair.className}`}
            >
              Charity given out of duty, without expectation of return, at the
              proper time and place, and to a worthy person is considered to be
              in the mode of goodness.
            </p>
          </div>
          {/* <div className="flex justify-center items-center py-4">
            <p
              className={`font-semibold text-[18px] text-justify max-[428px]:text-[14px] text-[#D9A55B] ${playfair.className}`}
            >
              Charity is pious activities, but if you give charity to a
              brāhmaṇa, then it is proper brāhmaṇa, I mean to say, qualified
              brāhmaṇa, Vaiṣṇava then your charity is properly utilized. And if
              you give the same charity to a drunkard, then you commit sinful
              activity. If you do not know what kind of charities we shall
              perform, if you blindly give charity, then sometimes you may be
              doing pious activities, but sometimes you are clearing the way for
              going to hell. Therefore in the Bhagavad-gītā it is stated there
              are three kinds of charities sāttvika, rājasika, tāmasika. If you
              perform sāttvika charity, then you get good result; rājasika
              charity, you get some profit; and tāmasika charity, you go to
              hell. So one must be very careful even for this sneha, or charity,
              or philanthropy.
            </p>
          </div> */}
        
      </div>

      <div className="">
        <div className="mt-2 mx-3 text-center  text-[#000000] p-2">
          <h2>Donation</h2>
        </div>
        <div className="flex flex-wrap justify-center mt-7 pb-10 max-[330px]:mx-2 ">
          {/* Rendering the first row */}
          {firstRow.map((item, index) => (
            <div
              key={item.id}
              className=" shadow-lg max-w-xs bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 mx-10 mb-6 w-full md:w-1/3 flex-shrink-0
          hover:scale-110 transition-transform duration-500 "
            >
              <Image
                className="rounded-t-lg"
                src={item.img}
                alt={item.Title}
                width={imageSize.width}
                height={imageSize.height}
                layout="responsive"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                  {item.Title}
                </h5>
                <Link href={item.link}>
                  <button
                    className={`ml-[80px] bg-[#fb3f3f] font-medium text-[20px] text-[#ffffff] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${caveat1.className} transition-transform hover:scale-105`}
                  >
                    Donate Now
                  </button>
                </Link>
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
              <Image
                className="rounded-t-lg"
                src={item.img}
                alt={item.Title}
                width={200}
                height={100}
                layout="responsive"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                  {item.Title}
                </h5>
                <Link href={item.link}>
                  <button
                    className={`ml-[90px] bg-[#fb3f3f] font-medium text-[20px] text-[#ffffff] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${caveat1.className} transition-transform hover:scale-105`}
                  >
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPoster;
