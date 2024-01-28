import FlashSalesCard from "./FlashSalesCard";
import data from "@data/data.json"
import ViewAllTitle from "@components/ViewAllTitle";
import ContainerList from "@components/utils/ContainerList";

const flashSalesInfo = data[0].flashSalesInfo;

const FlashSales = () => {
    return (
        <section className="px-Mobile md:px-Tablet">
            <ViewAllTitle title="Flash Sales" />
            <ContainerList className="sm:grid sm:grid-cols-2 lg:flex">
                {flashSalesInfo!.map(card =>
                    <FlashSalesCard
                        key={`flashSales-${card.id}`}
                        discountLeft={card.discountLeft}
                        imageProduct={card.imageProduct}
                        productName={card.productName}
                        productDescription={card.productDescription}
                        reviewsAmount={card.reviewsAmount}
                        grades={card.grades}
                        price={card.price}
                        discount={card.discount}
                    />
                )}
            </ContainerList>
        </section>
    )
}

export default FlashSales