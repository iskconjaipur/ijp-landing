import { Dancing_Script } from "next/font/google";
import Carousel from "./Carousel";
import { acharyaData, dasavatarData, lilaData } from "./carouselData";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const GlassPainting = () => {
  return (
    <>
      <div
        className="relative text-center bg-cover bg-center bg-fixed z-1"
        style={{
          backgroundImage: "url('/IJP/glass/krsna-flute.jpg')",
        }}
      >
        <div className=" py-10 inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-[#d17a29]/40 to-red-400/30 text-white">
          <div className="px-4 w-full sm:w-11/12 bg-black/60">
            <h1
              className={`${dancing.className} pb-4 xl:text-7xl sm:text-5xl text-[2.5rem] pt-2`}
            >
              Windows To The Spiritual World
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-1 sm:gap-5 2xl:py-8">
              <img
                src="/IJP/glassimg.jpg"
                className="h-[200px] sm:h-[300px] xl:h-[400px] pb-0 md:pb-5"
              />
              <div className="max-w-[900px] p-3 pb-6">
                <p className="text-justify text-sm xl:text-lg hidden sm:block">
                  It was a long Journey to complete (from 2006 to 2018). There
                  is no temple in the world that has Stained Glass Paintings of
                  Lord Krishna&apos;s Lila. When the leaders of the Australian
                  Stained Glass society visited, they declared this work of art
                  as world class workmanship, equal of anywhere in the world. We
                  are proud to be the first ISKCON Temple in the world to have
                  this honor.
                </p>
                <p className="text-justify xl:text-lg text-sm mb-0 sm:block">
                  Mr. Colin Greenwood from Sydney (Australia), is the artist for
                  this wonderful work. He had met Srila Prabhupada early and
                  always had a desire to present Krishna Consciousness in
                  Stained Glass. Working in our ISKCON Auckland Temple he made a
                  magnificent window before coming to Jaipur where he setup the
                  production studio and trained local men to produce
                  stained glass windows.
                </p>
                <p className="sm:hidden block text-justify">
                  The glass is all handmade, from America, with thousands of
                  colors and textures. The faces and many parts of the dresses
                  are painted with ceramic paint and fired in an oven at over
                  1200 degrees so that the paint becomes a part of the glass
                  giving a life span of over 600 years.
                </p>
              </div>
            </div>

            <div>
              <Carousel data={dasavatarData} />
              <Carousel data={acharyaData} />
              <Carousel data={lilaData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlassPainting;
