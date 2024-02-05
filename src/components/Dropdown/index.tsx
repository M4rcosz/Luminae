"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { store } from "@/store";
import { setCategorySelected } from "@/store/reducer/Searching";
import { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";

interface DropdownProps {
    className?: string;
    categories: string[];
}

const Dropdown = (props: DropdownProps) => <Provider store={store}><DropdownContent {...props} /></Provider>

const DropdownContent = ({ className, categories }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();

    const categorySelected = useAppSelector(state => state.searchingTasks.categorySelected);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => { document.removeEventListener("click", handleClickOutside) };

    }, [])

    return (
        <div className={`whitespace-nowrap text-xs my-auto flex items-center capitalize cursor-pointer sm:text-sm lg:text-base min-w-[107px] ${className}`} role="listbox" aria-expanded="true" aria-label="All Categories"
            ref={dropdownRef}
        >
            <span className="flex items-center ml-auto"
                onClick={() => setIsOpen(!isOpen)}
            >
                {categorySelected}
                <svg width="20" height="20" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className={`lg:w-6 lg:h-6 lg:ml-1 ${isOpen ? "rotate-180" : ""}`}
                >
                    <path d="M12.25 22.4L21 31.15L29.75 22.4" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            <ul className={`${isOpen ? "block" : "hidden"} absolute bottom-0 translate-y-[97%] translate-x-[-10px] bg-[#2F2F2F] w-[135px]  py-3 z-10 flex flex-col rounded-lg`}>
                {categories.map(category => {
                    if (category === categorySelected) {
                        return (
                            <li className="px-2 py-1.5 text-white font-bold bg-[#465360] hover:bg-[#566370] "
                                onClick={() => { setIsOpen(false) }}
                                key={category}
                            >
                                {category}
                            </li>
                        )
                    }
                    return (
                        <li className="px-2 py-1.5 text-white font-bold hover:bg-[#555] "
                            onClick={() => { setIsOpen(false); dispatch(setCategorySelected(category)) }}
                            key={category}
                        >
                            {category}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Dropdown