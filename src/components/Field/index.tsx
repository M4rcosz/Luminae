"use client"
import { useAppDispatch } from "@/hooks/redux";
import { store } from "@/store";
import { activePopUp } from "@/store/reducer/PopUpUtils";
import Dropdown from "@components/Dropdown";
import { useState } from "react";
import { Provider } from "react-redux";

interface FieldProps {
    placeholder?: string;
    typeModel?: "search" | "rightIcon" | "emailRegister" | "none";
    className?: string;
    ariaLabel?: string;
    IconElement?: React.ReactNode;
}

const Field = (props: FieldProps) => <Provider store={store}><FieldContent {...props} /></Provider>

const FieldContent = ({ placeholder, typeModel = "none", className, ariaLabel, IconElement }: FieldProps) => {

    const [inputValue, setInputValue] = useState<string>("")

    const [fieldBorder, setFieldBorder] = useState<string>("")

    const inputStyles = "flex-1 relative text-sm focus:outline-none";
    const containerStyles = "border border-[#D9D9D9] rounded flex flex-wrap items-center py-2 px-3";

    const dispatch = useAppDispatch();

    if (typeModel === "search")
        return <div
            style={{ border: fieldBorder && `1px solid ${fieldBorder}` }}
            className={`${containerStyles} w-full md:w-fit `}>
            <input
                type="search"
                placeholder={placeholder}
                aria-label={ariaLabel}
                className={`${inputStyles} bg-[#fff0] ${className}`}
                onFocus={() => setFieldBorder("#27549c")}
                onBlur={() => setFieldBorder("")}
            />

            <Dropdown
                className="mr-1"
            />

            <svg width="20" height="20" viewBox="0 0 42 43" fill="none" xmlns="http:www.w3.org/2000/svg"
                style={{ borderColor: fieldBorder && fieldBorder }}
                className="pl-3 border-l border-[#E9E9E9] w-fit h-fit cursor-pointer *:hover:stroke-[#000] *:hover:stroke-2"
                aria-label="Lupa de Pesquisa"
            >
                <path d="M40.1395 39.9461L36.4553 36.2619M3.29736 20.604C3.29736 10.939 11.1324 3.104 20.7974 3.104C30.4623 3.104 38.2974 10.939 38.2974 20.604C38.2974 30.269 30.4623 38.104 20.7974 38.104C11.1324 38.104 3.29736 30.269 3.29736 20.604Z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>

    else if (typeModel === "rightIcon")
        return <div
            style={{ border: fieldBorder && `2px solid ${fieldBorder}` }}
            className={`${containerStyles} bg-whiteText`}>
            <input
                type="email"
                placeholder={placeholder}
                aria-label={placeholder}
                className={`${inputStyles} bg-whiteText w-full ${className}`}
                onFocus={() => setFieldBorder("#000")}
                onBlur={() => setFieldBorder("")}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            {IconElement}
        </div>

    else if (typeModel === "emailRegister")
        return <form
            onSubmit={ele => {
                ele.preventDefault();
                setInputValue("");
                dispatch(activePopUp("Email registrado com sucesso!"));
            }}
            style={{ border: fieldBorder && `2px solid ${fieldBorder}` }}
            className={`${containerStyles} bg-whiteText`}>
            <input
                type="email"
                placeholder={placeholder}
                aria-label={placeholder}
                className={`${inputStyles} bg-whiteText w-full ${className}`}
                onFocus={() => setFieldBorder("#000")}
                onBlur={() => setFieldBorder("")}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                required
            />
            <button type="submit" aria-label="Botão de Enviar">
                {IconElement}
            </button>
        </form>

    else if (typeModel === "none")
        return <input
            type="text"
            placeholder={placeholder}
            aria-label={placeholder}
            className={`${inputStyles} bg-whiteText py-2 px-3 rounded w-full  ${className}`}
        />

}

export default Field