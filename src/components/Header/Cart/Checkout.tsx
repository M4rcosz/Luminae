import { useStoreCart } from "@/store";
import { useEffect } from "react"
import { useShallow } from "zustand/react/shallow";

const Checkout = () => {

    const { cart, paymentIntent, setCheckout } = useStoreCart(useShallow(state => state));


    useEffect(() => {
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                items: cart,
                payment_intent_id: paymentIntent
            }),
        })
            , [cart, paymentIntent]
    })

    return (
        <div>
            <button
                className="text-white bg-slate-700 rounded py-0.5 px-2 w-fit absolute left-3 top-2.5 font-bold"
                aria-label="Voltar"
                onClick={() => setCheckout("cart")}
            >
                {"<"}
            </button>
            <h2 className="text-center text-white font-bold py-3">Checkout</h2>

        </div>
    )
}

export default Checkout