import Star from "@/components/SVG/Star";
import Image from "next/image";

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
        <li className="flex flex-col gap-5 py-3 last:mr-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)] rounded-lg sm:last:mr-0 sm:px-3 sm:py-8 sm:min-w-1/2 sm:max-h-[380px] sm:flex-1">
            <div className="text-center">
                <h4 className="text-[#555] font-extrabold text-sm uppercase">
                    Deal of the Day
                </h4>

                <div className="flex justify-center gap-2">
                    <span className="flex flex-col text-xs text-[#555]">
                        <strong className="text-lg font-extrabold text-[#111]">12</strong>
                        hour
                    </span>

                    <span className="text-2xl text-md text-[#555]">:</span>

                    <span className="flex flex-col text-xs text-[#555]">
                        <strong className="text-lg font-extrabold text-[#111]">43</strong>
                        min
                    </span>

                    <span className="text-2xl text-md text-[#555]">:</span>

                    <span className="flex flex-col text-xs text-[#555]">
                        <strong className="text-lg font-extrabold text-[#111]">12</strong>
                        sec
                    </span>
                </div>
            </div>

            <Image
                src={imageProduct}
                alt=""
                width={135}
                height={100}
                className="w-full h-fit object-cover"
                loading="lazy"
            />

            <div className="flex flex-col gap-1.5 px-3">

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center">
                    <h5 className="text-base font-bold text-[#262626]">
                        {productName}
                    </h5>

                    <p className="text-xs font-normal text-[#434343]">
                        {productDescription}
                    </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                    <div className="flex w-[45%] items-center">
                        <Star className="w-2.5 h-2.5" />
                        <Star className="w-2.5 h-2.5" />
                        <Star className="w-2.5 h-2.5" />
                        <Star className="w-2.5 h-2.5" />
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
            </div>
        </li>
    )
}

export default FlashSalesCard