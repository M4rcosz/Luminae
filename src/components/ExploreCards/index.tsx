import data from "@/data/data.json";
import Image from "next/image";

const exploreCardsInfo = data[0].exploreCardsInfo;

const ExploreCards = () => {
    return (
        <section className="gap-y-3 flex flex-col w-full">
            {
                exploreCardsInfo.map(card =>
                    <article className="flex h-[50vw]" key={`exploreCards-${card.id}`}>
                        <div
                            style={{ backgroundColor: card.cardColor }}
                            className="px-3 py-4 flex flex-col justify-center gap-2 w-full  "
                        >
                            <h2 className="leading-5 font-extrabold text-sm text-whiteText">
                                {card.title}
                            </h2>

                            <p className="leading-5 text-xs text-whiteText">
                                {card.description}
                            </p>

                            <a href={card.href} className="underline text-2xs text-whiteText leading-7">
                                Explore All Category
                            </a>
                        </div>

                        <Image
                            src={card.cardSrc}
                            alt=""
                            width={500}
                            height={500}
                            className="w-[40vw] h-[50vw] object-cover"
                            loading="lazy"
                        />
                    </article>
                )
            }
        </section>
    )
}

export default ExploreCards

