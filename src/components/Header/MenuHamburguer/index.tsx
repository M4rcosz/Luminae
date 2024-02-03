"use client"

import { useState } from "react"
import Link from "next/link"
import NotificationPopUp from "@/components/NotificationPopUp"

const MenuHamburguer = () => {
    const [open, setOpen] = useState(false)

    return <>
        <svg width="20" height="16" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="md:hidden"
            aria-label="abrir menu"
            role="button"
            onClick={() => setOpen(true)}
        >
            <g id="Menue icon">
                <line id="Line 119" x1="1.05" y1="1.41924" x2="19.95" y2="1.41924" stroke="#023047" strokeWidth="2.1" strokeLinecap="round" />
                <line id="Line 120" x1="1.05" y1="8.41924" x2="19.95" y2="8.41924" stroke="#023047" strokeWidth="2.1" strokeLinecap="round" />
                <line id="Line 121" x1="1.05" y1="15.4192" x2="19.95" y2="15.4192" stroke="#023047" strokeWidth="2.1" strokeLinecap="round" />
            </g>
        </svg>
        <div className={`${open ? "flex" : "hidden"} flex-col fixed top-0 left-0 w-screen bg-white z-50  border-[3px] border-[#000]`}>
            <div className="flex w-full items-center px-Mobile py-3">
                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="translate-x-[-25%] "
                    aria-label="fechar menu"
                    role="button"
                    onClick={() => setOpen(false)}
                >
                    <path d="M28.4249 14.1004L13.5757 28.9497M28.4249 28.9496L13.5757 14.1003" stroke="#28303F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className="mx-auto translate-x-[-25%] text-xl font-bold text-black">Menu</h2>
            </div>

            <ul className="flex flex-col mx-1 my-5 py-5 px-Mobile gap-8 text-sm text-[#000] font-semibold lg:text-base bg-[#222]">
                <li className=" text-white font-semibold text-base">
                    <Link href="#">Sign In</Link>
                </li>
                <li className=" text-white font-semibold text-base">
                    <Link href="#">Favorites</Link>
                </li>
                <li className=" text-white font-semibold text-base">
                    <Link href="#" className="flex items-center gap-2">Card
                        <NotificationPopUp />
                    </Link>
                </li>
            </ul>

            <ul className="flex flex-col mb-10 mt-5 mx-Mobile gap-8 text-sm text-[#000] font-semibold lg:text-base ">
                <li className="hover:text-[#0006] hover:scale-105 ease-in-out duration-100">
                    <Link href="#">About us</Link>
                </li>
                <li className="hover:text-[#0006] hover:scale-105 ease-in-out duration-100">
                    <Link href="#">Blog</Link>
                </li>
                <li className="hover:text-[#0006] hover:scale-105 ease-in-out duration-100">
                    <Link href="#">Contact us</Link>
                </li>
                <li className="hover:text-[#0006] hover:scale-105 ease-in-out duration-100">
                    <Link href="#">Help & Support</Link>
                </li>
            </ul>
        </div>
    </>
}

export default MenuHamburguer