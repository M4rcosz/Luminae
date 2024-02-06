import Button from "@/components/Button"
import PricesRow from "@/components/Card/PricesRow"
import TitleDesc from "@/components/Card/TitleDesc"
import { ProductTypeStripe } from "@/types/product"
import Image from "next/image"

interface ProductProps {
    product: ProductTypeStripe
}

const Product = ({ product }: ProductProps) => {
    return (
        <div className="w-full flex gap-3 items-center bg-[#ddd] h-fit rounded-lg py-3 px-2 md:py-5 px-4">
            <div className="min-w-[100px] w-[100px] h-[100px] flex items-center md:min-w-[150px] md:w-[150px]">
                <Image
                    width={100}
                    height={100}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-fit object-cover "
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col gap-4 w-full">
                <TitleDesc name={product.name} description={product.description} />
                <div className="flex flex-col gap-1.5">
                    {/* <StarGrades grade={product.grade} reviews={product.reviews} className="w-4 h-4" /> */}
                    <PricesRow price={product.price} />
                </div>
                <Button className="ml-auto bg-[#66fd] py-1.5 px-4 rounded text-white font-bold hover:scale-105 ease-in-out duration-200">Add to Cart</Button>
            </div>
        </div>
    )
}

export default Product