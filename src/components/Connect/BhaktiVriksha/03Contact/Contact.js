"use client";

import {
  Architects_Daughter,
  Caveat,
  Roboto_Condensed,
  Sriracha,
} from "next/font/google";
import { contactData, onlineContactData } from "./contactData";

const reddit = Roboto_Condensed({
  subsets: ["latin"],
});

const flower = Sriracha({
  subsets: ["latin"],
  weight: "400",
});

const architect = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

const caveat = Caveat({
  subsets: ["latin"],
});

const Contact = () => {
  return (
    <div className="py-16 m-auto">
      <h2
        className={`${reddit.className} text-5xl font-semibold text-orange-900 text-center mb-8`}
        id="contact"
      >
        CONTACT US: 9649689649
      </h2>
      <h2 className={`${flower.className} text-violet-800 text-center`}>
        Offline
      </h2>
      <div className="py-5 px-4 flex justify-center gap-5 flex-wrap max-w-screen-2xl m-auto">
        {contactData.map((item, index) => (
          <div
            key={index}
            className="w-[220px] rounded hover:scale-105 transition-all duration-500 pt-2 pb-3 pl-2 bg-gradient-to-br to-[#d17a29] from-black text-white"
          >
            <h6 className="font-medium">{item.name}</h6>
            <h6 className="pb-3 font-medium text-sm italic">{item.spouse}</h6>
            <h5 className="">{item.number}</h5>
            <div className="flex pt-3">
              <img src="/Home/Hero/location.svg" className="pr-2" />
              <span className="text-sm">{item.address}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className={`${flower.className} text-blue-800 text-center mt-4`}>
        Online
      </h2>
      <div className="py-5 px-6 flex justify-center gap-5 flex-wrap">
        {onlineContactData.map((item, index) => (
          <div
            key={index}
            className="w-[220px] rounded hover:scale-105 transition-all duration-500 pt-2 pb-3 pl-2 bg-gradient-to-br to-[#d17a29] from-black text-white"
          >
            <h6 className="font-medium">{item.name}</h6>
            <h6 className="pb-3 font-medium text-sm italic">{item.spouse}</h6>
            <h5 className="">{item.number}</h5>
            <div className="flex pt-3">
              <img src="/Home/Hero/location.svg" className="pr-2" />
              <span className="text-sm">{item.address}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="md:w-11/12 p-5 mt-5 m-auto max-w-screen-lg bg-[#d38134] flex justify-evenly gap-5 items-center text-white sm:flex-row flex-col sm:text-left text-center">
        <div className={`${architect.className}`}>
          <h2>Online Japa Session</h2>
          <h4>Timings: 5AM - 7AM</h4>
        </div>
        <div className={`${caveat.className}`}>
          <h4>Dhananjaya Sakha Prabhuji</h4>
          <h4>Subhadra Bhakti Devi Mataji</h4>
          <h3>9887090523</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
