import Typography from "@/components/Typography"
import { theme } from "@/components/ThemeProviderComp"

import StyledImageProduct from "@/components/BgImageTemplate";

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
        <>
            <div className="text-center">
                <Typography
                    componente="h4"
                    color={theme.colors.base.b400}
                    className="font-extrabold text-sm uppercase"
                >
                    Deal of the Day
                </Typography>

                <div className="flex justify-center gap-2">
                    <span className="flex flex-col text-xs" style={{ color: theme.colors.base.b400 }}>
                        <strong className="text-lg font-extrabold" style={{ color: theme.colors.base.b800 }}>12</strong>
                        hour
                    </span>

                    <span className="flex flex-col text-xs" style={{ color: theme.colors.base.b400 }}>:</span>

                    <span className="flex flex-col text-xs" style={{ color: theme.colors.base.b400 }}>
                        <strong className="text-lg font-extrabold" style={{ color: theme.colors.base.b800 }}>43</strong>
                        min
                    </span>

                    <span className="flex flex-col text-xs" style={{ color: theme.colors.base.b400 }}>:</span>

                    <span className="flex flex-col text-xs" style={{ color: theme.colors.base.b400 }}>
                        <strong className="text-lg font-extrabold" style={{ color: theme.colors.base.b800 }}>12</strong>
                        sec
                    </span>
                </div>
            </div>

            <StyledImageProduct className="w-full h-44 bg-[length:135px_auto] bg-no-repeat bg-center" image={imageProduct}></StyledImageProduct>

            <div className="flex flex-col gap-1.5 px-3">
                <Typography
                    componente="h5"
                    color={theme.colors.base.b800}
                    className="text-base font-bold"
                >
                    {productName}
                </Typography>

                <Typography
                    componente="span"
                    color={theme.colors.base.b700}
                    className="text-xs font-normal"

                >
                    {productDescription}
                </Typography>

                <div className="flex w-[45%] items-center">
                    <span><img src="/images/icons/Star.svg" alt="" /></span>
                    <span><img src="/images/icons/Star.svg" alt="" /></span>
                    <span><img src="/images/icons/Star.svg" alt="" /></span>
                    <span><img src="/images/icons/Star.svg" alt="" /></span>
                    <strong className="ml-1 text-xs" style={{ color: theme.colors.base.b700 }}>({evaluationNumber})</strong>
                </div>
                <div className="flex gap-4 items-center">
                    <strong className="text-sm" style={{ color: theme.colors.notifications }} >${discountPrice}</strong>
                    <strong
                        className="text-xs line-through"
                        style={{ color: theme.colors.base.b700 }}
                    >
                        ${price}
                    </strong>
                    <strong
                        className="text-3xs px-1.5 py-0.75 rounded-sm"
                        style={{
                            color: theme.colors.base.b000,
                            backgroundColor: theme.colors.notifications
                        }}
                    >
                        -{discount}%
                    </strong>
                </div>
            </div>
        </>
    )
}

export default FlashSalesCard