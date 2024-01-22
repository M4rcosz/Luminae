import styled from "@emotion/styled"

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    src?: string;
    ariaLabel?: string;
    type?: "none" | "icon"
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

const Button = ({ children, className, src, ariaLabel, type = "none" }: ButtonProps) => {
    if (type === "icon") {
        return (
            <StyledButton className={`before:w-5 before:h-4 ${className}`} aria-label={ariaLabel} src={src}>
                {children}
            </StyledButton>
        )
    }
    return (
        <StyledButton className={className} aria-label={ariaLabel} src={src}>
            {children}
        </StyledButton>
    )
}

export default Button