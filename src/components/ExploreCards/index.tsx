import data from "@data/data.json";
import Image from "next/image";
import CarouselAd from "@components/CarouselAd";

const exploreCardsInfo = data[0].exploreCardsInfo;

const ExploreCards = () => {
    return (
        <section className="px-Mobile md:px-Tablet gap-3 grid w-full xs:grid-cols-2 sm:order-last lg:gap-5">

            {exploreCardsInfo.map(card =>
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

                        <a href={card.href} className="underline text-2xs text-whiteText md:text-sm lg:text-base xl:text-lg">
                            Explore All Category
                        </a>
                    </div>

                    <Image
                        src={card.cardSrc}
                        alt=""
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

