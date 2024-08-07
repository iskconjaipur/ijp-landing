"use client";

import { Playfair } from "next/font/google";

const playfair = Playfair({
  subsets: ["latin"],
});

const SocialMedia = () => {
  return (
    <div className="py-20 px-4">
      <h2 className={`text-center pb-4 ${playfair.className} font-bold text-5xl sm:text-6xl`}>
        Follow Us On
      </h2>
      <div className="flex justify-center items-center gap-4 md:gap-20">
        <img src="/Home/Hero/social_media_icons/instagram.svg" className="h-10 sm:h-12" />
        <img src="/Home/Hero/social_media_icons/facebook.svg" className="h-10 sm:h-12" />
        <img src="/Home/Hero/social_media_icons/youtube.svg" className="h-10 sm:h-12" />
        <img src="/Home/Hero/social_media_icons/whatsapp.svg" className="h-14 sm:h-16" />
      </div>
    </div>
  );
};

export default SocialMedia;
