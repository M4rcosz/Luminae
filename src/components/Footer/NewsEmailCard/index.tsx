import Field from "@/components/Field"

const NewsEmailCard = () => {
    return (
        <section className="flex flex-col gap-3 bg-[#5050c5] py-4 px-4 sm:translate-y-1/2 sm:w-fit sm:mx-auto sm:rounded-lg sm:px-8 sm:py-6">
            <h2 className="text-whiteText font-bold text-xl text-center">
                Luminae
                <span className="text-[#dadada]"> Store</span>
            </h2>
            <p className="text-[#F4F4F4] text-center text-xs">Register your email not to miss the last minutes off+ Free delivery</p>
            <Field
                placeholder="Enter your email"
                className=""
                type="rightIcon"
                iconSrc="/images/icons/send.svg"
            />
        </section>
    )
}

export default NewsEmailCard