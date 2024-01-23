import FlashSalesCard from "./FlashSalesCard";
import data from "@/data/data.json"
import ViewAllTitle from "@/components/ViewAllTitle";
import ContainerList from "@/components/utils/ContainerList";

const flashSalesInfo = data[0].flashSalesInfo;

const FlashSales = () => {
    return (
        <section>
            <ViewAllTitle title="Flash Sales" />
            <ContainerList className="sm:justify-center sm:max-w-[600px] sm:mx-auto">
                {flashSalesInfo.map(card =>
                    <FlashSalesCard
                        key={`flashSales-${card.id}`}
                        discountLeft={card.discountLeft}
                        imageProduct={card.imageProduct}
                        productName={card.productName}
                        productDescription={card.productDescription}
                        evaluationNumber={card.evaluationNumber}
                        price={card.price}
                        discountPrice={card.discountPrice}
                        discount={card.discount}
                    />
                )}
            </ContainerList>
        </section>
    )
}

export default FlashSales