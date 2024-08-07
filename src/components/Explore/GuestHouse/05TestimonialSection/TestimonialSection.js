"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const yellowStars = Array.from({ length: 5 }, (_, index) => (
  <svg
    key={index}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 20 20"
    fill="#d9a95b"
  >
    <path
      fillRule="evenodd"
      d="M10 15.56l-4.24 2.44 1-4.86L2 7.56l4.99-.72L10 2l2.01 4.84 4.99.72-4.76 4.56 1 4.86z"
      clipRule="evenodd"
    />
  </svg>
));

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

export default function TestimonialSection() {
  return (
    <>
      {/* <Testimonial section end> */}
      <div className="max-w-screen-xl mx-auto px-4 pb-20">
        <div className=" flex mx-[30px] sm:mx-[92px] justify-evenly items-center flex-wrap gap-5 my-10">
          <div className="flex flex-col  gap-2 w-full justify-center items-center ">
            <div>
              <p className="text-[#D9A55B] text-[22px] tracking-widest">
                TESTIMONIALS
              </p>
            </div>
            <div>
              <p
                className={`md:text-[55px] text-[20px] flex justify-center items-center ${playfair.className}`}
              >
                Feedback From Our Guests
              </p>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className="">
            <div className="m-[20px] sm:h-[450px] h-[450px] bg-[#e6e4e274] shadow-xl">
              <div className="md:h-[250px] sm:h-[250px] h-[330px]">
                <p className="text-[#6C6D72] text-[16px] text-justify p-[15px]">
                  Location is little far from the city although they have a
                  parking space relaxing and nice atmosphere. Quality food at
                  Govindas. Must visit Hare Krishna 🙏🏻🌸
                </p>
              </div>
              <div className="h-[130px]  ">
                <div className="star flex h-[55px] p-[10px]">{yellowStars}</div>
                <div class="flex items-center gap-4 p-[10px]">
                  <img
                    class="w-[55px] h-[55px] rounded-full animate-bounce"
                    src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div class="font-medium mt-[-15px]">
                    <div className="text-gray-500">Sumit Kar</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      Joined in August 2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="m-[20px] sm:h-[450px] h-[450px] bg-[#e6e4e274] shadow-xl">
              <div className="md:h-[250px] sm:h-[250px] h-[330px]">
                <p className="text-[#6C6D72] text-[16px] text-justify p-[15px]">
                  It was a really great atmosphere for the family and the room
                  was clean and a good place it&pos;s great and amazing experience
                  Really great opportunity to stay with Krishna temple geust
                  house.
                </p>
              </div>
              <div className="h-[130px]  ">
                <div className="star flex h-[55px] p-[10px]">{yellowStars}</div>
                <div class="flex items-center gap-4 p-[10px]">
                  <img
                    class="w-[55px] h-[55px] rounded-full animate-bounce"
                    src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div class="font-medium  mt-[-15px]">
                    <div className="text-gray-500">Edward Taylor</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      Joined in May 2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="m-[20px] sm:h-[450px] h-[450px] bg-[#e6e4e274] shadow-xl">
              <div className="md:h-[250px] sm:h-[250px] h-[330px]">
                <p className="text-[#6C6D72] text-[16px] text-justify p-[15px]">
                  Vishal Singla - Amazing place to stay there. Very calm, neat
                  and clean rooms. It was very hot outside in summers so it was
                  great relief staying in air-conditioned rooms after 8-10 hrs
                  of travel. There room service was also decent. Overall
                  satisfied.
                </p>
              </div>
              <div className="h-[130px]  ">
                <div className="star flex h-[55px] p-[10px]">{yellowStars}</div>
                <div class="flex items-center gap-4 p-[10px]">
                  <img
                    class="w-[55px] h-[55px] rounded-full animate-bounce"
                    src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div class="font-medium mt-[-15px]">
                    <div className="text-gray-500">Vishal Singla</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      Joined in feb 2018
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="m-[20px] sm:h-[450px] h-[450px] bg-[#e6e4e274] shadow-xl">
              <div className="md:h-[250px] sm:h-[250px] h-[330px]">
                <p className="text-[#6C6D72] text-[16px] text-justify p-[15px]">
                  Jaipur Iskcon Guest House is a Wonderful Guest House,
                  Beautiful Rooms, Good Lift, attached Govindas Restaurant
                  providing Mouth Watering Dishes,Weekend trips, Corporate
                  Meetings and so on... Next time when you visit Jaipur, Add
                  Iskcon to take darshan of Sri Sri Girdhari Dauji, Sri Sri Gaur
                  Nitai, Sri Sri Radha Madan Mohanji
                </p>
              </div>
              <div className="h-[130px]  ">
                <div className="star flex h-[55px] p-[10px]">{yellowStars}</div>
                <div class="flex items-center gap-4 p-[10px]">
                  <img
                    class="w-[55px] h-[55px] rounded-full animate-bounce"
                    src="https://images.unsplash.com/photo-1582274528667-1e8a10ded835?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div class="font-medium mt-[-15px]">
                    <div className="text-gray-500">shamsundar das</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      Joined in jan 2020
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="m-[20px] sm:h-[450px] h-[450px] bg-[#e6e4e274] shadow-xl">
              <div className="md:h-[250px] sm:h-[250px] h-[330px]">
                <p className="text-[#6C6D72] text-[16px] text-justify p-[15px]">
                  Very nice and decent rooms. Just outside hotel is
                  Govinda&apos;s, for pure veg food. However, timings are
                  restricted, but food is awesome. Connected with Iskcon temple.
                  Everything is just so spiritual there. Its like really heaven
                  on earth
                </p>
              </div>
              <div className="h-[130px]  ">
                <div className="star flex h-[55px] p-[10px]">{yellowStars}</div>
                <div class="flex items-center gap-4 p-[10px]">
                  <img
                    class="w-[55px] h-[55px] rounded-full animate-bounce"
                    src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div class="font-medium dark:text-white mt-[-15px]">
                    <div>Benjamin Smith</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      Joined in sept 2014
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>

        <div  id="contactSection">
          <h1
            className="text-[#98532d] text-center text-5xl max-sm:text-2xl max-[330px]:text-xl pt-28 max-sm:pt-14 px-5"
          >
            Contact Us: 8905661443
          </h1>
        </div> 
        
      </div>
      {/* <facilities section end> */}
    </>
  );
}
