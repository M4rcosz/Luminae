import { ProductTypeStripe } from "@/types/product";
import { formatPrice } from "./formatPrice";

export const cartTotalSum = (cart: ProductTypeStripe[]) => {
    return formatPrice(
        cart.reduce((acc: number, item: ProductTypeStripe) => {
            if (item.discount)
                return acc + item.price! * (1 - (item.discount / 100)) * (item.quantity || 1)

            return acc + item.price! * (item.quantity || 1)
        }, 0)
    )
}
