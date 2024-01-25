import Link from "next/link"

interface ViewAllTitleProps {
    title: string
    urlPath?: string
}

const ViewAllTitle = ({ title, urlPath = "#" }: ViewAllTitleProps) => {
    return (
        <div className="flex mb-4 items-center">
            <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                {title}
            </h3>
            <Link
                href={urlPath}
                className="ml-auto text-xs md:text-sm lg:text-base"
            // css={styledLink1}
            >
                {`View all >`}
            </Link>
        </div>
    )
}

export default ViewAllTitle