import { theme } from "@/components/ThemeProviderComp"

import BgImageTemplate from "@/components/BgImageTemplate";

interface FlashSalesCardProps {
    imageProduct: string,
    discountLeft: string,
    productName: string,
    productDescription: string,
    evaluationNumber: number,
    price: number,
    discountPrice: number,
    discount: number
}

// Implementar o time conter

const FlashSalesCard = ({
    imageProduct,
    discountLeft,
    productName,
    productDescription,
    evaluationNumber,
    price,
    discountPrice,
    discount, }: FlashSalesCardProps) => {
    return (
        <article>
            <div className="text-center">
                <h4 className="text-veryGrayText font-extrabold text-sm uppercase">
                    Deal of the Day
                </h4>

                <div className="flex justify-center gap-2">
                    <span className="flex flex-col text-xs text-[#9D9D9D]">
                        <strong className="text-lg font-extrabold text-[#262626]">12</strong>
                        hour
                    </span>

                    <span className="text-2xl text-xs text-[#9D9D9D]">:</span>

                    <span className="flex flex-col text-xs text-[#9D9D9D]">
                        <strong className="text-lg font-extrabold text-[#262626]">43</strong>
                        min
                    </span>

                    <span className="text-2xl text-xs text-[#9D9D9D]">:</span>

                    <span className="flex flex-col text-xs text-[#9D9D9D]">
                        <strong className="text-lg font-extrabold text-[#262626]">12</strong>
                        sec
                    </span>
                </div>
            </div>

            <BgImageTemplate className="w-full h-44 bg-[length:135px_auto]" src={imageProduct}></BgImageTemplate>

            <div className="flex flex-col gap-1.5 px-3">

                <h5 className="text-base font-bold text-[#262626]">
                    {productName}
                </h5>

                <p className="text-xs font-normal text-[#434343]">
                    {productDescription}
                </p>

                <div className="flex w-[45%] items-center">
                    <span><img src="/images/icons/Star.svg" alt="" /></span>
                    <span><img src="/images/icons/Star.svg" alt="" /></span>
                    <span><img src="/images/icons/Star.svg" alt="" /></span>
                    <span><img src="/images/icons/Star.svg" alt="" /></span>
                    <strong className="ml-1 text-xs text-[#434343]">({evaluationNumber})</strong>
                </div>
                <div className="flex gap-4 items-center">
                    <strong className="text-sm text-notifications">
                        ${discountPrice}
                    </strong>
                    <strong className="text-2xs line-through text-[#434343]">
                        ${price}
                    </strong>
                    <strong
                        className="text-3xs px-1.5 py-0.75 rounded-sm text-whiteText bg-notifications">
                        -{discount}%
                    </strong>
                </div>
            </div>
        </article>
    )
}

export default FlashSalesCard