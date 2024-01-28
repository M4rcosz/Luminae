"use client"

import { useAppSelector, useAppDispatch } from "@/hooks/redux"
import { store } from "@/store"
import { desactivePopUp } from "@/store/reducer/PopUpUtils"
import { Provider } from "react-redux"

const PopUp = () => <Provider store={store} children={<PopUpContent />} />

export default PopUp

const PopUpContent = () => {

    const { message, status } = useAppSelector(state => state.popUpUtils);
    const useDispatch = useAppDispatch();

    if (status) setTimeout(() => useDispatch(desactivePopUp()), 3000);

    return <div className={`${status ? "animate-popUp" : "hidden"}  fixed top-12 left-1/2 translate-x-[-50%] py-3 px-7 bg-[#00662F] text-whiteText text-base rounded-lg font-bold z-[99999]`}>
        <p>{message}</p>
    </div>
}

