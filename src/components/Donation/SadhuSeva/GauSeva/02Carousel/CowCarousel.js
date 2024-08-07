import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Playfair_Display } from 'next/font/google';
import './swiper-custom.css'; // Import the custom CSS file

const playfair = Playfair_Display({
  subsets: ['latin'],
});

const CowCarousel = () => {
  useEffect(() => {
    const preloadImages = () => {
      const images = [
        '/Donation/GauSeva/img5.jpg',
        '/Donation/GauSeva/img6.jpg',
        '/Donation/GauSeva/img7.jpg',
        '/Donation/GauSeva/gau1.jpg',
        '/Donation/GauSeva/gau2.jpg',
      ];
      images.forEach((image) => {
        new Image().src = image;
      });
    };

    preloadImages();
  }, []);

  return (
    <>
      <div className="mt-10 text-center font-medium flex justify-center items-center">
        <p className={`text-[42px] text-[#ffffff] ${playfair.className}`}>
          Our Gaushala
        </p>
      </div>

      <div className="mt-5 flex justify-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-[900px] h-[500px] max-md:h-[300px]"
        >
          <SwiperSlide>
            <img
              src="/Donation/GauSeva/img5.jpg"
              className="block w-full h-full object-cover"
              alt="Gaushala Image 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Donation/GauSeva/img6.jpg"
              className="block w-full h-full object-cover"
              alt="Gaushala Image 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Donation/GauSeva/img7.jpg"
              className="block w-full h-full object-cover"
              alt="Gaushala Image 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Donation/GauSeva/gau1.jpg"
              className="block w-full h-full object-cover"
              alt="Gaushala Image 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Donation/GauSeva/gau2.jpg"
              className="block w-full h-full object-cover"
              alt="Gaushala Image 5"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CowCarousel;
