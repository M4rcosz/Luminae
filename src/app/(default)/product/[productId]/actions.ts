import { stripe } from "@/lib/stripe";
import { ProductTypeStripe } from "@/types/product";

export const getProduct = async (id: string): Promise<ProductTypeStripe> => {
    const product = await stripe.products.retrieve(id);

    const price = await stripe.prices.list({
        product: product.id,
    });

    return {
        id: product.id,
        price: price.data[0].unit_amount,
        name: product.name,
        image: product.images[0],
        description: product.description,
        currency: price.data[0].currency,
        discount: Number(product.metadata.discount),
        grade: Number(product.metadata.grade),
        reviews: Number(product.metadata.reviews),
    };
}