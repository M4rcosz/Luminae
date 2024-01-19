import styled from "@emotion/styled"

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    src?: string;
    ariaLabel?: string;
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

const Button = ({ children, className, src, ariaLabel }: ButtonProps) => {
    return (
        <StyledButton className={className} src={src} aria-label={ariaLabel}>
            {children}
        </StyledButton>
    )
}

export default Button