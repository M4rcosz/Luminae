import styled from "@emotion/styled"

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    src?: string;
}

const StyledButton = styled.button<{
    src?: string;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
&:before{
    content: url(${props => props.src});
}
`

const Button = ({ children, className, src }: ButtonProps) => {
    return (
        <StyledButton className={className} src={src}>
            {children}
        </StyledButton>
    )
}

export default Button