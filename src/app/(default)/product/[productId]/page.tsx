import ButtonAddToCart from "@/components/Button/ButtonAddToCart";
import PricesRow from "@/components/Cards/Items/PricesRow";
import TitleDesc from "@/components/Cards/Items/TitleDesc";
import Image from "next/image";
import { getProduct } from "./actions";

interface ProductPageType {
    params: {
        productId: string
    }
}

const ProductPage = async ({ params: { productId }, }: ProductPageType) => {
    const product = await getProduct(productId);

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