interface ContainerListProps {
    children?: React.ReactNode;
    className?: string;
}

const ContainerList = ({ children, className }: ContainerListProps) => {
    return (
        <ul className={`flex overflow-scroll gap-4 w-screen relative right-5 pl-5 pb-3 sm:flex-wrap sm:static sm:pl-0 sm:w-full ${className}`}>
            {children}
        </ul>
    )
}

export default ContainerList