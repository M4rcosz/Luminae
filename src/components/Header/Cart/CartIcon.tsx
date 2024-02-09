"use client"

import { useStoreCart } from "@/store";
import { useShallow } from "zustand/react/shallow";

interface CartIconProps {
    className?: string;
    stroke?: string;
    svgClassName?: string;
}

const CartIcon = ({ className, stroke = "#434343", svgClassName }: CartIconProps) => {

    const { toogleCart, cart } = useStoreCart(useShallow(state => state));

    return (
        <div className={`flex items-center text-white gap-0.5 relative ${className}`}
            aria-label="Carrinho de compras"
            onClick={toogleCart}
        >
            <svg width="24" height="24" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={svgClassName}
            >
                <path d="M15.75 11.025L15.75 12.775C15.75 15.6745 18.1005 18.025 21 18.025C23.8995 18.025 26.25 15.6745 26.25 12.775V11.025" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M27.3203 5.77502H14.6801C11.2582 5.77502 8.33791 8.24892 7.77536 11.6242L4.85869 29.1242C4.14757 33.391 7.43787 37.275 11.7635 37.275H30.237C34.5626 37.275 37.8529 33.391 37.1418 29.1242L34.2251 11.6242C33.6625 8.24892 30.7422 5.77502 27.3203 5.77502Z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round"

                />
            </svg>
            {cart.length ?
                <span className="flex justify-center items-center absolute -top-0.75 -right-1 h-4 w-4 rounded-full bg-[#3DC47E] text-xs lg:text-sm lg:w-5 lg:h-5">
                    {cart.length}
                </span>
                : null
            }
        </div>
    )
}

export default CartIcon