import styled from "@emotion/styled"

interface ExploreCardProps {
    title: string,
    description: string,
    link: string,
    anchorText: string,
    cardColor: string,
    cardImage: string
}

// REFACT
const AnchorExploreCard = styled.a`
color: ${props => props.theme.colors.base.b000};
font-size: 12px;
line-height: 30px; /* 200% */
text-decoration-line: underline;
`

const ExploreCard = ({ title, description, link = "#", anchorText, cardColor, cardImage }: ExploreCardProps) => {
    return (
        <div className="flex">
            <div
                style={{ backgroundColor: cardColor }}
                className="px-3 py-4 flex flex-col justify-center"
            >
                <h2 className="leading-7 font-extrabold text-base text-whiteText">
                    {title}
                </h2>

                <p className="leading-7 text-sm text-whiteText">
                    {description}
                </p>

                <AnchorExploreCard href={link}>{anchorText}</AnchorExploreCard>
            </div>
            <img src={cardImage} alt="" className="w-1/2" />
        </div>
    )
}

export default ExploreCard