"use client";

import { Playfair } from "next/font/google";
import { activitiesData } from "./activitiesData";

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const ActivitiesYatra = () => {
  return (
    <div className="p-14">
      <h1 className={`${play.className} text-center text-gray-900 text-6xl`}>
        Yatra Activities
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 place-items-center gap-x-5 m-auto max-w-screen-xl">
        {activitiesData.map((activity, i) => (
          <div
            className={`max-w-64 hover:shadow-lg bg-white border border-gray-200 mt-10 rounded-sm hover:mt-2 hover:mb-8 sm:hover:mb-0 transition-all duration-500`}
            key={i}
          >
            <img
              className="h-64 object-cover"
              src={activity.image}
              alt=""
            />
            <div className="p-2 text-center">
              <h5 className="mb-2 text-2xl tracking-tight font-medium text-gray-900">
              {activity.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesYatra;
