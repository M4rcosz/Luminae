// "use client"
// import { productType } from "@/types/product"
// import getData from "@/lib/utils/getData"
// import PricesRow from "@/components/Cards/Items/PricesRow"
// import StarGrades from "@/components/Cards/Items/StarGrades"
// import TitleDesc from "@/components/Cards/Items/TitleDesc"
// import Image from "next/image"
// import { useEffect, useState } from "react"
// import { useStoreSearching } from "@/store"


// const ProductsList = () => {
//     const [products, setProducts] = useState<productType[]>([])

//     const { categorySelected, searchingInputValue: searchValue } = useStoreSearching(state => state);

//     console.log(categorySelected)

//     const category = categorySelected !== "all categories" ? `&categorie=${categorySelected}&` : ""

//     useEffect(() => { getData.client(`/products?${category}name_like=${searchValue}&_sort=name&_order=asc&_limit=10`, setProducts) }, [category])

//     return (
//         <section className="px-Mobile md:px-Tablet container mx-auto flex flex-col gap-5 my-4">
//             {products.map(product => (
//                 <div key={product.id} className="w-full flex gap-3 items-center bg-[#ccc] h-fit py-3 px-2">
//                     <div className="min-w-[100px] w-[100px] h-[100px] flex items-center ">
//                         <Image
//                             width={100}
//                             height={100}
//                             src={product.src}
//                             alt={product.name}
//                             className="w-full h-fit object-cover "
//                             loading="lazy"
//                         />
//                     </div>
//                     <div className="flex flex-col gap-4 w-full">
//                         <TitleDesc name={product.name} description={product.description} />
//                         <div className="flex flex-col gap-1.5">
//                             <StarGrades grade={product.grade} reviews={product.reviews} className="w-4 h-4" />
//                             <PricesRow price={product.price} discount={product.discount} />
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </section>
//     )
// }

// export default ProductsList