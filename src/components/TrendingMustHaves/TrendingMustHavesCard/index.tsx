
import Link from "next/link"
import StyledImageProduct from "@/components/BgImageTemplate"
import { theme } from "@/components/ThemeProviderComp"
import Typography from "@/components/Typography"

interface TrendingMustHavesCardProps {
    newArivals: boolean
    image: string
    title: string
    description: string
    shopNowValue: number
}

const TrendingMustHavesCard = ({
    newArivals = false,
    image,
    title,
    description,
    shopNowValue
}: TrendingMustHavesCardProps) => {
    return (
        <>
            <StyledImageProduct
                image={image}
                className="h-80 bg-center bg-cover bg-no-repeat rounded-t-lg w-[87.5vw]"
            >
                {newArivals && <span
                    className="flex items-center text-2xs w-fit py-0.75 px-1.5 gap-1.5 rounded relative top-2.5 left-2.5"
                    style={{ color: theme.colors.base.b000, backgroundColor: theme.colors.secondary.s600 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 42 43" fill="none">
                        <path d="M17.4522 33.2936C17.9115 34.9805 16.8943 36.7145 15.1803 37.1665C13.4663 37.6185 11.7045 36.6174 11.2452 34.9305C10.7859 33.2435 11.8031 31.5096 13.5171 31.0575M17.4522 33.2936C16.9929 31.6066 15.2311 30.6055 13.5171 31.0575M17.4522 33.2936L37.625 27.9737M13.5171 31.0575L8.11184 11.2034C7.65257 9.51651 5.89077 8.5154 4.17675 8.96742L2.625 9.37664M21.7732 12.5114L24.8767 11.6929M20.8601 27.4842L33.2741 24.2104C34.9881 23.7584 36.0053 22.0244 35.546 20.3375L32.2197 8.11959C31.7604 6.43265 29.9986 5.43155 28.2846 5.88356L15.8706 9.15734C14.1566 9.60935 13.1394 11.3433 13.5987 13.0303L16.925 25.2482C17.3843 26.9351 19.1461 27.9362 20.8601 27.4842Z" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    New Arivals
                </span>}
            </StyledImageProduct>

            <footer
                style={{ backgroundColor: theme.colors.base.b800 }}
                className="flex rounded-b-lg p-4 gap-3 items-center justify-between h-32 "
            >
                <div>
                    <Typography
                        componente="h5"
                        color={theme.colors.base.b000}
                        className="text-sm max-[380px]:text-xs"
                    >
                        {title}
                    </Typography>

                    <Typography
                        componente="span"
                        color={theme.colors.base.b300}
                        className="text-sm max-[380px]:text-xs  "
                    >
                        {description}
                    </Typography>
                </div>
                <Link
                    href="#"
                    className="py-3 px-6 whitespace-nowrap border flex items-center rounded-lg h-fit max-[380px]:px-4"
                    style={{ borderColor: theme.colors.base.b200, color: theme.colors.base.b000 }}
                >
                    ${shopNowValue} Shop Now
                </Link>
            </footer>
        </>
    )
}

export default TrendingMustHavesCard