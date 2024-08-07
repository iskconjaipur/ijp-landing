"use client";
import Hero from "@/components/About/SrilaPrabhupada/01Hero/Hero";

import Glorification from "@/components/About/SrilaPrabhupada/02Glorification/Glorification";
import Introduction from "@/components/About/SrilaPrabhupada/03Intro/Introduction";
import Objectives from "@/components/About/SrilaPrabhupada/04Objectives/Objectives";
import Timelines from "@/components/About/SrilaPrabhupada/05Timeline/Timeline";
import Achievements from "@/components/About/SrilaPrabhupada/06Achievements/Achievements";
import Shrines from "@/components/About/SrilaPrabhupada/07Shrines/Shrines";

const SrilaPrabhupada = () => {
  return (
    <main>
      <Hero />
      <Glorification />
      <Introduction />
      <Objectives />
      <Timelines />
      <Achievements />
      <Shrines />
    </main>
  );
};

export default SrilaPrabhupada;
