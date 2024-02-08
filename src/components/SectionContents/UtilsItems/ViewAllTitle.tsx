import Link from "next/link"

interface ViewAllTitleProps {
    title: string
    urlPath?: string
}

const ViewAllTitle = ({ title, urlPath = "#" }: ViewAllTitleProps) => {
    return (
        <div className="flex mb-4 items-center">
            <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                {title}
            </h2>
            <Link
                href={urlPath}
                className="flex items-center ml-auto text-xs md:text-sm lg:text-base font-semibold hover:text-[#000a] group"
            // css={styledLink1}
            >
                View all

                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="relative group-hover:translate-x-1.5 ease-in-out duration-200"
                >
                    <g id="Icon/arrow/right">
                        <path id="Vector 175" d="M6.6665 5.60547L9.33317 8.9388L6.6665 12.2721" stroke="#434343" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>

            </Link>
        </div>
    )
}

export default ViewAllTitle