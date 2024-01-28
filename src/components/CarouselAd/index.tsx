import Image from "next/image"
import BackgroundScreen from "../utils/BackgroudScreen"

interface CarouselAdProps {
    className?: string;
}

const CarouselAd = ({ className }: CarouselAdProps = {}) => {
    return (
        <section className={`hidden order-2 w-full h-[196px] my-6 sm:flex ${className}`}>
            <BackgroundScreen color="#F7DDD0" height="196px" />
            <svg width="40" height="40" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="my-auto mr-14 rotate-180"
                aria-label="seta para esquerda"
                role="button"
            >
                <g id="Icon/arrow/right">
                    <path id="Vector 175" d="M6.6665 5.60547L9.33317 8.9388L6.6665 12.2721" stroke="#434343" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>


            <div className="flex mx-16 gap-10 items-center mx-auto">
                <div className="flex flex-col gap-2 justify-center">
                    <h2 className="uppercase font-bold text-[#465D6B] text-lg">MagSafe</h2>
                    <p className="text-[#555] text-sm">Snap on a magnetic case, wallet, or both. And get faster wireless charging.</p>
                </div>
                <Image
                    src={"/images/cardExplore/iPhone.png"}
                    alt=""
                    width={500}
                    height={500}
                    className="w-[50%] max-h-[150px] h-fit object-cover lg:self-end"
                    loading="lazy"
                />
            </div>

            <svg width="40" height="40" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="my-auto ml-14"
                aria-label="seta para direita"
                role="button"
            >
                <g id="Icon/arrow/right">
                    <path id="Vector 175" d="M6.6665 5.60547L9.33317 8.9388L6.6665 12.2721" stroke="#434343" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>
        </section>
    )
}

export default CarouselAd