import Hero from "@/components/Home/01Hero/Hero";
import HomeData from "@/components/Home/02HomeData/HomeData";
import HomeCalender from "@/components/Home/04HomeCalender/HomeCalender";
import HomeCarousel from "@/components/Home/03HomeCarousel/HomeCarousel";
import HomePrabhupada from "@/components/Home/05HomePrabhupada/HomePrabhupada";
import HomeDarshan from "@/components/Home/06HomeDarshan/HomeDarshan";
import HomeSchedule from "@/components/Home/07HomeSchedule/HomeSchedule";
import HomeExplore from "@/components/Home/08HomeExplore/HomeExplore";
import HomeServices from "@/components/Home/09HomeServices/HomeServices";
import HomeDonate from "@/components/Home/10HomeDonate/HomeDonate";
import HomeActivities from "@/components/Home/11HomeActivities/HomeActivities";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <HomeData />
      <div className="flex flex-col-reverse md:flex-row bg-gray-100">
        <HomeCarousel />
        <HomeCalender />
      </div>
      <HomePrabhupada />
      <HomeDarshan />
      <HomeSchedule />
      <HomeExplore />
      <HomeServices />
      <HomeDonate />
      <HomeActivities />
    </main>
  );
}
