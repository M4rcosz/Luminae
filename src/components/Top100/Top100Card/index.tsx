import { discountPriceFunction } from "@/common/utils/priceWithoutDiscount";
import BgImageTemplate from "@/components/BgImageTemplate";
import Button from "@/components/Button";
import Star from "@/components/SVG/Star";

interface Top100CardProps {
    src: string;
    productName: string;
    productCategories: string;
    productPrice: number;
    productDiscountPercent: number;
    productReviewsAmount: number;
}

const Top100Card = (
    {
        src,
        productName,
        productCategories,
        productPrice,
        productDiscountPercent,
        productReviewsAmount
    }: Top100CardProps) => {


    const priceWithoutDiscount = discountPriceFunction(productPrice, productDiscountPercent);

    return (

        <article className="min-w-60 ">
            <BgImageTemplate
                src={src}
                className="w-full h-64 bg-cover bg-center rounded-t-lg"
            >
            </BgImageTemplate>
            <footer className="flex flex-col gap-2 px-3 py-2">
                <div className="flex justify-between items-center">
                    <div>
                        <h4 className="text-[#262626] text-sm font-bold">{productName}</h4>
                        <p className="text-2xs">{productCategories}</p>
                    </div>
                    <Button
                        ariaLabel="Favorite Icon"
                        src="/images/icons/heartIcon.png"
                        className="before:w-5 before:h-5 h-5 before:relative scale-90"
                    >
                    </Button>
                </div>
                <div className="flex items-center">
                    <Star className="w-5 h-5" />
                    <Star className="w-5 h-5" />
                    <Star className="w-5 h-5" />
                    <Star className="w-5 h-5" />
                    <Star className="w-5 h-5" />

                    <strong className="ml-1 text-xs text-[#434343]">({productReviewsAmount})</strong>
                </div>
                <div className="flex gap-3 items-center">
                    <strong className="text-sm text-notifications">${productPrice}</strong>
                    <span className="text-2xs line-through text-[#434343]">${priceWithoutDiscount.toFixed(2)}</span>
                    <span className="text-2xs text-notifications">-{productDiscountPercent}%</span>
                </div>
            </footer>
        </article>
    )
}

export default Top100Card