import StarGrades from "@/components/utils/StarGrades";
import { discountPriceFunction } from "@common/utils/priceWithoutDiscount";
import Image from "next/image";

interface Top100CardProps {
    src: string;
    productName: string;
    productCategories: string;
    productPrice: number;
    productDiscountPercent: number;
    productReviewsAmount: number;
    grade: number
}

const Top100Card = (
    {
        src,
        productName,
        productCategories,
        productPrice,
        productDiscountPercent,
        productReviewsAmount,
        grade
    }: Top100CardProps) => {


    return (
        <li className="flex flex-col justify-center last:mr-5 shadow-[0_4px_18px_-10px_#7e7e7e] rounded-lg min-w-60 sm:last:mr-0 lg:min-w-0">
            <Image
                src={src}
                alt=""
                width={500}
                height={500}
                quality={100}
                className="w-full h-full rounded-t-lg object-cover object-top"
                loading="lazy"
            />
            <footer className="flex flex-col gap-2 px-3 py-2 lg:py-5 lg:px-4 lg:justify-center">
                <div className="flex justify-between items-center ">
                    <div className="lg:max-w-[80%]">
                        <h4 className="w-fit text-[#262626] text-sm font-bold xl:text-xl cursor-pointer  hover:text-[#000a] ease-in-out duration-200">{productName}</h4>
                        <p className="text-2xs truncate hover:text-clip hover:whitespace-normal lg:hover:whitespace-nowrap lg:hover:overflow-visible xl:text-base"
                        >{productCategories}</p>
                    </div>

                    <svg width="20" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="lg:w-6 lg:h-6 cursor-pointer hover:fill-[#ddd]"
                    >
                        <path id="Vector" d="M11.6851 2.73538L11 3.47924L10.315 2.73539C8.18404 0.421557 4.72912 0.421554 2.5982 2.73539C0.5245 4.98709 0.460783 8.6159 2.45393 10.9518L8.18026 17.6628C9.70154 19.4457 12.2984 19.4457 13.8197 17.6628L19.5461 10.9518C21.5392 8.61587 21.4755 4.98707 19.4018 2.73537C17.2709 0.42154 13.816 0.421543 11.6851 2.73538Z" stroke="#28303F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
                <div className="flex items-center">
                    <StarGrades grade={grade} className="w-5 h-5 xl:w-6 xl:h-6" />

                    <strong className="ml-1 text-xs text-[#434343] xl:text-base">({productReviewsAmount})</strong>
                </div>
                <div className="flex gap-3 items-center">
                    <strong className="text-sm text-notifications xl:text-lg">${discountPriceFunction(productPrice, productDiscountPercent)}</strong>
                    <span className="text-2xs line-through text-[#434343] xl:text-sm">${productPrice}</span>
                    <span className="text-2xs text-notifications xl:text-lg">-{productDiscountPercent}%</span>
                </div>
            </footer>
        </li>

    )
}

export default Top100Card