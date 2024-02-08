import Field from "@components/Field"

const CardNewsEmail = () => {
    return (
        <section className="flex flex-col gap-3 bg-[#5050c5] px-8 py-6 max-h-[154px] sm:translate-y-1/2 sm:w-fit sm:mx-auto sm:rounded-lg lg:max-h-[166px]">
            <h2 className="text-whiteText font-bold text-xl text-center lg:text-2xl">
                Luminae
                <span className="text-[#dadada]"> Store</span>
            </h2>
            <p className="text-[#F4F4F4] text-center text-xs lg:text-sm">Register your email not to miss the last minutes off+ Free delivery</p>
            <Field
                placeholder="Enter your email"
                className="lg:text-base"
                typeModel="emailRegister"
                IconElement={
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className=" lg:w-5 lg:h-5 group hover:scale-125 ease-in-out duration-300">
                        <g id="Icon/send">
                            <path id="Vector 42 (Stroke)" d="M13.4264 2L3.57413 2C2.05971 2 1.27043 3.75699 2.29763 4.84156L4.35728 7.01627C4.6535 7.32903 4.81798 7.73905 4.81798 8.16469V12.3035C4.81798 13.9157 6.91093 14.6156 7.92644 13.343L14.7977 4.73263C15.6852 3.62047 14.872 2 13.4264 2Z" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                className="group-hover:stroke-black group-hover:stroke-2"
                            />
                        </g>
                    </svg>
                }
            />
        </section>
    )
}

export default CardNewsEmail