import ProductsList from "@/components/ProductsList"
import { formatPrice } from "@/lib/utils/formatPrice";
import { ProductTypeStripe } from "@/types/product"
import Image from "next/image";
import Stripe from "stripe";

const getProducts = async (): Promise<ProductTypeStripe[]> => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2023-10-16",
    });

    const products = await stripe.products.list();
    const formatedProducts = await Promise.all(
        products.data.map(async (product) => {
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
            }
        })
    )
    return formatedProducts
}

const SearchProducts = async () => {
    const products = await getProducts()

    return (
        <main>
            {/* <ProductsList /> */}
            <ul>
                {products.map(product => (
                    <li>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <Image src={product.image} alt={product.name} width={100} height={100} />
                        <strong>{formatPrice(product.price)}</strong>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default SearchProducts