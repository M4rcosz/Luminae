import ViewAllTitle from "../ViewAllTitle";
import data from "@data/data.json";
import Top100Card from "./Top100Card";
import ContainerList from "@components/utils/ContainerList";

const top100Info = data[0].top100Info;

const Top100 = () => {
    return (
        <section className="px-Mobile md:px-Tablet">
            <ViewAllTitle title="Top 100" />
            <ContainerList className="sm:grid sm:grid-cols-2 lg:grid-cols-4 ">
                {top100Info!.map(product =>
                    <Top100Card
                        key={`top100-${product.id}`}
                        src={product.src}
                        productName={product.name}
                        productCategories={product.categories}
                        productReviewsAmount={product.reviewsAmount}
                        grade={product.grades}
                        productPrice={product.price}
                        productDiscountPercent={product.discount}
                    />
                )}
            </ContainerList>
        </section>
    )
}

export default Top100