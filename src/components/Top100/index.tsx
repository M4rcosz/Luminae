import ViewAllTitle from "../ViewAllTitle";
import data from "@/data/data.json";
import Top100Card from "./Top100Card";
import ContainerList from "@/components/utils/ContainerList";

const top100Info = data[0].top100Info;

const Top100 = () => {
    return (
        <section>
            <ViewAllTitle title="Top 100" />
            <ContainerList>
                {top100Info.map(product =>
                    <Top100Card
                        key={`top100-${product.id}`}
                        src={product.src}
                        productName={product.name}
                        productCategories={product.categories}
                        productReviewsAmount={product.reviewsAmount}
                        productPrice={product.price}
                        productDiscountPercent={product.discount}
                    />
                )}
            </ContainerList>
        </section>
    )
}

export default Top100