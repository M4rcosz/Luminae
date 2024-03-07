import { getProducts } from "./actions";
import ListInfiniteScroll from "@/components/List/ListInfiniteScroll";

const SearchProducts = async ({ params }: { params: { product: string } }) => {
    const { products, hasFounded, hasMore } = await getProducts(params.product);

    return (
        <main>
            {hasFounded === true ?
                <div className="container mx-auto my-3">
                    <p className="px-Mobile md:px-Tablet md:my-5 lg:my-0 italic font-bold">Searching by  "{<span className="text-blue-700">{params.product}</span>}":</p>
                </div>
                :
                <div className="container mx-auto px-Mobile md:px-Tablet my-3">
                    <p className="md:my-5 lg:my-0 italic font-bold">Not found by "{<span className="text-red-700">{params.product}</span>}"</p>
                </div>
            }

            <ListInfiniteScroll products={products} filterName={params.product} has_More={hasMore} />
        </main>
    )
}

export default SearchProducts