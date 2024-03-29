import { discountPriceFunction } from "@/common/utils/priceWithoutDiscount";
import StarGrades from "@/components/utils/StarGrades";
import Image from "next/image";
import Timer from "@components/FlashSales/Timer";

interface flashSalesCardProps {
    productImage: string;
    productName: string;
    productDescription: string;
    productPrice: number;
    productDiscount: number;
    productReviews: number;
    productGrade: number;
}

const FlashSalesCard = (
    {
        productImage,
        productName,
        productDescription,
        productPrice,
        productDiscount,
        productReviews,
        productGrade
    }: flashSalesCardProps) => {
    return (
        <li className="flex flex-col gap-5 py-3 last:mr-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)] rounded-lg sm:last:mr-0 sm:px-3 sm:py-8 lg:px-0 lg:py-4 lg:flex-1 lg:justify-center xl:px-3 xl:py-8 cursor-pointer hover:scale-105 ease-in-out duration-200">
            <div className="text-center">
                <strong className="text-[#555] font-extrabold text-sm uppercase xl:text-xl">
                    Deal of the Day
                </strong>

                <Timer />
            </div>

            <Image
                src={productImage}
                alt=""
                width={135}
                height={100}
                className="w-full h-fit object-cover"
                loading="lazy"
            />

            <div className="flex flex-col gap-1.5 px-3">

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:items-start">
                    <h3 className="text-base font-bold text-[#262626] xl:text-2xl">
                        {productName}
                    </h3>

                    <p className="text-xs font-normal text-[#434343] xl:text-base">
                        {productDescription}
                    </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between lg:flex-col">
                    <div className="flex items-center lg:w-full">
                        <StarGrades grade={productGrade} className="w-3 h-3 lg:w-5 lg:h-5" />

                        <strong className="ml-1 text-xs text-[#434343] lg:text-sm xl:text-base">({productReviews})</strong>
                    </div>
                    <div className="flex gap-4 items-center">
                        <strong className="text-sm text-notifications lg:text-base xl:text-lg">
                            ${discountPriceFunction(productPrice, productDiscount)}
                        </strong>
                        <strong className="text-2xs line-through text-[#434343] self-end lg:text-xs xl:text-sm">
                            ${productPrice}
                        </strong>
                        <strong
                            className="text-3xs px-1.5 py-0.75 ml-auto rounded-sm text-whiteText bg-notifications lg:text-xs xl:text-sm xl:ml-auto">
                            -{productDiscount}%
                        </strong>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default FlashSalesCard