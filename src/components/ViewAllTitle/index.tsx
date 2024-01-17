import Link from "next/link"
import { styledLink1 } from "@/common/styles/StyledLink"
import { theme } from "@/components/ThemeProviderComp"
import Typography from "@/components/Typography"


interface ViewAllTitleProps {
    title: string
    urlPath?: string
}

const ViewAllTitle = ({ title, urlPath = "#" }: ViewAllTitleProps) => {
    return (
        <div className="flex mx-5 mb-4 items-center">
            <Typography
                componente="h3"
                color={theme.colors.base.b900}
                className="text-xl font-semibold"
            >
                {title}
            </Typography>
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