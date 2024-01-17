import BgImageTemplate from "../BgImageTemplate"
import Button from "../Button"

const Banner = () => {
    return (
        <article>
            <BgImageTemplate src="/images/ilustrations/leftBanner.png" className="w-full h-[75vw] bg-cover " />
            <div className="bg-[#81A9EA] flex flex-col px-5 py-8 items-center gap-4">
                <h3 className="uppercase font-bold text-whiteText text-xl text-center">Kimonos, Caftans & Pareos</h3>
                <span className="flex flex-col gap-1 items-center">
                    <p className="text-whiteText">Poolside glam included</p>
                    <p className="text-whiteText">From $4.99</p>
                </span>
                <Button className="bg-[#4172DC] text-whiteText w-fit py-2 px-8 rounded before:translate-y-[10%] uppercase text-whiteText before:pr-2" src="/images/icons/shopIcon1.png">Shop Now</Button>
            </div>
        </article>
    )
}

export default Banner