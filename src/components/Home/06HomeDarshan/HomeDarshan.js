"use client"
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const images = [
  "/Home/HomeDarshan/Sri Sri Gaura Nitai.webp",
  "/Home/HomeDarshan/Sri Sri Giridhari Dauji.webp",
  "/Home/HomeDarshan/Sri Sri Radha MadanMohan.webp",
];

const HomeDarshan = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsZoomed(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  return (
    <div className="relative flex items-center bg-white bg-cover">
      <div className="relative mx-auto w-full">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={inView}
          showThumbs={false}
          onClickItem={(index) => handleImageClick(images[index])}
        >
          {images.map((image, index) => (
            <div key={index}>
              <motion.img
                src={image}
                alt={`slide ${index}`}
                className="d-block w-100 h-full object-cover cursor-pointer"
                whileHover={{ scale: 1.1 }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[5000000]"
          onClick={handleClose}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="selected"
              className={`max-h-[95vh] max-w-screen cursor-pointer`}
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
            />
            <button
              className="absolute top-0 right-0 m-4 text-white text-3xl font-bold"
              onClick={handleClose}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeDarshan;
