"use client"
import http from "@/http";
import FlashSalesCard from "./FlashSalesCard";
import ContainerList from "@components/utils/ContainerList";
import { useEffect, useState } from "react";
import { productType } from "@/common/types/product";

const FlashSales = () => {
    const [flashSalesData, setFlashSalesData] = useState<productType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = (await http.get("/products?flashSales=true&_limit=4")).data;
                setFlashSalesData(data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, [])

    return (
        <ContainerList className="sm:grid sm:grid-cols-2 lg:flex">
            {flashSalesData!.map(card =>
                <FlashSalesCard
                    key={`flashSales-${card.id}`}
                    productImage={card.src}
                    productName={card.name}
                    productDescription={card.description}
                    productReviews={card.reviews}
                    productGrade={card.grades}
                    productPrice={card.price}
                    productDiscount={card.discount}
                />
            )}
        </ContainerList>
    )
}

export default FlashSales