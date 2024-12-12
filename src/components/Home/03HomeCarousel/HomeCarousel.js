"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const imageUrls = [
    "/Home/HomeCarousel/intro.jpg",
    "/Home/HomeCarousel/aim.jpg",
  ];

  return (
    <div className="sm:w-1/2 w-10/12 m-auto py-20">
      <Slider {...settings} className='h-[500px]'>
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} className="object-contain sm:w-auto h-[500px] mx-auto" alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
