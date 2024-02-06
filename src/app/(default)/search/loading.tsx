import SkeletonProduct from "@/components/ProductsList/SkeletonProduct"

const Loading = () => {
    return (
        <ul className="px-Mobile md:px-Tablet max-w-[1440px] mx-auto flex flex-col gap-5 my-4">
            <li><SkeletonProduct /></li>
            <li><SkeletonProduct /></li>
            <li><SkeletonProduct /></li>
            <li><SkeletonProduct /></li>
            <li><SkeletonProduct /></li>
        </ul>
    )
}

export default Loading