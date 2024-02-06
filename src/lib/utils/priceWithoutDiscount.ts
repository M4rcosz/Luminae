export const discountPriceFunction = (price: number, discount: number) => {
    return (price * (1 - (discount / 100))).toFixed(2);
}  