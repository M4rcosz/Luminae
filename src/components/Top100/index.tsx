"use client"
import { useEffect, useState } from "react";
import Top100Card from "./Top100Card";
import ContainerList from "@components/utils/ContainerList";
import { productType } from "@/common/types/product";
import http from "@/http";

const Top100 = () => {
    const [top100Data, setTop100Data] = useState<productType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = (await http.get("/products?top100=true&_limit=4")).data;
                setTop100Data(data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, [])

    return (
        <ContainerList className="sm:grid sm:grid-cols-2 lg:grid-cols-4 ">
            {top100Data!.map(product =>
                <Top100Card
                    key={`top100-${product.id}`}
                    productImage={product.src}
                    productName={product.name}
                    productDescription={product.description}
                    productReviews={product.reviews}
                    productGrade={product.grades}
                    productPrice={product.price}
                    productDiscount={product.discount}
                />
            )}
        </ContainerList>
    )
}

export default Top100