"use client"

import { useStoreCart } from "@/store"
import { useEffect, useState } from "react"
import { useShallow } from "zustand/react/shallow"
import { cartTotalSum } from "@/lib/utils/cartTotalSum"
import ButtonCheckout from "@/components/Button/ButtonCheckout"
import CartProduct from "./CartProduct"
import Checkout from "./Checkout"

const Cart = () => {
    const { isCartOpen: isOpen, toogleCart, cart, onCheckout } = useStoreCart(useShallow(state => state));
    const [toggle, setToggle] = useState<boolean>(false);
    const [isFullCart, setIsFullCart] = useState<boolean>(false);


    useEffect(() => {
        const toggleFunction = () => { setTimeout(() => setToggle(false), 200) };

        if (!isOpen) toggleFunction();
        else setToggle(true);

    }, [isOpen])

    return (
        <>
            <div className={`${toggle ? "block" : "hidden"} fixed w-full h-screen left-0 top-0 z-50 ${isOpen ? "bg-black/25" : ""} overflow-scroll`}
                onClick={() => toogleCart()}
            >
                <section className={`${isOpen ? "animate-rightFadeInOut" : "animate-rightFadeInOutReverse"} ease-in-out duration-200 flex flex-col relative ml-auto w-3/4 max-w-[400px] min-h-screen h-fit bg-gray-800`}
                    onClick={e => e.stopPropagation()}
                >
                    {onCheckout === "cart" &&
                        <>
                            <div className="relative h-[8%]">
                                <h2 className="text-center text-white font-bold py-3">Cart</h2>
                                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className=" absolute top-1 left-1 "
                                    aria-label="fechar carrinho"
                                    role="button"
                                    onClick={() => toogleCart()}
                                >
                                    <path d="M28.4249 14.1004L13.5757 28.9497M28.4249 28.9496L13.5757 14.1003" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="text-white font-bold text-center h-[5%]">Total: {cartTotalSum(cart)}</div>
                            <ul className="flex flex-col gap-3 px-3 py-3 h-fit ">
                                {cart.map((product, index) => (
                                    isFullCart === false ? index < 4 && (
                                        <CartProduct key={product.id} product={product} />
                                    ) :
                                        (
                                            <CartProduct key={product.id} product={product} />
                                        )
                                ))
                                }
                            </ul>
                            {cart.length > 4 && isFullCart === false &&
                                <div className="px-3">
                                    <button
                                        className="mx-auto text-center text-white bg-slate-700 hover:bg-slate-600 rounded py-2 w-full font-bold "
                                        onClick={() => setIsFullCart(true)}
                                    >
                                        See Entire Cart ({cart.length - 4}+)
                                    </button>
                                </div>
                            }
                            {isFullCart === true &&
                                <div className="px-3">
                                    <button
                                        className="mx-auto text-center text-white bg-slate-700 hover:bg-slate-600 rounded py-2 w-full font-bold "
                                        onClick={() => setIsFullCart(false)}
                                    >
                                        Collapse Cart
                                    </button>
                                </div>
                            }
                            <ButtonCheckout />
                        </>
                    }

                    {onCheckout === "checkout" &&
                        <Checkout />
                    }
                </section>
            </div>
        </>
    )
}

export default Cart