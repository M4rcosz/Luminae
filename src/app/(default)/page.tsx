import PresentationAd from "@components/PresentationAd";
import ExploreCards from "@components/ExploreCards"
import FlashSales from "@components/FlashSales";
import Top100 from "@components/Top100";
import TrendingMustHaves from "@components/TrendingMustHaves";
import ViewAllTitle from "@/components/ViewAllTitle";

const Landing = () => {
  return (
    <main className=" flex flex-col gap-8 mb-5 sm:mb-0 sm:gap-10 max-w-[1440px] mx-auto">
      <PresentationAd />

      <ExploreCards />

      <section className="px-Mobile md:px-Tablet">
        <ViewAllTitle title="Flash Sales" />
        <FlashSales />
      </section>

      <section className="px-Mobile md:px-Tablet">
        <ViewAllTitle title="Trending Must Have" />
        <TrendingMustHaves />
      </section>

      <section className="px-Mobile md:px-Tablet">
        <ViewAllTitle title="Top 100" />

        <Top100 />
      </section>

    </main>
  )
}

export default Landing
