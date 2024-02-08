import Image from "next/image";
import CarouselAd from "@/components/Carousel/CarouselAd";
import Link from "next/link";


const ExploreCards = () => {

    const exploreCardsInfo = [
        {
            "id": 1,
            "cardColor": "#BF2E3B",
            "title": "Never-Ending Summer",
            "description": "Throwback Shirts & all-day dressed",
            "cardSrc": "/images/cardExplore/cardExplore-1.png",
            "href": "#"
        },
        {
            "id": 2,
            "cardColor": "#006c9e",
            "title": "Best Sellers Everyone Love",
            "description": "Bikini & Poolside glam include",
            "cardSrc": "/images/cardExplore/cardExplore-2.png",
            "href": "#"
        },
        {
            "id": 3,
            "cardColor": "#900050",
            "title": "The Pinky Barbie Edition",
            "description": "Lets play dress up",
            "cardSrc": "/images/cardExplore/cardExplore-3.png",
            "href": "#"
        },
        {
            "id": 4,
            "cardColor": "#1D5159",
            "title": "The Most Famous Sport Brands",
            "description": "Get in gym essentials",
            "cardSrc": "/images/cardExplore/cardExplore-4.png",
            "href": "#"
        }
    ];

    return (
        <section className="px-Mobile md:px-Tablet gap-3 grid w-full xs:grid-cols-2 sm:order-last lg:gap-5">

            {exploreCardsInfo!.map(card =>
                <article className="flex " key={`exploreCards-${card.id}`} style={{ order: card.id }}>
                    <div
                        style={{ backgroundColor: card.cardColor }}
                        className="px-3 py-4 flex flex-col justify-center gap-2 w-full md:w-[50%] h-full xl:px-6"
                    >
                        <h2 className="font-extrabold text-sm text-whiteText md:text-xl lg:text-2xl xl:text-3xl">
                            {card.title}
                        </h2>

                        <p className="text-xs text-whiteText md:text-base lg:text-lg xl:text-xl">
                            {card.description}
                        </p>

                        <Link href={card.href} className="underline text-2xs text-whiteText md:text-sm lg:text-base xl:text-lg hover:text-[#ccc] ease-in-out duration-200">
                            Explore All Category
                        </Link>
                    </div>

                    <Image
                        src={card.cardSrc}
                        alt={card.title}
                        width={500}
                        height={500}
                        className="w-[50%] h-full object-cover "
                        loading="lazy"
                    />
                </article>
            )}

            <CarouselAd
                className="col-span-2"
            />

        </section>
    )
}

export default ExploreCards

