"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const MenuHamburguer = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [toggle, setToggle] = useState<boolean>(false);

    useEffect(() => {
        const toggleFunction = () => { setTimeout(() => setToggle(false), 200) };

        if (!isOpen) toggleFunction();
        else setToggle(true);

    }, [isOpen])

    return <>
        <svg width="20" height="16" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="md:hidden"
            aria-label="abrir menu"
            role="button"
            onClick={() => setIsOpen(true)}
        >
            <g id="Menue icon">
                <line id="Line 119" x1="1.05" y1="1.41924" x2="19.95" y2="1.41924" stroke="#023047" strokeWidth="2.1" strokeLinecap="round" />
                <line id="Line 120" x1="1.05" y1="8.41924" x2="19.95" y2="8.41924" stroke="#023047" strokeWidth="2.1" strokeLinecap="round" />
                <line id="Line 121" x1="1.05" y1="15.4192" x2="19.95" y2="15.4192" stroke="#023047" strokeWidth="2.1" strokeLinecap="round" />
            </g>
        </svg>
        <div className={`${toggle ? "block" : "hidden"} fixed w-full h-screen left-0 top-0 z-50 ${isOpen ? "bg-black/25" : ""}`}
            onClick={() => setIsOpen(false)}
        >

            <section className={`${isOpen ? "animate-rightFadeInOut" : "animate-rightFadeInOutReverse"} ease-in-out duration-200 flex flex-col relative ml-auto w-3/4 max-w-[400px] h-screen bg-gray-800`}
                onClick={e => e.stopPropagation()}
            >
                <div className="relative h-[8%]">
                    <h2 className="text-center text-white font-bold py-3">Menu</h2>
                    <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className=" absolute top-1 left-1 "
                        aria-label="fechar carrinho"
                        role="button"
                        onClick={() => setIsOpen(false)}
                    >
                        <path d="M28.4249 14.1004L13.5757 28.9497M28.4249 28.9496L13.5757 14.1003" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <ul className="flex flex-col mx-1 my-5 py-5 text-sm text-[#000] font-semibold lg:text-base">
                    <li className=" text-white/90 font-semibold text-base px-Mobile bg-black py-4 hover:bg-black/50 hover:text-white">
                        <SignedOut>
                            <Link href="#">Sign In</Link>
                        </SignedOut>
                        <SignedIn>
                            <div className="flex items-center gap-2 hover:text-[#fff] group ease-in-out duration-100">
                                <UserButton />
                                {/* <p className="cursor-pointer">{user?.fullName}</p> */}
                            </div>
                        </SignedIn>
                    </li>
                    <li className=" text-white/90 font-semibold text-base px-Mobile bg-black py-4 hover:bg-black/50 hover:text-white">
                        <Link href="#">Favorites</Link>
                    </li>
                    <li className=" text-white/90 font-semibold text-base px-Mobile bg-black py-4 hover:bg-black/50 hover:text-white">
                        <Link href="#" className="flex items-center gap-2">Card
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-col mb-10 mt-5 mx-Mobile gap-8 text-sm text-white font-semibold lg:text-base ">
                    <li className="hover:text-white/50">
                        <Link href="#">About us</Link>
                    </li>
                    <li className="hover:text-white/50">
                        <Link href="#">Blog</Link>
                    </li>
                    <li className="hover:text-white/50">
                        <Link href="#">Contact us</Link>
                    </li>
                    <li className="hover:text-white/50">
                        <Link href="#">Help & Support</Link>
                    </li>
                </ul>

            </section>

        </div>
    </>
}

export default MenuHamburguer