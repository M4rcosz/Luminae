"use client"

import { useStoreCart } from "@/store"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useShallow } from "zustand/react/shallow"
import { cartTotalSum } from "@/lib/utils/cartTotalSum"
import { formatPrice } from "@/lib/utils/formatPrice"
import ButtonCheckout from "@/components/Button/ButtonCheckout"

const Cart = () => {
    const { isCartOpen: isOpen, toogleCart, cart, removeCart, incrementProduct, decrementProduct } = useStoreCart(useShallow(state => state));
    const [toggle, setToggle] = useState<boolean>(false);

    useEffect(() => {
        const toggleFunction = () => { setTimeout(() => setToggle(false), 200) };

        if (!isOpen) toggleFunction();
        else setToggle(true);

    }, [isOpen])

    return (
        <>
            <div className={`${toggle ? "block" : "hidden"} fixed w-full h-screen left-0 top-0 z-50 ${isOpen ? "bg-black/25" : ""}`}
                onClick={toogleCart}
            >
                <section className={`${isOpen ? "animate-rightFadeInOut" : "animate-rightFadeInOutReverse"} ease-in-out duration-200 flex flex-col relative ml-auto w-3/4 max-w-[400px] h-screen bg-gray-800`}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="relative h-[8%]">
                        <h2 className="text-center text-white font-bold py-3">Cart</h2>
                        <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className=" absolute top-1 left-1 "
                            aria-label="fechar carrinho"
                            role="button"
                            onClick={toogleCart}
                        >
                            <path d="M28.4249 14.1004L13.5757 28.9497M28.4249 28.9496L13.5757 14.1003" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="text-white font-bold text-center h-[5%]">Total: {cartTotalSum(cart)}</div>
                    <ul className="flex flex-col gap-3 px-3 py-3 h-fit ">
                        {cart.map((product, index) => (
                            index < 4 && (
                                <li key={`${product.id}-${index}`}
                                    className="flex items-center text-white bg-slate-700 rounded py-2 px-2 gap-2 h-24 sm:h-32"
                                >
                                    <Image
                                        width={100}
                                        height={100}
                                        src={product.image}
                                        alt={product.name}
                                        className="w-20 sm:w-full max-w-32 h-fit object-cover"
                                        priority
                                    />
                                    <div className="flex flex-col w-full h-full justify-between">
                                        <div className="flex">
                                            <div className="w-full">
                                                <div className="flex justify-between">
                                                    <h3 className="text-sm sm:text-base">{product.name}</h3>
                                                    <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                        className="w-4 h-4 ml-auto bg-red-600/75 rounded-full hover:bg-red-600 cursor-pointer"
                                                        aria-label="remover do carrinho"
                                                        role="button"
                                                        onClick={() => removeCart(product)}
                                                    >
                                                        <path d="M28.4249 14.1004L13.5757 28.9497M28.4249 28.9496L13.5757 14.1003" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <p className="text-2xs sm:text-sm">{product.description}</p>
                                            </div>

                                        </div>
                                        <div className="flex items-center justify-between ">
                                            <strong className="text-xs sm:text-sm text-blue-400 ">{formatPrice(product.price, product.discount)}</strong>
                                            <div className="flex gap-2 items-center">

                                                <span className={`flex justify-center items-center text-xs sm:text-sm bg-slate-500/50 cursor-default rounded-full w-3.5 h-3.5 sm:w-4 sm:h-4  ${!product.quantity || product.quantity === 1 ? "bg-slate-500/25 text-white/30" : "hover:bg-slate-500 cursor-pointer"}`}
                                                    onClick={() => decrementProduct(product)}
                                                >-</span>

                                                <span className="text-xs sm:text-sm">{product.quantity ? product.quantity : 1}</span>

                                                <span className="flex justify-center items-center text-xs sm:text-sm bg-slate-500/50 rounded-full w-3.5 h-3.5 sm:w-4 sm:h-4 hover:bg-slate-500 cursor-pointer"
                                                    onClick={() => incrementProduct(product)}
                                                >+</span>


                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )))
                        }
                    </ul>
                    <ButtonCheckout />
                </section>
            </div>
        </>
    )
}

export default Cart