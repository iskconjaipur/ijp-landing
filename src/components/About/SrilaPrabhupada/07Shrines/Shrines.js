"use client";
import { Architects_Daughter, Playfair_Display } from "next/font/google";
import { useState } from "react";
import { memorials } from "./memorialData";

const play = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const architect = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
})


const MyComponent = ({ point }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-full w-full bg-black/70 flex justify-center p-2 flex-col"
      style={{
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.2s ease-in-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className={`text-justify text-lg p-5 m-0 text-gray-100`}
        style={{
          textAlignLast: "center",
        }}
      >
        {point}
      </p>
    </div>
  );
};

const Shrines = () => {
  return (
    <div className="py-10 bg-[#ececec]">
      <h1 className={`px-5 text-center ${play.className}`}>
        Shrines And Memorials
      </h1>
      <div className="p-10 grid md:grid-cols-2 grid-cols-1 gap-5 place-items-center">
        {memorials.map((memorial, index) => (
          <div key={index}>
            <h4 className={`text-center ${architect.className}`}>{memorial.title}</h4>
            <div
              style={{
                background: `url('${memorial.img}') top right / cover`,
              }}
              className="h-[400px] max-w-4xl"
            >
              <MyComponent point={memorial.details} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shrines;
