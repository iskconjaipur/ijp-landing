"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { Playfair_Display } from "next/font/google";

const play = Playfair_Display({
  subsets: ["latin"],
});

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "linear-gradient(to right, #ff4b2b, #ff416c)",
        borderRadius: "50%",
        padding: "10px",
        width: "40px",
        height: "40px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "linear-gradient(to right, #ff4b2b, #ff416c)",
        borderRadius: "50%",
        padding: "10px",
        width: "40px",
        height: "40px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 3000, // Set autoplay speed to 3000 milliseconds (3 seconds)
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 668,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Carousel = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsZoomed(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  // console.log(data)

  return (
    <div className=" sm:w-10/12 sm:max-w-screen-2xl mx-auto px-4 pb-5 pt-10">
      <h2 className={`pb-5 ${play.className} font-medium sm:text-5xl`}>
        {data.title}
      </h2>
      <p className="text-lg pb-4 text-justify">
        {data.content}
      </p>
      <Slider {...settings}>
        {data.img.map((image, index) => (
          <div key={index} className="px-2 w-full h-full">
            <img
              className={`h-auto m-auto w-[257px] object-cover cursor-pointer ${
                isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
              src={image}
              alt={`Carousel Image ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </Slider>
      {selectedImage && (
        <div
          className={`fixed inset-0 bg-black/70 flex items-center justify-center z-[5000000] ${
            isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={handleClose}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="selected"
              className={`max-h-[95vh] max-w-screen ${
                isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
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

export default Carousel;
