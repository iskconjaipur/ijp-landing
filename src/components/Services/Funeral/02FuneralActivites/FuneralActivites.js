import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Playfair } from "next/font/google";

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const FuneralActivites = () => {
  const cardData = [
    {
      name: "kirtan",
      image: "/Services/HouseProgram/kirtanimg.jpg",
    },
    {
      name: "Bhagavad Gita Session",
      image: "/Services/HouseProgram/bg1.jpeg",
    },
  ];
  return (
    <div>
      <div
        className="flex flex-col items-center gap-8 p-8"
        style={{
          background: "linear-gradient(to right, #6A82FB, #FC5C7D)",
          WebkitBackground:
            "-webkit-linear-gradient(to right, #6A82FB, #FC5C7D)",
        }}
      >
        <div className="text-center p-2">
          <h2
            className={`text-[60px] text-[#ffffff] font-bold  ${play.className}`}
          >
            Our Services
          </h2>
        </div>

        <div className="p-0 py-5 lg:mx-60 mx-2">
          <p className={`text-white text-[20px] text-center ${play.className}`}>
            We join in doing Hari Nama Kirtan, chanting with devotion and
            reverence. We discuss knowledge on Bhagavad Gita, enlighten and
            inspire from its timeless teachings. As a community, we pay tribute
            to the divine soul, remember his contributions and cherish his
            memories. We all pray together for peace and eternal rest for the
            disabled.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {cardData.map((person, index) => (
            <motion.div
              key={index}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.9, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="w-80 h-[400px] bg-[#F8CDDA]">
                <CardHeader
                  floated={false}
                  className="h-[240px] overflow-hidden mt-4"
                >
                  <motion.img
                    src={person.image}
                    alt="profile-picture"
                    className="w-full h-full object-top object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                </CardHeader>
                <CardBody className="text-center h-[100px] flex flex-col justify-center">
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mb-2 text-[24px] font-bold text-blue-800"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
                  >
                    {person.name}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div id="contactSection">
        <h1 className="text-[#98532d] text-center text-5xl max-sm:text-2xl max-[330px]:text-xl py-20 max-sm:pt-14 px-5">
          Contact Us: 8905661443
        </h1>
      </div>
    </div>
  );
};

export default FuneralActivites;
