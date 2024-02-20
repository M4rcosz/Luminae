import PresentationAd from "@/components/SectionContents/PresentationAd";
import ExploreCards from "@/components/SectionContents/ExploreCards"
import FlashSales from "@/components/SectionContents/FlashSales";
import Top100 from "@/components/SectionContents/Top100";
import TrendingMustHaves from "@/components/SectionContents/TrendingMustHaves";
import ViewAllTitle from "@/components/SectionContents/UtilsItems/ViewAllTitle";

const Landing = () => {

  return (
    <main className=" flex flex-col gap-8 mb-5 sm:mb-0 sm:gap-10 container mx-auto">
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

