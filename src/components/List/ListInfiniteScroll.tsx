"use client";
import { getProducts } from "@/app/(default)/search/[product]/actions";
import { ProductTypeStripe } from "@/types/product"
import CardProduct from "@components/Cards/CardProduct"
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import LoadingCircle from "../utils/LoadingCircle";

interface ListInfiniteScrollProps {
    products: ProductTypeStripe[],
    filterName?: string | undefined;
    has_More?: boolean | undefined;
}

const ListInfiniteScroll = ({ products: initialProducts, filterName, has_More }: ListInfiniteScrollProps) => {
    const [products, setProducts] = useState<ProductTypeStripe[]>(initialProducts);
    const [hasMore, setHasMore] = useState<boolean | undefined>(has_More);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: false
    });

    const lastProductId = products[products.length - 1]?.id;

    console.log(lastProductId)

    const loadMoreProducts = useCallback(async () => {
        setIsLoading(true);
        const { products, hasMore } = await getProducts(filterName, lastProductId);

        if (products) {
            setProducts(prevProducts => [...prevProducts, ...products]);
            setHasMore(hasMore);
        }

        setIsLoading(false);
    }, [])

    useEffect(() => {
        if (inView && hasMore && !isLoading) {
            loadMoreProducts();
        }
    }, [inView, hasMore, isLoading, loadMoreProducts]);

    if (!products) {
        return <div>Loading...</div>
    }

    console.log(products)

    return (
        <>
            <ul className="px-Mobile md:px-Tablet container mx-auto grid gap-5 my-4">
                {products.map((product, index) => (
                    <CardProduct product={product} key={product.id} index={index} />
                ))}
            </ul>

            {hasMore && (
                <div ref={ref} className="flex items-center justify-center">
                    <LoadingCircle />
                </div>
            )}


        </>
    )
}

export default ListInfiniteScroll