import ButtonAddToCart from "@/components/Button/ButtonAddToCart";
import PricesRow from "@/components/Cards/Items/PricesRow";
import TitleDesc from "@/components/Cards/Items/TitleDesc";
import BackgroundScreen from "@/components/utils/BackgroudScreen";
import { formatPrice } from "@/lib/utils/formatPrice";
import { ProductTypeStripe } from "@/types/product";
import Image from "next/image";
import Stripe from "stripe";

interface ProductPageType {
    params: {
        productId: string
    }
}

const getProduct = async (id: string): Promise<ProductTypeStripe> => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,
        { apiVersion: "2023-10-16", });

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

const ProductPage = async ({ params: { productId } }: ProductPageType) => {
    const product = await getProduct(productId);

    console.log(product)

    return (
        <main className="container mx-auto px-Mobile md:px-Tablet">
            <section className="w-full py-3">
                <Image
                    width={500}
                    height={500}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-fit"
                    priority
                />
                <footer className="flex flex-col gap-3">
                    <div>
                        <TitleDesc name={product.name} description={product.description} />
                    </div>
                    <div>
                        <PricesRow price={product.price} discount={product.discount} />
                    </div>
                    <ButtonAddToCart product={product} className="w-full rounded text-white" />

                </footer>
            </section>
        </main>
    )
}

export default ProductPage