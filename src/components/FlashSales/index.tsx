import FlashSalesCard from "./FlashSalesCard";
import ContainerList from "@components/utils/ContainerList";
import { productType } from "@/types/product";
import getData from "@/common/utils/getData";

const FlashSales = async () => {
    const flashSalesData: productType[] = await getData.server("/products?flashSales=true&_limit=4");

    return (
        <ContainerList className="sm:grid sm:grid-cols-2 lg:flex">
            {flashSalesData!.map(card =>
                <FlashSalesCard
                    key={`flashSales-${card.id}`}
                    productImage={card.src}
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