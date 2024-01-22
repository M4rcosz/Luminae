import Image from "next/image"
import Button from "../Button"

const PresentationAd = () => {
    return (
        <article>
            <Image
                src="/images/ilustrations/leftBanner.png"
                alt=""
                width={300}
                height={400}
                className="w-full h-[80vw] object-cover"
                priority
            />
            <div className="flex flex-col bg-[#27549c] px-5 py-3 items-center gap-4">
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