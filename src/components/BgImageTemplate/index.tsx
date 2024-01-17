import styled from "@emotion/styled";

const BgImageTemplate = styled.div<{ src: string, size?: "cover" | "contain" }>`
background-image: url(${props => props.src});
background-size: ${props => props.size ? props.size : ""};
background-repeat: no-repeat;
background-position: center;
`

export default BgImageTemplate