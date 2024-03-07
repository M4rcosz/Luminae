import SkeletonProduct from "@/components/Cards/Skeletons/SkeletonProduct"

const Loading = () => {
    return (
        <ul className="px-Mobile md:px-Tablet container mx-auto flex flex-col gap-5 my-4">
            <li><SkeletonProduct /></li>
            <li><SkeletonProduct /></li>
            <li><SkeletonProduct /></li>
            <li><SkeletonProduct /></li>
            <li><SkeletonProduct /></li>
        </ul>
    )
}

export default Loading