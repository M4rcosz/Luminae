"use client"
import { productType } from "@/types/product"
import getData from "@/common/utils/getData"
import PricesRow from "@/components/Card/PricesRow"
import StarGrades from "@/components/Card/StarGrades"
import TitleDesc from "@/components/Card/TitleDesc"
import { useAppSelector } from "@/hooks/redux"
import { store } from "@/store"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Provider } from "react-redux"

const ProductsList = () => <Provider store={store}><ProductsListContent /></Provider>

const ProductsListContent = () => {
    const [products, setProducts] = useState<productType[]>([])

    const { categorySelected, inputValue: searchValue } = useAppSelector(state => state.searchingTasks);

    console.log(categorySelected)

    const category = categorySelected !== "all categories" ? `&categorie=${categorySelected}&` : ""

    useEffect(() => { getData.client(`/products?${category}name_like=${searchValue}&_sort=name&_order=asc&_limit=10`, setProducts) }, [])

    // const post = () => {
    //     http.get('/products?_sort=id&_order=desc&_limit=1').then(res => {

    //         http.post('/products', {
    //             "id": res.data[0].id + 1,
    //             "categorie": "clothes",
    //             "name": "Lindao dress",
    //             "description": "Kimono & Caftan - Colorful - Night club fit",
    //             "src": "/images/top100/top100-4.png",
    //             "grade": 4.5,
    //             "reviews": 1211,
    //             "price": 487,
    //             "discount": 15,
    //             "top100": true
    //         })
    //             .then(res => console.log(res))
    //     })
    // }

    return (
        <section className="px-Mobile md:px-Tablet max-w-[1440px] mx-auto flex flex-col gap-5 my-4">
            {products.map(product => (
                <div key={product.id} className="w-full flex gap-3 items-center bg-[#ccc] h-fit py-3 px-2">
                    <div className="min-w-[100px] w-[100px] h-[100px] flex items-center ">
                        <Image
                            width={100}
                            height={100}
                            src={product.src}
                            alt={product.name}
                            className="w-full h-fit object-cover "
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <TitleDesc name={product.name} description={product.description} />
                        <div className="flex flex-col gap-1.5">
                            <StarGrades grade={product.grade} reviews={product.reviews} className="w-4 h-4" />
                            <PricesRow price={product.price} discount={product.discount} />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default ProductsList