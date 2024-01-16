import styled from "@emotion/styled";

const BgImageTemplate = styled.div<{ image: string }>`
background-image: url(${props => props.image});
`

export default BgImageTemplate