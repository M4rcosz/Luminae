import PricesRow from "@/components/Cards/Items/PricesRow"
import TitleDesc from "@/components/Cards/Items/TitleDesc"
import { ProductTypeStripe } from "@/types/product"
import Image from "next/image"
import ButtonAddToCart from "../Button/ButtonAddToCart"

interface CardProductProps {
    product: ProductTypeStripe;
    index: number;
}

const CardProduct = ({ product, index }: CardProductProps) => {
    return (
        <div className="w-full max-w-[370px] sm:max-w-none mx-auto flex flex-col gap-3 items-center bg-slate-300 h-fit sm:h-36 rounded-lg p-3 sm:flex-row">
            <div className="w-full h-fit sm:h-32 flex items-center justify-center sm:min-w-[150px] sm:w-[150px]">
                {index < 5 ? <Image
                    width={100}
                    height={100}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-fit sm:w-full sm:h-fit object-cover "
                    priority
                /> :
                    <Image
                        width={100}
                        height={100}
                        src={product.image}
                        alt={product.name}
                        className="w-fit h-full sm:w-full sm:h-fit object-cover "
                        loading="lazy"
                    />}
            </div>
            <div className="flex flex-col gap-4 w-full h-full">
                <TitleDesc name={product.name} description={product.description} href={`/product/${product.id}`} />
                <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between items-end h-full">
                    {/* <StarGrades grade={product.grade} reviews={product.reviews} className="w-4 h-4" /> */}
                    <PricesRow price={product.price} discount={product.discount} className="mr-auto sm:mb-1.5" />
                    <ButtonAddToCart className="w-full sm:w-fit py-1.5 px-10 rounded text-white font-bold ease-in-out duration-200"
                        product={product}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardProduct