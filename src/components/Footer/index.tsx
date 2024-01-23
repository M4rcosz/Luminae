"use client"
import NewsEmailCard from "./NewsEmailCard";
import Image from "next/image";
import { containerPadX, style } from "@/common/styles/containerPadX";

const Footer = () => {

    const ulClasses = "flex flex-col gap-2.5 w-1/2 sm:w-fit";
    const liClasses = "text-[#555] first:text-[#262626] first:font-bold first:mb-1.5";

    return (
        <footer>
            <NewsEmailCard />
            <nav className={`${style(containerPadX)} flex flex-wrap bg-[#D1E2EB] text-sm justify-center py-10 gap-y-10 sm:gap-14 sm:pt-24`}>
                <ul className={ulClasses}>
                    <li className={liClasses}>Company</li>
                    <li className={liClasses}>About Us</li>
                    <li className={liClasses}>Our Store</li>
                    <li className={liClasses}>Contact us</li>
                </ul>
                <ul className={ulClasses}>
                    <li className={liClasses}>Career Opportunities</li>
                    <li className={liClasses}>Selling Programs</li>
                    <li className={liClasses}>Advertise</li>
                    <li className={liClasses}>Cooperation </li>
                </ul>
                <ul className={ulClasses}>
                    <li className={liClasses}>How to Buy</li>
                    <li className={liClasses}>Making Payments</li>
                    <li className={liClasses}>Delivery Options</li>
                    <li className={liClasses}>Buyer Protection</li>
                    <li className={liClasses}>New User Guide</li>
                </ul>
                <ul className={ulClasses}>
                    <li className={liClasses}>Help</li>
                    <li className={liClasses}>Contacts Us</li>
                    <li className={liClasses}>FAQ</li>
                    <li className={liClasses}>Privacy Policy</li>
                </ul>
            </nav>

            <div>
                <ul className="flex grayscale justify-center gap-6 my-6">
                    <li className="flex justify-center">
                        <Image
                            src={"/images/icons/visa.svg"}
                            alt="Logo da VISA"
                            width={60}
                            height={60}
                            loading="lazy"

                        />
                    </li>
                    <li className="flex justify-center">
                        <Image
                            src={"/images/icons/mastercard.svg"}
                            alt="Logo da Mastercard"
                            width={40}
                            height={40}
                            loading="lazy"
                        />
                    </li>
                    <li className="flex justify-center">
                        <Image
                            src={"/images/icons/paypal.svg"}
                            alt="Logo do Paypal"
                            width={70}
                            height={70}
                            loading="lazy"
                        />
                    </li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer