import FavoriteButton from "@/components/Button/FavoriteButton";
import PricesRow from "@/components/Card/PricesRow";
import StarGrades from "@/components/Card/StarGrades";
import Image from "next/image";

interface Top100CardProps {
    productImage: string;
    productName: string;
    productDescription: string;
    productPrice: number;
    productDiscount: number;
    productReviews: number;
    productGrade: number;
}

const Top100Card = (
    {
        productImage,
        productName,
        productDescription,
        productPrice,
        productDiscount,
        productReviews,
        productGrade
    }: Top100CardProps) => {


    return (
        <li className="flex flex-col justify-center last:mr-5 shadow-[0_4px_18px_-10px_#7e7e7e] rounded-lg min-w-60 sm:last:mr-0 lg:min-w-0">
            <Image
                src={productImage}
                alt={productName}
                width={500}
                height={500}
                quality={100}
                className="w-full h-full rounded-t-lg object-cover object-top"
                loading="lazy"
            />
            <footer className="flex flex-col gap-2 px-3 py-2 lg:py-5 lg:px-4 lg:justify-center">
                <div className="flex justify-between items-center ">
                    <div className="lg:max-w-[80%]">
                        <h3 className="w-fit text-[#262626] text-sm font-bold xl:text-xl cursor-pointer  hover:text-[#000a] ease-in-out duration-200">{productName}</h3>
                        <p className="text-2xs truncate hover:text-clip hover:whitespace-normal lg:hover:whitespace-nowrap lg:hover:overflow-visible xl:text-base"
                        >{productDescription}</p>
                    </div>

                    <FavoriteButton />

                </div>
                <StarGrades grade={productGrade} reviews={productReviews} className="w-5 h-5 xl:w-6 xl:h-6" />
                <PricesRow price={productPrice} discount={productDiscount} />
            </footer>
        </li>

    )
}

export default Top100Card