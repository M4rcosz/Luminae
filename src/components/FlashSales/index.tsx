'use client'

import FlashSalesCard from "./FlashSalesCard";
import data from "../../data/flashSales.json"
import HeaderViewAll from "../HeaderViewAll";

const cardsFlashSales = data[0].flashSales;

const FlashSales = () => {
    return (
        <>
            <HeaderViewAll
                title="Flash Sales"
            />
            <ul className="flex overflow-scroll ">
                {cardsFlashSales.map(card => {
                    return (
                        <li key={`flashSales-${card.id}`}
                            className="flex flex-col mb-3 pb-2 pt-3 ml-5 last:mr-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)] rounded-lg ">
                            <FlashSalesCard
                                discountLeft={card.discountLeft}
                                imageProduct={card.imageProduct}
                                productName={card.productName}
                                productDescription={card.productDescription}
                                evaluationNumber={card.evaluationNumber}
                                price={card.price}
                                discountPrice={card.discountPrice}
                                discount={card.discount}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default FlashSales