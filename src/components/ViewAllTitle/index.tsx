import Link from "next/link"

interface ViewAllTitleProps {
    title: string
    urlPath?: string
}

const ViewAllTitle = ({ title, urlPath = "#" }: ViewAllTitleProps) => {
    return (
        <div className="flex  mb-4 items-center">
            <h3 className="text-xl font-semibold">
                {title}
            </h3>
            <Link
                href={urlPath}
                className="ml-auto text-xs"
            // css={styledLink1}
            >
                {`View all >`}
            </Link>
        </div>
    )
}

export default ViewAllTitle