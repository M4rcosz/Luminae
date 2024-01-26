import Star from "@components/SVG/Star";
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
        <li className="flex flex-col gap-5 py-3 last:mr-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)] rounded-lg sm:last:mr-0 sm:px-3 sm:py-8 lg:px-0 lg:py-4 lg:flex-1 lg:justify-center xl:px-3 xl:py-8 cursor-pointer hover:scale-105 ease-in-out duration-200">
            <div className="text-center">
                <h4 className="text-[#555] font-extrabold text-sm uppercase xl:text-xl">
                    Deal of the Day
                </h4>

                <div className="flex justify-center gap-2">
                    <span className="flex flex-col text-xs text-[#555] xl:text-sm">
                        <strong className="text-lg font-extrabold text-[#111] xl:text-2xl">12</strong>
                        hour
                    </span>

                    <span className="text-2xl text-[#555]">:</span>

                    <span className="flex flex-col text-xs text-[#555] xl:text-sm">
                        <strong className="text-lg font-extrabold text-[#111] xl:text-2xl">43</strong>
                        min
                    </span>

                    <span className="text-2xl text-[#555]">:</span>

                    <span className="flex flex-col text-xs text-[#555] xl:text-sm">
                        <strong className="text-lg font-extrabold text-[#111] xl:text-2xl">12</strong>
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

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:items-start">
                    <h5 className="text-base font-bold text-[#262626] xl:text-2xl">
                        {productName}
                    </h5>

                    <p className="text-xs font-normal text-[#434343] xl:text-base">
                        {productDescription}
                    </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between lg:flex-col">
                    <div className="flex w-[45%] items-center lg:w-full">
                        <Star className="w-2.5 h-2.5 lg:w-5 lg:h-5" />
                        <Star className="w-2.5 h-2.5 lg:w-5 lg:h-5" />
                        <Star className="w-2.5 h-2.5 lg:w-5 lg:h-5" />
                        <Star className="w-2.5 h-2.5 lg:w-5 lg:h-5" />
                        <strong className="ml-1 text-xs text-[#434343] lg:text-sm xl:text-base">({evaluationNumber})</strong>
                    </div>
                    <div className="flex gap-4 items-center">
                        <strong className="text-sm text-notifications lg:text-base xl:text-lg">
                            ${discountPrice}
                        </strong>
                        <strong className="text-2xs line-through text-[#434343] self-end lg:text-xs xl:text-sm">
                            ${price}
                        </strong>
                        <strong
                            className="text-3xs px-1.5 py-0.75 rounded-sm text-whiteText bg-notifications lg:text-xs xl:text-sm xl:ml-auto">
                            -{discount}%
                        </strong>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default FlashSalesCard