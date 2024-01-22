import ViewAllTitle from "../ViewAllTitle"
import data from "@/data/data.json"
import TrendingMustHavesCard from "./TrendingMustHavesCard";
import ContainerList from "../utils/ContainerList";

const trendsInfo = data[0].trendingMustHaveInfo;

const TrendingMustHaves = () => {
    return (
        <section>
            <ViewAllTitle title="Trending Must Have" />
            <ContainerList>
                {trendsInfo.map(trend =>
                    <TrendingMustHavesCard
                        key={`trendingMustHaves-${trend.id}`}
                        newArivals={trend.newArivals}
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