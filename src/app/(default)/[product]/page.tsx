import { productType } from "@/common/types/product"
import getData from "@/common/utils/getData"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const Categories = async () => {
    // const [products, setProducts] = useState<productType[]>([])

    // const params = useParams();

    // console.log(params)

    // useEffect(() => { getData.client(`/products?name_like=${params.product}`, setProducts) }, [])


    // const data = await fetch("http://localhost:5500/api/products").then(data => data.json())

    // const products: productType[] = await data;

    // const data = await fetch("http://localhost:5500/api/products").then(data => data.json())

    // const products: any[] = data.data

    // console.log(products)

    return (
        <>
            Categories
            {/* {products.map(product => (
                <div key={product.id}>
                    {product.id} - {product.name}
                </div>
            ))} */}
        </>
    )
}

export default Categories