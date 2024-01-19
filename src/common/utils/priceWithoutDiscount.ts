export const discountPriceFunction = (price: number, discount: number) => {
    return (price * 100) / (100 - discount);
}  