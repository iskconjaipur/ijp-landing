
"use client";
import PriceDistribution from "@/components/Donation/FoodForLife/04PriceDistribution/PriceDistribution";
import MainPoster from "@/components/Donation/SadhuSeva/01MainPoster/MainPoster";
import SadhuDonationSection from "@/components/Donation/SadhuSeva/02SadhuDontaionSection/SadhuDontaionSection";
import SadhuCardSection from "@/components/Donation/SadhuSeva/03SadhuCardSection/SadhuCardSection";
import SadhuPaymentSection from "@/components/Donation/SadhuSeva/04SadhuPaymentSection/SadhuPaymentSection";
import React from "react";

const SadhuSeva = () => {
  return (
    <>
      <MainPoster />
      <div className="bg-[url('/Donation/SadhuSeva/maxresdefault.jpg')] bg-cover bg-center w-full  relative">
        <div style={{ backgroundColor: "#b76746cc", paddingBottom: "44px" }}>
          <div className="relative">
            <SadhuDonationSection /> 
            <SadhuCardSection />
            <SadhuPaymentSection />
            <PriceDistribution />
          </div>
        </div>
      </div>
    </>
  );
};

export default SadhuSeva;
