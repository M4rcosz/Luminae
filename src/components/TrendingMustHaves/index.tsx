import ViewAllTitle from "@components/ViewAllTitle"
import data from "@data/data.json"
import TrendingMustHavesCard from "@components/TrendingMustHaves/TrendingMustHavesCard";
import ContainerList from "@components/utils/ContainerList";

const trendsInfo = data[0].trendingMustHaveInfo;

const TrendingMustHaves = () => {
    return (
        <section className="px-Mobile md:px-Tablet">
            <ViewAllTitle title="Trending Must Have" />
            <ContainerList className="sm:justify-center lg:grid lg:grid-cols-3">
                {trendsInfo!.map(trend =>
                    <TrendingMustHavesCard
                        key={`trendingMustHaves-${trend.id}`}
                        newArrivals={trend.newArrivals}
                        image={trend.image}
                        title={trend.title}
                        description={trend.description}
                        shopNowValue={trend.shopNowValue}
                    />
                )}
            </ContainerList>
        </section>
    )
}

export default TrendingMustHaves