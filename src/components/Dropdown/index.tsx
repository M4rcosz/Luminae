interface DropdownProps {
    className?: string;
}

const Dropdown = ({ className }: DropdownProps) => {
    return (
        <div className={`whitespace-nowrap text-xs my-auto flex items-center sm:text-sm lg:text-base ${className}`} role="listbox">
            All Categories
            <svg width="20" height="20" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="lg:w-6 lg:h-6 lg:ml-1"
            >
                <path d="M12.25 22.4L21 31.15L29.75 22.4" stroke="#434343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    )
}

export default Dropdown