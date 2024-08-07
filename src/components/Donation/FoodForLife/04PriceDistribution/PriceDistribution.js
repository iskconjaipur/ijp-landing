import React from "react";
import {
  Oswald
} from "next/font/google";

const oswa = Oswald({
  subsets: ["latin"],
});

const PriceDistribution = () => {
  return (
    <div className=" mx-[20px] lg:mx-[220px] py-[60px] max-[640px]:py-0  max-[640px]:mb-20">
      <div className="flex flex-col">
        <p
          className={`text-[25px] py-[20px] font-medium text-[#ffffff] text-center ${oswa.className}`}
        >
          Join us in our mission to support those in need by making a generous
          donation. As a token of our appreciation, donors who contribute
          significantly will receive a special prize. We will also honor their
          kindness by announcing their names in front of the deities and
          offering a special prayer on their behalf. Your generosity will not
          only help those in need but also bring blessings to you and your loved
          ones.
        </p>
      </div>
    </div>
  );
};

export default PriceDistribution;
