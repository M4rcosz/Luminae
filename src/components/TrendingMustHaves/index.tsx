'use client'

import ViewAllTitle from "../ViewAllTitle"
import data from "../../data/trendingMustHave.json"
import TrendingMustHavesCard from "./TrendingMustHavesCard";

const trends = data[0].trending;


const TrendingMustHaves = () => {
    return (
        <>
            <ViewAllTitle
                title="Trending Must Have"
            />
            <ul className="flex overflow-x-auto mb-2 min-w-64">
                {trends.map(trend => (
                    <li
                        key={`trendingMustHaves-${trend.id}`}
                        className=" ml-5 "
                    >
                        <TrendingMustHavesCard
                            newArivals={trend.newArivals}
                            image={trend.image}
                            title={trend.title}
                            description={trend.description}
                            shopNowValue={trend.shopNowValue}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TrendingMustHaves