import ProductsList from "@/components/SectionContents/ProductsList"
import CardProduct from "@/components/Cards/CardProduct";
import { ProductTypeStripe } from "@/types/product"
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
            <ul className="px-Mobile md:px-Tablet max-w-[1440px] mx-auto flex flex-col gap-5 my-4">
                {products.map((product, index) => (
                    <CardProduct product={product} key={product.id} index={index} />
                ))}
            </ul>
        </main>
    )
}

export default SearchProducts