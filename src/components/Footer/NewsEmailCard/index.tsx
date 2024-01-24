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
                IconElement={
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icon/send">
                            <path id="Vector 42 (Stroke)" d="M13.4264 2L3.57413 2C2.05971 2 1.27043 3.75699 2.29763 4.84156L4.35728 7.01627C4.6535 7.32903 4.81798 7.73905 4.81798 8.16469V12.3035C4.81798 13.9157 6.91093 14.6156 7.92644 13.343L14.7977 4.73263C15.6852 3.62047 14.872 2 13.4264 2Z" stroke="#434343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                }
            />
        </section>
    )
}

export default NewsEmailCard