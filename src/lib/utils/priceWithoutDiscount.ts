export const discountPriceFunction = (price: number | null, discount: number | undefined) => {
    return ((price || 0) * (1 - ((discount || 0) / 100)));
}  