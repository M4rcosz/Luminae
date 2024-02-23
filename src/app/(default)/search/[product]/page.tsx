import CardProduct from "@/components/Cards/CardProduct";
import { ProductTypeStripe } from "@/types/product"
import Stripe from "stripe";

let HasFound = async () => <></>;

const getProducts = async (filterName?: string): Promise<ProductTypeStripe[]> => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2023-10-16",
    });

    // Arrumar tipagem do Stripe
    let products: any = await stripe.products.search({
        query: "name~\"" + filterName + "\"",
        limit: 10,
    });

    if (products.data.length === 0) {
        products = await stripe.products.list({ limit: 10, });
        HasFound = async () =>
            <div className="container mx-auto px-Mobile md:px-Tablet">
                <p className="md:my-5 lg:my-0 italic font-bold">Not found by "<span className="text-red-700">{filterName}</span>"</p>
            </div>
    } else
        HasFound = async () =>
            <div className="container mx-auto">
                <p className="px-Mobile md:px-Tablet md:my-5 lg:my-0 italic font-bold">Searching by  "<span className="text-blue-700">{filterName}</span>":</p>
            </div>

    const formatedProducts = await Promise.all(

        // Arrumar tipagem do Stripe
        products.data.map(async (product: any) => {
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
    return formatedProducts.reverse();
}

const SearchProducts = async ({ params }: { params: { product: string } }) => {
    const products = await getProducts(params.product);

    return (
        <main>
            <HasFound />
            <ul className="px-Mobile md:px-Tablet container mx-auto grid gap-5 my-4">
                {products.map((product, index) => (
                    <CardProduct product={product} key={product.id} index={index} />
                ))}
            </ul>
        </main>
    )
}

export default SearchProducts