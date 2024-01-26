
import Link from "next/link"
import Image from "next/image"

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
        <li className="last:mr-5 sm:last:mr-0 sm:flex sm:flex-col sm:flex-1 sm:min-w-full">
            <div className="h-60 w-[280px] relative sm:w-full sm:h-fit cursor-default">
                <Image
                    src={image}
                    alt=""
                    width={500}
                    height={500}
                    quality={100}
                    className="w-full h-full rounded-t-lg object-cover object-top"
                    loading="lazy"
                />
                {newArivals
                    &&
                    <span
                        className="flex items-center  bg-[#00662F] text-whiteText text-2xs py-0.75 px-1.5 gap-1.5 rounded absolute top-2.5 left-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 42 43" fill="none">
                            <path d="M17.4522 33.2936C17.9115 34.9805 16.8943 36.7145 15.1803 37.1665C13.4663 37.6185 11.7045 36.6174 11.2452 34.9305C10.7859 33.2435 11.8031 31.5096 13.5171 31.0575M17.4522 33.2936C16.9929 31.6066 15.2311 30.6055 13.5171 31.0575M17.4522 33.2936L37.625 27.9737M13.5171 31.0575L8.11184 11.2034C7.65257 9.51651 5.89077 8.5154 4.17675 8.96742L2.625 9.37664M21.7732 12.5114L24.8767 11.6929M20.8601 27.4842L33.2741 24.2104C34.9881 23.7584 36.0053 22.0244 35.546 20.3375L32.2197 8.11959C31.7604 6.43265 29.9986 5.43155 28.2846 5.88356L15.8706 9.15734C14.1566 9.60935 13.1394 11.3433 13.5987 13.0303L16.925 25.2482C17.3843 26.9351 19.1461 27.9362 20.8601 27.4842Z" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        New Arivals
                    </span>}
            </div>

            <footer className="flex rounded-b-lg h-fit p-4 gap-3 items-center justify-between h-32 bg-[#262626] lg:flex-col lg:items-start lg:p-5 ">
                <div className="flex flex-col gap-1">
                    <h4 className="text-sm max-[380px]:text-xs text-whiteText xl:text-2xl cursor-pointer  hover:text-[#eeea] ease-in-out duration-200">
                        {title}
                    </h4>
                    <p className="text-sm max-[380px]:text-xs text-grayText xl:text-base">
                        {description}
                    </p>
                </div>
                <Link
                    href="#"
                    className="text-white border-[#D9D9D9] py-3 px-6 whitespace-nowrap border flex items-center rounded-lg h-fit max-[380px]:px-4 lg:self-end  hover:bg-[#ddd] hover:text-black hover:font-bold hover:border-[#ffffff0] ease-in-out duration-300"
                    role="button"
                >
                    ${shopNowValue} Shop Now
                </Link>
            </footer>
        </li>
    )
}

export default TrendingMustHavesCard