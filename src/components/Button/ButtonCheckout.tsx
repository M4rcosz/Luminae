"use client"
import { useStoreCart } from "@/store"
import { useShallow } from "zustand/react/shallow"
import Link from "next/link"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

const ButtonCheckout = () => {
    const { toogleCart, cart, setCheckout } = useStoreCart(useShallow(state => state));

    const { user } = useUser();
    const router = useRouter();

    const handlerCheckout = () => {
        if (!user) {
            toogleCart();
            router.push("/sign-in?redirectUrl='/'");
            return
        }
        setCheckout("checkout");
    }

    return (
        <div className="flex flex-col gap-3 px-3 py-3">
            {cart.length > 4 &&
                <Link href="#"
                    className="mx-auto text-center text-white bg-slate-700 hover:bg-slate-600 rounded py-2 px-12 font-bold "
                >
                    See Entire Cart ({cart.length - 4}+)
                </Link>
            }
            <div className="w-full h-0.5 bg-slate-700 rounded-lg"></div>
            <button onClick={() => cart.length > 0 && handlerCheckout()} className={`text-center text-white ${cart.length > 0 ? "bg-green-800/50 hover:bg-green-800" : "bg-green-800/50 cursor-default grayscale text-gray-300"}  rounded py-2 px-12 font-bold`}>
                Checkout
            </button>
        </div>
    )
}

export default ButtonCheckout