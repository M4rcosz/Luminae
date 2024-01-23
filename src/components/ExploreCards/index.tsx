import data from "@/data/data.json";
import Image from "next/image";
import CarouselAd from "@/components/CarouselAd";

const exploreCardsInfo = data[0].exploreCardsInfo;

const ExploreCards = () => {
    return (
        <section className="gap-y-3 flex flex-col w-full xs:flex-row xs:flex-wrap xs:justify-between sm:order-last">

            {exploreCardsInfo.map(card =>
                <article className={`flex xs:w-[49%] order-${card.id}`} key={`exploreCards-${card.id}`}>
                    <div
                        style={{ backgroundColor: card.cardColor }}
                        className="px-3 py-4 flex flex-col justify-center gap-2 w-full"
                    >
                        <h2 className="leading-5 font-extrabold text-sm text-whiteText">
                            {card.title}
                        </h2>

                        <p className="leading-5 text-xs text-whiteText">
                            {card.description}
                        </p>

                        <a href={card.href} className="underline text-2xs text-whiteText ">
                            Explore All Category
                        </a>
                    </div>

                    <Image
                        src={card.cardSrc}
                        alt=""
                        width={500}
                        height={500}
                        className="w-[50%] object-cover "
                        loading="lazy"
                    />
                </article>
            )}

            <CarouselAd />

        </section>
    )
}

export default ExploreCards

