import ViewAllTitle from "../ViewAllTitle";
import top100 from "@/data/top100.json";
import Top100Card from "./Top100Card";

const data = top100[0].top100;

const Top100 = () => {
    return (
        <section>
            <ViewAllTitle
                title="Top 100"
            />
            <ul className="flex overflow-scroll gap-4 w-screen relative right-5 pl-5">
                {data.map(product => (
                    <li key={`top100-${product.id}`}
                        className="flex flex-col justify-center mb-3 last:mr-5 shadow-[0_4px_18px_-10px_#7e7e7e] rounded-lg "
                    >
                        <Top100Card
                            src={product.src}
                            productName={product.name}
                            productCategories={product.categories}
                            productReviewsAmount={product.reviewsAmount}
                            productPrice={product.price}
                            productDiscountPercent={product.discount}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Top100