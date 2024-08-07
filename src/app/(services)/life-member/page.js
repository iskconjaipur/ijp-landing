"use client"
import { useState } from "react";
import Link from "next/link";
import { members } from "./lifeData";
import { Dancing_Script, Playfair } from "next/font/google";
import { motion } from "framer-motion";

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
});

// ListItem component
const ListItem = ({ member, index }) => {
  return (
    <motion.li
      className="flex gap-2 m-2 text-justify mx-0"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img
        src="/Services/LifeMember/right.svg"
        className="self-start mt-1"
      ></img>
      <span className="sm:text-base text-white">{member}</span>{" "}
    </motion.li>
  );
};

const Page = () => {
  return (
    <div>
      <div className="sm:px-5 px-1 pr-4 pt-[80px] bg-black">
        <div className="flex items-center lg:flex-row flex-col gap-10 max-w-screen-xl m-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <img
              src="/Services/LifeMember/membership.png"
              className="w-full lg:min-w-[350px]"
            />
          </motion.div>
          <div>
            <h2 className={`text-white pb-4 font-medium sm:text-left text-center`}>Benefits You Get</h2>
            <ul className="mb-0">
              {members.map((member, index) => (
                <ListItem key={index} member={member} index={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h2
        className={`font-medium text-orange-100 text-center py-10 bg-black`}
        id="contact"
      >
        <span className={`${play.className} text-5xl font-semibold text-white `}>
          CONTACT US:
        </span>{" "}
        +919649689649
      </h2>
    </div>
  );
};

export default Page;
