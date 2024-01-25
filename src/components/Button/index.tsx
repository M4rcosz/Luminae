interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    Icon?: React.ReactNode;
    ariaLabel?: string;
    type?: "none" | "iconLeft"
}

const Button = ({ children, className, Icon, ariaLabel, type = "none" }: ButtonProps) => {

    const buttonStyles = "flex justify-center items-center";

    if (type === "iconLeft") {
        return (
            <button className={`${buttonStyles} ${className}`} aria-label={ariaLabel}>
                {Icon}
                {children}
            </button>
        )
    }
    return (
        <button className={`${buttonStyles} ${className}`} aria-label={ariaLabel}>
            {children}
        </button>
    )
}

export default Button