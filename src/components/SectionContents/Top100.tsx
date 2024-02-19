import ContainerList from "@components/utils/ContainerList";
import { ProductTypeStripe } from "@/types/product";
import CardTop100 from "@/components/Cards/CardTop100";
import Stripe from "stripe";

const getProducts = async (): Promise<ProductTypeStripe[]> => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,
        { apiVersion: "2023-10-16", });

    const products = await stripe.products.search({
        query: "metadata[\"statusType\"]:\"top100\"",
    });


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
                discount: Number(product.metadata.discount),
                grade: Number(product.metadata.grade),
                reviews: Number(product.metadata.reviews),
            }
        })
    )
    return formatedProducts.reverse();
}

const Top100 = async () => {
    const produtos = await getProducts();

    return (
        <ContainerList className="sm:grid sm:grid-cols-2 lg:grid-cols-4 ">
            {produtos!.map(product =>
                <CardTop100
                    key={`top100-${product.id}`}
                    productImage={product.image}
                    productName={product.name}
                    productDescription={product.description}
                    productReviews={product.reviews}
                    productGrade={product.grade}
                    productPrice={product.price}
                    productDiscount={product.discount}
                />
            )}
        </ContainerList>
    )
}

export default Top100