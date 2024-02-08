import ContainerList from "@components/utils/ContainerList";
import { productType } from "@/types/product";
import getData from "@/lib/utils/getData";
import CardTop100 from "@/components/Cards/CardTop100";

const Top100 = async () => {

    const top100Data: productType[] = await getData.server("/products?top100=true&_limit=4");


    return (
        <ContainerList className="sm:grid sm:grid-cols-2 lg:grid-cols-4 ">
            {top100Data!.map(product =>
                <CardTop100
                    key={`top100-${product.id}`}
                    productImage={product.src}
                    productName={product.name}
                    productDescription={product.description}
                    productReviews={product.reviews}
                    productGrade={product.grade}
                    productPrice={product.price}
                    productDiscount={product.discount}
                />
            )}
        </ContainerList>
    )
}

export default Top100