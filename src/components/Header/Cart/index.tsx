"use client"

import { formatPrice } from "@/lib/utils/formatPrice"
import { useStoreCart } from "@/store"
import Image from "next/image"
import Link from "next/link"
import { useShallow } from "zustand/react/shallow"

const Cart = () => {
    const { isCartOpen: isOpen, toogleCart, cart, removeCart, incrementProduct, decrementProduct } = useStoreCart(useShallow(state => state));

    const someToTotal = () => {
        let total: number = 0;
        cart.map(item => total += (item.price || 0) * (item.quantity || 1));

        return total;
    }

    return (
        <>
            {isOpen && (
                <div className="fixed w-full h-screen left-0 top-0 z-50 bg-black/25"
                    onClick={toogleCart}
                >
                    <section className="flex flex-col relative ml-auto w-3/4 max-w-[400px] h-screen bg-gray-800"
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
                        <div className="text-white font-bold text-center h-[5%]">Total: {formatPrice(someToTotal())}</div>
                        <ul className="flex flex-col gap-3 px-3 py-3 h-fit ">
                            {cart.map((product, index) => (
                                index < 4 && (
                                    <li key={`${product.id}-${index}`}
                                        className="flex items-center text-white bg-slate-700 rounded py-2 px-2 gap-2 h-24 xs:h-32"
                                    >
                                        <Image
                                            width={100}
                                            height={100}
                                            src={product.image}
                                            alt={product.name}
                                            className="w-20 xs:w-full max-w-32 h-fit object-cover"
                                            priority
                                        />
                                        <div className="flex flex-col w-full h-full justify-between">
                                            <div className="flex">
                                                <div className="w-full">
                                                    <div className="flex justify-between">
                                                        <h3 className="text-sm xs:text-base">{product.name}</h3>
                                                        <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                            className="w-4 h-4 ml-auto bg-red-600/75 rounded-full hover:bg-red-600 cursor-pointer"
                                                            aria-label="remover do carrinho"
                                                            role="button"
                                                            onClick={() => removeCart(product)}
                                                        >
                                                            <path d="M28.4249 14.1004L13.5757 28.9497M28.4249 28.9496L13.5757 14.1003" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-2xs xs:text-sm">{product.description}</p>
                                                </div>

                                            </div>
                                            <div className="flex items-center justify-between ">
                                                <strong className="text-xs xs:text-sm text-blue-400 ">{formatPrice(product.price)}</strong>
                                                <div className="flex gap-2 items-center">

                                                    <span className="flex justify-center items-center text-xs xs:text-sm bg-slate-500/50 rounded-full w-3.5 h-3.5 xs:w-4 xs:h-4 hover:bg-slate-500 cursor-pointer"
                                                        onClick={() => incrementProduct(product)}
                                                    >+</span>

                                                    <span className="text-xs xs:text-sm">{product.quantity ? product.quantity : 1}</span>

                                                    <span className={`flex justify-center items-center text-xs xs:text-sm bg-slate-500/50 cursor-default rounded-full w-3.5 h-3.5 xs:w-4 xs:h-4  ${!product.quantity || product.quantity === 1 ? "bg-slate-500/25 text-white/30" : "hover:bg-slate-500 cursor-pointer"}`}
                                                        onClick={() => decrementProduct(product)}
                                                    >-</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )))
                            }
                        </ul>
                        <div className="flex flex-col gap-3 px-3 py-3">
                            {cart.length > 4 &&
                                <Link href="#"
                                    className="mx-auto text-center text-white bg-slate-700 hover:bg-slate-600 rounded py-2 px-12 font-bold "
                                >
                                    See Entire Cart ({cart.length - 4}+)
                                </Link>
                            }

                            <Link href="#" className="text-center text-white bg-green-800/50 hover:bg-green-800 rounded py-2 px-12 font-bold">Checkout</Link>
                        </div>
                    </section>
                </div>
            )}
        </>
    )
}

export default Cart