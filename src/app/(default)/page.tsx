"use client"
import PresentationAd from "@/components/PresentationAd";
import ExploreCards from "@/components/ExploreCards"
import FlashSales from "@/components/FlashSales";
import Top100 from "@/components/Top100";
import TrendingMustHaves from "@/components/TrendingMustHaves";
import { containerPadX, style, } from "@/common/styles/containerPadX";

const Landing = () => {
  return (
    <main className={`${style(containerPadX)} flex flex-col gap-8 my-5 sm:mb-0 sm:gap-10`}>
      <h1 className="absolute w-[1px] margin-[-1px] z-[-1] opacity-0">Landing Page</h1>

      <PresentationAd />

      <ExploreCards />

      <FlashSales />

      <TrendingMustHaves />

      <Top100 />

    </main>
  )
}

export default Landing

