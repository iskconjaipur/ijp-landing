import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { testimonials } from "./testimonialData";

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      className="bg-[#e5b776] py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/Connect/Kids/kids-testimonial.jpg')" }}
    >
      <Carousel
        // autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators
        interval={5000}
        showThumbs={false}
        selectedItem={index}
        onChange={handleSelect}
      >
        {testimonials.map((glorification, index) => (
          <div key={index} className="">
            <div className="w-[95%] md:w-10/12 mx-auto px-4 md:px-6 py-6 gap-2 md:gap-5 flex flex-col md:flex-row items-center rounded-xl">
              <div>
                <p className="text-[16px] text-white text-justify">
                  {glorification.review} 
                </p>
                <p className="text-[20px] text-right font-semibold text-white">
                  - {glorification.pname}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
