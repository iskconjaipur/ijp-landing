"use client";
import React from "react";
import "flowbite";
import Image from "next/image";
import Link from "next/link";

import { Caveat, Playfair_Display, Oswald } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const oswald1 = Oswald({
  subsets: ["latin"],
});

const caveat1 = Caveat({
  subsets: ["latin"],
});

const feed = [
  {
    id: "1",
    img: "/Donation/GauSeva/img1.jpg",
  },
];

const AdoptCow = () => {
  const handleScrollToContactSection = () => {
    const contactSection = document.getElementById("contactSection");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const imageSize = { width: 200, height: 200 }; // Set width and height to match the "Gau Seva" image
  const firstRow = feed.slice(0, 3); // First three items for the first row

  return (
    <>
      <div className="mx-40 max-lg:mx-5 flex flex-col flex-wrap">
        <div className={` ${playfair.className} px-3 py-3 text-[#f43e3e]`}>
          <h2>Adopt A Cow</h2>
        </div>
        <div
          className={` ${playfair.className} px-3 text-[18px] mt-3  text-[#fcd6a0] text-center`}
        >
          <strong>
            दानानामपि सर्वेषां गवां दानं प्रशस्यते । गावः श्रेष्ठाः पवित्राश्च
            पावनं ह्येतदुत्तमम् ॥
            <span style={{fontSize: '14px'}}>
              (Mahabharata, Anushasana Parva 83-3)
            </span>
          </strong>
          <br />
          <strong>
            {" "}
            Donation of cows is superior to all others. Cows are supreme and
            sacred.
          </strong>
        </div>
        <div
          className={` ${playfair.className} px-3 text-[18px] text-justify text-[#ffffff] pt-7`}
        >
          <strong>
            The cow holds a revered place in Hindu tradition, embodying a
            multitude of deities and sacred elements. In its forehead resides
            Lord Siva, while Goddess Parvati dwells in the middle of the
            forehead. The base of its horns is home to both Brahma and Maha
            Vishnu, with the tips of the horns sheltering all holy rivers,
            beginning with Ganga Mata. Goddess Mahalakshmi finds her abode in
            the hind part of the cow. The nose houses Lord Ganesh, and at the
            tip of the nose resides Lord Subramanya. Lord Yama occupies the
            heart, and all gods reside at the base of the tail. The cowdung is
            sanctified by the presence of the River Yamuna, and sages and rishis
            reside in the cow&apos;s hair. This intricate symbolism highlights
            the cow&apos;s sanctity and its embodiment of divine presence in
            Hindu belief.
          </strong>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mx-8">
        {firstRow.map((item) => (
          <div
            key={item.id}
            className="shadow-lg max-w-xs bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 mx-10 mb-6 w-full md:w-1/3 flex-shrink-0
          hover:scale-110 transition-transform duration-500"
          >
            <Link href="#">
              <Image
                className="rounded-t-lg"
                src={item.img}
                alt={item.Title}
                width={imageSize.width}
                height={imageSize.height}
                layout="responsive"
              />
            </Link>
            <div className="p-5">
              {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                {item.Title}
              </h5> */}
              <button
                className={`ml-[85px] bg-[#fb3f3f] font-medium text-[20px] text-[#ffffff] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${caveat1.className} transition-transform hover:scale-105`}
                onClick={handleScrollToContactSection}
              >
                Adopt Me
              </button>
            </div>
          </div>
        ))}
      </div>
      <div id="paymentSection" className="mt-20">
        {/* Your payment section content */}
      </div>
    </>
  );
};

export default AdoptCow;
