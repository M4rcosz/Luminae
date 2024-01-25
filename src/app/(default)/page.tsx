"use client"
import PresentationAd from "@components/PresentationAd";
import ExploreCards from "@components/ExploreCards"
import FlashSales from "@components/FlashSales";
import Top100 from "@components/Top100";
import TrendingMustHaves from "@components/TrendingMustHaves";

const Landing = () => {
  return (
    <main className=" flex flex-col gap-8 mb-5 sm:mb-0 sm:gap-10 max-w-[1440px] mx-auto">
      <PresentationAd />

      <ExploreCards />

      <FlashSales />

      <TrendingMustHaves />

      <Top100 />

    </main>
  )
}

export default Landing

