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
        <div className="w-full flex gap-3 items-center bg-[#ddd] h-fit rounded-lg py-3 px-2 md:py-5 md:px-4">
            <div className="min-w-[100px] w-[100px] h-[100px] flex items-center md:min-w-[150px] md:w-[150px]">
                {index < 4 ? <Image
                    width={100}
                    height={100}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-fit object-cover "
                    priority
                /> :
                    <Image
                        width={100}
                        height={100}
                        src={product.image}
                        alt={product.name}
                        className="w-full h-fit object-cover "
                        loading="lazy"
                    />}
            </div>
            <div className="flex flex-col gap-4 w-full">
                <TitleDesc name={product.name} description={product.description} />
                <div className="flex flex-col gap-1.5">
                    {/* <StarGrades grade={product.grade} reviews={product.reviews} className="w-4 h-4" /> */}
                    <PricesRow price={product.price} />
                </div>
                <ButtonAddToCart className="ml-auto bg-teal-700 py-1.5 px-4 rounded text-white font-bold hover:bg-teal-700/75 ease-in-out duration-200"
                    product={product}
                />
            </div>
        </div>
    )
}

export default CardProduct