"use client"
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { store } from "@/store";
import { activePopUp } from "@/store/reducer/PopUpUtils";
import Dropdown from "@components/Dropdown";
import { useRouter } from "next/navigation";
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

    const router = useRouter();

    if (typeModel === "search") {
        return <form
            onSubmit={e => {
                e.preventDefault();
                if (inputValue) { router.push(`/search/${inputValue}`) }

            }}
            style={{ border: fieldBorder && `1px solid ${fieldBorder}` }}
            className={`${containerStyles} w-full md:w-fit relative`}>
            <input
                type="text"
                placeholder={placeholder}
                aria-label={ariaLabel}
                className={`${inputStyles} bg-[#fff0] ${className}`}
                onFocus={() => setFieldBorder("#27549c")}
                onBlur={() => setFieldBorder("")}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />

            {inputValue &&
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="16" height="16" viewBox="0 0 256 256" xmlSpace="preserve"
                    className="w-3 h-3 mx-2"
                    aria-label="limpar campo de pesquisa"
                    role="button"
                    onClick={() => setInputValue("")}
                >
                    <defs>
                    </defs>
                    <g fontStyle="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                        <path d="M 3 90 c -0.768 0 -1.536 -0.293 -2.121 -0.879 c -1.172 -1.171 -1.172 -3.071 0 -4.242 l 84 -84 c 1.172 -1.172 3.07 -1.172 4.242 0 c 1.172 1.171 1.172 3.071 0 4.242 l -84 84 C 4.536 89.707 3.768 90 3 90 z" fontStyle="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                        <path d="M 87 90 c -0.768 0 -1.535 -0.293 -2.121 -0.879 l -84 -84 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.171 -1.172 3.071 -1.172 4.242 0 l 84 84 c 1.172 1.171 1.172 3.071 0 4.242 C 88.535 89.707 87.768 90 87 90 z" fontStyle="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    </g>
                </svg>
            }

            <Dropdown
                className="mr-1"
                categories={["all categories", "accessories", "shoes", "clothes"]}
            />

            <button
                type="submit"
                aria-label="Pesquisar"
            >
                <svg width="20" height="20" viewBox="0 0 42 43" fill="none" xmlns="http:www.w3.org/2000/svg"
                    style={{ borderColor: fieldBorder && fieldBorder }}
                    className="pl-3 border-l border-[#E9E9E9] w-fit h-fit cursor-pointer *:hover:stroke-[#000] *:hover:stroke-2"

                >
                    <path d="M40.1395 39.9461L36.4553 36.2619M3.29736 20.604C3.29736 10.939 11.1324 3.104 20.7974 3.104C30.4623 3.104 38.2974 10.939 38.2974 20.604C38.2974 30.269 30.4623 38.104 20.7974 38.104C11.1324 38.104 3.29736 30.269 3.29736 20.604Z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </form>
    }

    else if (typeModel === "rightIcon") {
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
    }

    else if (typeModel === "emailRegister") {
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
    }

    else if (typeModel === "none") {
        return <input
            type="text"
            placeholder={placeholder}
            aria-label={placeholder}
            className={`${inputStyles} bg-whiteText py-2 px-3 rounded w-full  ${className}`}
        />
    }
}

export default Field