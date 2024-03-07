"use server";

import { stripe } from "@/lib/stripe";
import { ProductTypeStripe } from "@/types/product";

interface getProductsType {
    products: ProductTypeStripe[],
    hasFounded: boolean,
    hasMore?: boolean
}

export const getProducts = async (filterName?: string, lastProductId?: string): Promise<getProductsType> => {
    let hasFounded;
    let hasMore;

    const params = lastProductId ? { starting_after: lastProductId, limit: 6 } : { limit: 6 };

    let { data: products, has_more } = await stripe.products.search({
        query: "name~\"" + filterName + "\"",
        limit: 6,
    });

    hasMore = has_more;

    if (products.length === 0) {
        const { data, has_more } = await stripe.products.list(params);

        products = data;
        hasMore = has_more;
        hasFounded = false;

    } else {
        hasFounded = true;
    }

    const formatedProducts = await Promise.all(

        products.map(async product => {
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
                grades: Number(product.metadata.grade),
                review: Number(product.metadata.reviews),
            }
        })
    )
    return {
        products: formatedProducts,
        hasFounded,
        hasMore
    };
}