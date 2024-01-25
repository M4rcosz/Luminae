import Image from "next/image"
import Button from "@components/Button"

const PresentationAd = () => {
    return (
        <article className="w-full sm:flex max-w-[1320px] mx-auto">
            <div className="w-full h-fit lg:max-w-[547px] relative">
                <Image
                    src="/images/ilustrations/leftBanner.png"
                    alt=""
                    width={300}
                    height={400}
                    quality={100}
                    className="w-full object-cover lg:max-w-[547px]"
                    priority
                />

                <aside className="hidden md:flex flex-col items-center absolute top-1/2 right-0 translate-x-1/3 translate-y-[-30%] z-10">
                    <div className="flex flex-col items-center gap-1 p-5 bg-[#eee] justify-center">
                        <h2 className="font-bold">Summer Essentials</h2>
                        <strong className="text-notifications">20% off</strong>
                    </div>
                    <div className="bg-[#222] w-full">
                        <p className="text-whiteText text-sm text-center py-2">19 Jul-30 Jul</p>
                    </div>
                </aside>
            </div>

            <div className="flex flex-col  items-center justify-center text-whiteText w-full py-5 px-3 gap-4  bg-[#27549c] lg:gap-10 ">
                <h2 className="uppercase font-bold text-xl text-center lg:text-[30px]">Kimonos, Caftans & Pareos</h2>
                <span className="flex flex-col gap-1 items-center  lg:text-[24px]">
                    <p>Poolside glam included</p>
                    <p>From $4.99</p>
                </span>
                <Button
                    className="bg-[#002574] w-fit py-2 px-8 rounded before:translate-y-[10%] uppercase before:pr-2 lg:text-[24px] lg:py-4 lg:px-12"
                    type="iconLeft"
                    Icon={<Image src="/images/icons/shopIcon1.png" alt="" width={20} height={16} quality={100}
                        priority className="relative right-2 lg:w-8 lg:h-7 lg:right-4" />}>
                    Shop Now
                </Button>
            </div>
        </article>
    )
}

export default PresentationAd