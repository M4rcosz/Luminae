export const formatPrice = (price: number | null, discount?: number | null) => {
    if (!price) return "$0.00";

    if (discount) {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format((price! * (1 - (discount! / 100))) / 100);
    }

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(price / 100);
};
