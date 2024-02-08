import { formatPrice } from "@/lib/utils/formatPrice";

interface PricesRowProps {
    price: number | null;
    discount?: number | undefined;
}

const PricesRow = ({ price, discount }: PricesRowProps) =>
    <div className="flex gap-4 items-center">
        <strong className="text-sm text-notifications min-w-[60px] lg:text-base xl:text-lg">
            {formatPrice(price)}
        </strong>

        {discount && <div className="flex gap-4 items-center">
            <strong className="text-2xs line-through text-[#434343] self-end min-w-[45px] lg:text-xs xl:text-sm">
                ${price}
            </strong>
            <strong
                className="text-3xs px-1.5 py-0.75 ml-auto rounded-sm text-whiteText bg-notifications min-w-[40px] text-center lg:text-xs xl:text-sm xl:ml-auto">
                -{discount}%
            </strong>
        </div>}
    </div>

export default PricesRow