"use client"

import { formatPrice } from "@/lib/utils/formatPrice"
import { useStoreCart } from "@/store"
import Image from "next/image"
import { useShallow } from "zustand/react/shallow"

const Cart = () => {
    const { isCartOpen: isOpen, toogleCart, cart, removeCart } = useStoreCart(useShallow(state => state))

    return (
        <>
            {isOpen && (
                <div className="fixed w-full h-screen left-0 top-0 z-50 bg-black/25"
                    onClick={toogleCart}
                >
                    <section className="ml-auto w-3/4 max-w-[400px] h-screen bg-gray-800"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="relative">
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
                        <div className="text-white font-bold text-center">Total:</div>
                        <ul className="flex flex-col gap-3 px-3 py-3">
                            {cart.map((product, index) => (
                                <li key={`${product.id}-${index}`}
                                    className="flex text-white bg-slate-700 rounded py-2 px-2 gap-2"
                                >
                                    <Image
                                        width={100}
                                        height={100}
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full max-w-32 h-fit object-cover "
                                        loading="lazy"
                                    />
                                    <div className="w-full">
                                        <div className="flex">
                                            <div>
                                                <h3 className="text-base">{product.name}</h3>
                                                <p className="text-sm">{product.description}</p>
                                            </div>
                                            <p className="ml-auto"
                                                onClick={() => removeCart(product)}
                                            >Lixeira</p>

                                        </div>
                                        <div className="flex items-center justify-between ">
                                            <strong className="text-sm">{formatPrice(product.price)}</strong>
                                            <div>
                                                <span>+</span>
                                                <span>{product.quantity ? product.quantity : 1}</span>
                                                <span>-</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            )}
        </>
    )
}

export default Cart