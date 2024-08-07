"use client";
import React from "react";
import styles from "./MainPoster.module.css";
import { Barlow } from "next/font/google";

const bar = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const CirclePoster = () => {
  return (
    <>
      <div className={styles.mainPosterWrapper}>
        <div className={styles.gallery}>
          <img
            src="/Donation/FoodForNeed/img1.jpeg"
            alt="many clothes and pictures"
          />
          <img
            src="/Donation/FoodForNeed/img4.jpg"
            alt="someone preparing artisanal coffee"
          />
          <img src="/Donation/FoodForNeed/img3.webp" alt="some tee" />
          <img
            src="/Donation/FoodForNeed/im6.jpg"
            alt="an empty table in a restaurant"
          />
          <img
            src="/Donation/FoodForNeed/img5.jpg"
            alt="a laptop with a notebook"
          />
          <img
            src="/Donation/FoodForNeed/img7.png"
            alt="a laptop and many books around it"
          />
        </div>
      </div>
    </>
  );
};

export default CirclePoster;
