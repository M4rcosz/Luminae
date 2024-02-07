"use client"

import { usePopUpStore } from "@/store"

const PopUp = () => {

    const { isOpen, message, desactivePopUp } = usePopUpStore(state => state);

    if (isOpen) setTimeout(() => desactivePopUp(), 3000);


    return <div className={`${isOpen ? "animate-popUp" : "hidden"}  fixed top-12 left-1/2 translate-x-[-50%] py-3 px-7 bg-[#00662F] text-whiteText text-base rounded-lg font-bold z-[99999]`}>
        <p>{message}</p>
    </div>
}

export default PopUp
