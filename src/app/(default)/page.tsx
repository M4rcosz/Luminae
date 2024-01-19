"use client"
import Banner from "@/components/Banner";
import ExploreCard from "@/components/ExploreCard"
import FlashSales from "@/components/FlashSales";
import Top100 from "@/components/Top100";
import TrendingMustHaves from "@/components/TrendingMustHaves";

const Landing = () => {
  return (
    <main className="flex flex-col gap-10 px-5">
      <h1 className="absolute w-[1px] margin-[-1px] z-[-1] opacity-0">Landing Page</h1>

      <Banner />

      <section className="gap-y-3 flex flex-col ">
        <ExploreCard
          cardColor="#BF2E3B"
          title="Never-Ending Summer"
          description="Throwback Shirts & all-day dressed"
          anchorText="Explore all category"
          cardImage="/images/cardExplore/cardExplore-small-1.jpg"
          link="#"
        />

        <ExploreCard
          cardColor="#006c9e"
          title="Best Lovin Sellers"
          description="Bikini & Poolside glam include"
          anchorText="Explore all category"
          cardImage="/images/cardExplore/cardExplore-small-2.jpg"
          link="#"
        />
      </section>

      <FlashSales />

      <TrendingMustHaves />

      <Top100 />
    </main>
  )
}

export default Landing

