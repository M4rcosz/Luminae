import { containerFullScreenBg, containerPadX, style } from "@/common/styles/containerPadX"
import Image from "next/image"

const CarouselAd = () => {
    return (
        <section className={`${style(containerPadX, containerFullScreenBg)} hidden bg-[#F7DDD0] sm:flex order-2 py-10 my-6`}>
            <Image
                src={"/images/icons/arrowX.svg"}
                alt=""
                width={40}
                height={40}
                role="button"
                className="h-fit w-fit my-auto scale-125 rotate-180"
                loading="lazy"
                aria-label="seta para esquerda"
            />
            <div className="flex mx-16 gap-10">
                <div>
                    <h3 className="uppercase font-bold text-[#465D6B] text-lg">MagSafe</h3>
                    <p className="text-[#555] text-sm">Snap on a magnetic case, wallet, or both. And get faster wireless charging.</p>
                </div>
                <Image
                    src={"/images/cardExplore/iPhone.png"}
                    alt=""
                    width={500}
                    height={500}
                    className="w-[50%] object-cover"
                    loading="lazy"
                />
            </div>

            <Image
                src={"/images/icons/arrowX.svg"}
                alt=""
                width={40}
                height={40}
                role="button"
                className="h-fit w-fit my-auto scale-125"
                loading="lazy"
                aria-label="seta para direita"
            />
        </section>
    )
}

export default CarouselAd