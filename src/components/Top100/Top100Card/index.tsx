import BgImageTemplate from "@/components/BgImageTemplate";

interface Top100CardProps {
    src: string;
}

const Top100Card = ({ src }: Top100CardProps) => {
    return (
        <article>
            <BgImageTemplate
                src={src}
            >

            </BgImageTemplate>

        </article>
    )
}

export default Top100Card