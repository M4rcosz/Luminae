'use client'
import { useStoreCart } from "@/store";
import { ProductTypeStripe } from "@/types/product";
import { useShallow } from "zustand/react/shallow";

interface ButtonAddToCartProps {
    className?: string;
    product: ProductTypeStripe
}

const ButtonAddToCart = ({ className, product }: ButtonAddToCartProps) => {

    const { addCart, removeCart, cart } = useStoreCart(useShallow(state => state));

    const isInCart = cart.find(item => item.id === product.id);

    return (
        <button
            className={`flex justify-center items-center ${className}`}
            onClick={() => { isInCart ? removeCart(product) : addCart(product) }}

        >
            {isInCart ? 'Remove to cart' : 'Add to cart'}
        </button>
    )
}

export default ButtonAddToCart