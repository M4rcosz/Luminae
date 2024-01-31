import TrendingMustHavesCard from "@components/TrendingMustHaves/TrendingMustHavesCard";
import ContainerList from "@components/utils/ContainerList";

const trendsInfo = [
    {
        "id": 1,
        "newArrivals": true,
        "image": "/images/ilustrations/trends-1.png",
        "title": "Cool & Sexy Calvin Klein",
        "description": "Dotted dress-Casual",
        "shopNowValue": 89
    },
    {
        "id": 2,
        "newArrivals": false,
        "image": "/images/ilustrations/trends-2.png",
        "title": "Cool & Sexy Calvin Klein",
        "description": "Dotted dress-Casual",
        "shopNowValue": 89
    },
    {
        "id": 3,
        "newArrivals": true,
        "image": "/images/ilustrations/trends-3.png",
        "title": "Beige Coat Zara",
        "description": "Cream-Brown-Formal",
        "shopNowValue": 102
    }
]

const TrendingMustHaves = () => {
    return (
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
    )
}

export default TrendingMustHaves