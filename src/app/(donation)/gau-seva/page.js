'use client'
import MainPoster from '@/components/Donation/GauSeva/01MainPosterSection/MainPoster'
import SadhuPaymentSection from '@/components/Donation/SadhuSeva/04SadhuPaymentSection/SadhuPaymentSection';
import React, { useRef } from "react";

const GauSeva = () => {
  const paymentSectionRef = useRef(null);

  const scrollToPaymentSection = () => {
    if (paymentSectionRef.current) {
      window.scrollTo({
        top: paymentSectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
        <MainPoster />
        
    </>
  )
}

export default GauSeva;
