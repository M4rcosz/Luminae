"use client"

import { useStorePopUp } from "@/store"
import { useShallow } from "zustand/react/shallow";

const PopUp = () => {

    const { isPopUp: isOpen, popUpMessage: message, desactivePopUp } = useStorePopUp(useShallow(state => state));

    if (isOpen) setTimeout(() => desactivePopUp(), 3000);


    return <>
        {isOpen && <div className="animate-popUp fixed top-12 left-1/2 translate-x-[-50%] py-3 px-7 bg-[#00662F] text-whiteText text-base rounded-lg font-bold z-[99999]">
            <p>{message}</p>
        </div>}
    </>
}

export default PopUp
