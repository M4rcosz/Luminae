import CardFlashSales from "@/components/Cards/CardFlashSales";
import ContainerList from "@components/utils/ContainerList";
import { ProductTypeStripe } from "@/types/product";
import Stripe from "stripe";

const getProducts = async (): Promise<ProductTypeStripe[]> => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,
        { apiVersion: "2023-10-16", });

    const products = await stripe.products.search({
        query: "metadata[\"statusType\"]:\"flashSales\"",
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

const FlashSales = async () => {
    const produtos = await getProducts();

    return (
        <ContainerList className="sm:grid sm:grid-cols-2 lg:flex">
            {produtos!.map(card =>
                <CardFlashSales
                    key={`flashSales-${card.id}`}
                    productImage={card.image}
                    productName={card.name}
                    productDescription={card.description}
                    productReviews={card.reviews}
                    productGrade={card.grade}
                    productPrice={card.price}
                    productDiscount={card.discount}
                />
            )}
        </ContainerList>
    )
}

export default FlashSales