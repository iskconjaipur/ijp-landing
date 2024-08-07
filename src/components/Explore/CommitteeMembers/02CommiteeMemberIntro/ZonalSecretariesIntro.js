'use client'
import {React , useState }  from 'react'
import { motion } from "framer-motion";
import { Dancing_Script , Sriracha , Tenali_Ramakrishna } from "next/font/google";
import { useInView } from "react-intersection-observer";
import CouncilMembersIntro from '../01CommitteeMembersIntro/CouncilMembersIntro';
import {steeringCommittee} from "../01CommitteeMembersIntro/CouncilMemberData";
import TempleManagementCommittee from '../03TempleManagementCommittee/TempleManagementCommittee';

const dancing = Sriracha({
  subsets: ["latin"],
  weight: "400",
});

const agdaFont = Tenali_Ramakrishna({
  subsets: ["latin"],
  weight: ["400"],
});


const ZonalSecretariesIntro = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHoverStart = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      <CouncilMembersIntro />
      <div className="bg-[#ffffff] text-black p-4 md:p-10">
        <h1 className={`${dancing.className} text-4xl `}>
          Steering Committee 
        </h1>
        {/* <hr className="sm:w-1/2 border-white mt-2 mb-0" /> */}
        <div className="flex flex-wrap justify-evenly gap-10 mt-10">
          {steeringCommittee.map((pt, i) => (
            <ActivityCard pt={pt} i={i} key={i} />
          ))}
        </div>
      </div>
       <TempleManagementCommittee />
    </div>
  )
};

const ActivityCard = ({ pt, i }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
    // className="relative w-72 pt-10 hover:scale-110 transition-all duration-500"
    ref={ref}
    initial={{ y: 20, opacity: 0 }}
    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
    transition={{ duration: 0.7, delay: inView ? 0.1 * (i + 1) : 0 }}
  >
    <div className="p-2 rounded-full h-[210px] w-[210px] border-dotted border-2 border-[#9eadc6]">
      <div>
        <img src={pt.image} className="w-48 h-48 object-cover rounded-full" />
      </div>
    </div>
    <h4
      className={`w-[210px] mt-2 text-center font-semibold leading-5 pt-2 ${agdaFont.className}`}
    >
      {pt.Name}
    </h4>
    <h6 className="text-center w-[210px] text-[#828282] font-semibold"> 
      {pt.title}
    </h6>
  </motion.div>
  );
};

export default ZonalSecretariesIntro