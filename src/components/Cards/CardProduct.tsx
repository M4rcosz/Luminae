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
        <div className="w-full flex flex-col gap-3 items-center bg-slate-300 h-fit rounded-lg py-3 px-2 md:py-5 md:px-4 sm:flex-row">
            <div className="w-full h-32 flex items-center justify-center sm:min-w-[150px] sm:w-[150px]">
                {index < 4 ? <Image
                    width={100}
                    height={100}
                    src={product.image}
                    alt={product.name}
                    className="w-fit h-full sm:w-full sm:h-fit object-cover "
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
            <div className="flex flex-col gap-4 w-full">
                <TitleDesc name={product.name} description={product.description} href={`/product/${product.id}`} />
                <div className="flex flex-col gap-1.5">
                    {/* <StarGrades grade={product.grade} reviews={product.reviews} className="w-4 h-4" /> */}
                    <PricesRow price={product.price} />
                </div>
                <ButtonAddToCart className="sm:ml-auto  py-1.5 px-10 rounded text-white font-bold ease-in-out duration-200"
                    product={product}
                />
            </div>
        </div>
    )
}

export default CardProduct