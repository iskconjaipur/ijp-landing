"use client";
import React from "react";
import Head from "next/head";
import Marquee from "react-fast-marquee";
import { Merriweather_Sans } from "next/font/google";
import Link from "next/link";

const merri = Merriweather_Sans({
  subsets: ["latin"],
});

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "ISKCON Jaipur", href: "/iskcon-jaipur" },
  { name: "Srila Prabhupada", href: "/srila-prabhupada" },
  { name: "Guest House", href: "/guest-house" },
  { name: "Govinda's", href: "/govindas" },
  { name: "Vrindavan Haat", href: "/vrindavan-haat" },
  { name: "Contact Us", href: "/contact" },
];

const donateLinks = [
  { name: "Food for Needy", href: "/food-for-life" },
  { name: "Online Puja", href: "/puja-seva" },
  { name: "Sadhu Seva", href: "/sadhu-seva" },
  { name: "Nitya Seva", href: "/nitya-seva" },
  { name: "Gau Seva", href: "/gau-seva" },
  { name: "Explore More", href: "/explore-more" },
];

const connectLinks = [
  { name: "Youth Forum", href: "/iyf" },
  { name: "Bhakti Vriksha", href: "/bhakti-vriksha" },
  { name: "Kids & Teenager", href: "/kids-teenager" },
]

const socialMediaIcons = [
  { src: "/Home/Hero/social_media_icons/instagram.svg", alt: "Instagram", href: "https://www.instagram.com/iskconjaipur.official/?igsh=MWRqbnl4M3o2ZXpucw%3D%3D" },
  { src: "/Home/Hero/social_media_icons/youtube.svg", alt: "YouTube", href: "https://www.youtube.com/@iskcon_jaipur" },
  { src: "/Home/Hero/social_media_icons/whatsapp.svg", alt: "WhatsApp", href: "https://wa.me/9649689649" },
];

const FooterPage = () => {
  return (
    <>
      <div className="bottom-0 bg-gradient-to-bl to-orange-400 from-black flex flex-col pt-10">
        <div className="pt-[5px] overflow-x-hidden">
          <Marquee
            className={`mb-[0px] text-[28px] text-[#ffffff] whitespace-no-wrap tracking-wide ${merri.className}`}
          >
            <span style={{ textShadow: "0em 0em 0.3em #fbba60" }}>
              Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare
              Rama Rama Rama Hare Hare.
            </span>
            <span className="ml-16"></span>
          </Marquee>
        </div>

        <div className="flex flex-col min-[721px]:flex-row mx-[20px] p-[20px]">
          <div className="basis-1/2">
            <p
              className={`text-center md:text-left text-[40px] ${merri.className} mb-0 text-[#ffffff] font-bold max-[721px]:pl-[0px] pl-[80px]`}
              style={{ textShadow: "0em 0em 0.3em #fbba60" }}
            >
              Get in touch
            </p>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <button
              className={`bg-[#FCD6A0] font-medium text-[20px] text-[#870909] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${merri.className} hover:scale-105 transition-transform`}
            >
              Donate Now
            </button>
          </div>
        </div>

        <div className="mt-[30px]">
          <div className="mx-[20px] sm:mx-[10px] grid grid-cols-1 xl:grid-cols-3 gap-2">
            <div className="col-span-full xl:col-span-2">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 flex items-center justify-center">
                      <img
                        src="/Donation/CommanImg/monk.png"
                        className="mb-[25px] h-60"
                        alt="Monk"
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold leading-6 text-white flex items-center justify-center ${merri.className}`}
                      >
                        Office
                      </h3>
                      <div className="p-[20px] text-white">
                        <span className="text-start block md:text-center">
                          ISKCON Jaipur, Sri Sri Giridhari Dauji Temple, Village
                          Dholai, New Sanganer Road, Opp. Vijay Path,
                          Mansarovar, Jaipur - 302020 Rajasthan (India)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold leading-6 text-white flex items-center justify-center ${merri.className}`}
                      >
                        Quick Links
                      </h3>
                      <ul
                        role="list"
                        className="mt-3 space-y-2 pl-[0px] flex flex-col items-center justify-center"
                      >
                        {quickLinks.map((link, index) => (
                          <li key={index}>
                            <Link
                              href={link.href}
                              className={`text-sm leading-3 text-[#FCD6A0] hover:text-gray-900 ${merri.className}`}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold leading-6 text-white flex items-center justify-center ${merri.className}`}
                      >
                        Donate
                      </h3>
                      <ul
                        role="list"
                        className="mt-3 space-y-2 pl-[0px] flex flex-col items-center justify-center"
                      >
                        {donateLinks.map((link, index) => (
                          <li key={index}>
                            <Link
                              href={link.href}
                              className={`text-sm leading-3 text-[#FCD6A0] hover:text-gray-900 ${merri.className}`}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold leading-6 text-white flex items-center justify-center ${merri.className}`}
                      >
                        Connect
                      </h3>
                      <ul
                        role="list"
                        className="mt-3 space-y-2 pl-[0px] flex flex-col items-center justify-center"
                      >
                        {connectLinks.map((link, index) => (
                          <li key={index}>
                            <Link
                              href={link.href}
                              className={`text-sm leading-3 text-[#FCD6A0] hover:text-gray-900 ${merri.className}`}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full xl:col-span-1">
              <div className="p-[5px] sm:p-[10px] flex flex-col justify-center items-center">
                <div className={`text-white ${merri.className}`}>
                  <h4>Contact Us</h4>
                </div>
                <div className={`text-white ${merri.className}`}>
                  <h6>We’re available (10 AM – 6 PM)</h6>
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <span
                      className={`text-[16px] text-white font-bold ${merri.className}`}
                    >
                      Mobile:-
                      <span
                        className={`font-bold text-white ${merri.className}`}
                      >
                        +91 96496 89649
                      </span>
                    </span>
                  </div>
                  <div>
                    <span
                      className={`text-[16px] text-white font-bold ${merri.className}`}
                    >
                      Email:-
                      <span
                        className={`font-bold ${merri.className} text-white`}
                      >
                        iskconjaipur@gmail.com
                      </span>
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex p-[14px] space-x-[20px]">
                    {socialMediaIcons.map((icon, index) => (
                      <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
                        <img
                          src={icon.src}
                          alt={icon.alt}
                          className="cursor-pointer w-6 h-6"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterPage;
