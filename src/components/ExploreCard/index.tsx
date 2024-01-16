'use client'

import styled from "@emotion/styled"
import Typography from "@/components/Typography"

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
                <Typography
                    componente="h2"
                    lineHeight="30px"
                    className="font-extrabold text-base"

                >
                    {title}
                </Typography>

                <Typography
                    componente="p"
                    lineHeight="30px"
                    className="text-sm"

                >
                    {description}
                </Typography>
                <AnchorExploreCard href={link}>{anchorText}</AnchorExploreCard>
            </div>
            <img src={cardImage} alt="" className="w-1/2" />
        </div>
    )
}

export default ExploreCard