import Image from "next/image"
import Button from "../Button"
import { containerFullScreenBg, style } from "@/common/styles/containerPadX"

const PresentationAd = () => {
    return (
        <article className={`${style(containerFullScreenBg)} sm:flex`}>
            <Image
                src="/images/ilustrations/leftBanner.png"
                alt=""
                width={300}
                height={400}
                className="w-full h-[80vw] object-cover sm:w-1/2 sm:h-full"
                priority
            />

            <aside className="hidden md:flex flex-col items-center absolute top-1/2 left-1/2 translate-y-[-30%] translate-x-[-60%] z-10">
                <div className="flex flex-col items-center gap-1 p-5 bg-[#eee] justify-center">
                    <h2 className="font-bold">Summer Essentials</h2>
                    <strong className="text-notifications">20% off</strong>
                </div>
                <div className="bg-[#222] w-full">
                    <p className="text-whiteText text-sm text-center py-2">19 Jul-30 Jul</p>
                </div>
            </aside>

            <div className="flex flex-col bg-[#27549c] px-5 py-5 items-center gap-4 sm:justify-center sm:w-1/2">
                <h2 className="uppercase font-bold text-whiteText text-xl text-center">Kimonos, Caftans & Pareos</h2>
                <span className="flex flex-col gap-1 items-center">
                    <p className="text-whiteText">Poolside glam included</p>
                    <p className="text-whiteText">From $4.99</p>
                </span>
                <Button className="bg-[#002574] text-whiteText w-fit py-2 px-8 rounded before:translate-y-[10%] uppercase text-whiteText before:pr-2 w-fit" src="/images/icons/shopIcon1.png">Shop Now</Button>
            </div>
        </article>
    )
}

export default PresentationAd