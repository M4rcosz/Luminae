"use client"

import { useStorePopUp } from "@/store";
import { useState } from "react";

interface FieldEmailRegisterProps {
    placeholder?: string;
    inputClassName?: string;
    ariaLabel?: string;
    IconElement?: React.ReactNode;
}

const FieldEmailRegister = ({ placeholder, inputClassName, ariaLabel, IconElement }: FieldEmailRegisterProps) => {

    const [inputValue, setInputValue] = useState<string>("")

    const [fieldBorder, setFieldBorder] = useState<string>("")

    const activePopUp = useStorePopUp(state => state.activePopUp);

    return (
        <form
            onSubmit={ele => {
                ele.preventDefault();
                setInputValue("");
                activePopUp("Email registered successfully!");
            }}
            style={{ border: fieldBorder && `2px solid ${fieldBorder}` }}
            className={`border border-[#D9D9D9] rounded flex flex-wrap items-center py-2 px-3 bg-whiteText`}>
            <input
                type="email"
                placeholder={placeholder}
                aria-label={ariaLabel || placeholder}
                className={`flex-1 relative text-sm focus:outline-none bg-whiteText w-full ${inputClassName}`}
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
    )
}

export default FieldEmailRegister