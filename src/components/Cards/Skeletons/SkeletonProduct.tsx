const SkeletonProduct = () => {
    return (
        <div className="w-full flex gap-3 items-center bg-[#ddd] h-fit rounded-lg py-3 px-2 md:py-5 px-4 h-[147px] md:h-[163px]">
            <div className="min-w-[100px] w-[100px] h-[100px] flex items-center md:min-w-[150px] md:w-[150px] bg-[#999] rounded">

            </div>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-1.5">
                    <div className="w-1/3 h-4 rounded bg-[#999]"></div>
                    <div className="w-1/2 h-4 rounded bg-[#999]"></div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <div className="w-[60px] h-4 rounded bg-[#999]"></div>
                </div>
                <button className="ml-auto bg-[#999c] py-1.5 px-4 rounded text-[#9990] mt-auto">Add to Cart</button>
            </div>
        </div>
    )
}

export default SkeletonProduct