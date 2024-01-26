import Link from "next/link";
import NewsEmailCard from "./NewsEmailCard";
import Image from "next/image";

const Footer = () => {

    const ulClasses = "flex flex-col gap-2.5 w-1/2 sm:w-fit ";
    const liClasses = "text-[#555] hover:text-black hover:scale-105 ease-in-out duration-200 w-fit";

    return (
        <footer>
            <NewsEmailCard />
            <nav className="px-Mobile md:px-Tablet flex flex-wrap bg-[#D1E2EB] text-sm justify-center py-10 gap-y-10 sm:gap-14 sm:pt-24 lg:text-base lg:gap-24 lg:pt-32 lg:pb-12">
                <ul className={ulClasses}>
                    <h4 className="first:text-[#262626] first:font-bold first:mb-1.5">Company</h4>
                    <li className={liClasses}><Link href="#">About Us </Link></li>
                    <li className={liClasses}><Link href="#">Our Store </Link></li>
                    <li className={liClasses}><Link href="#">Contact us </Link></li>
                </ul>
                <ul className={ulClasses}>
                    <h4 className="first:text-[#262626] first:font-bold first:mb-1.5">Career Opportunities</h4>
                    <li className={liClasses}><Link href="#">Selling Programs </Link></li>
                    <li className={liClasses}><Link href="#">Advertise </Link></li>
                    <li className={liClasses}><Link href="#">Cooperation  </Link></li>
                </ul>
                <ul className={ulClasses}>
                    <h4 className="first:text-[#262626] first:font-bold first:mb-1.5">How to Buy</h4>
                    <li className={liClasses}><Link href="#">Making Payments </Link></li>
                    <li className={liClasses}><Link href="#">Delivery Options </Link></li>
                    <li className={liClasses}><Link href="#">Buyer Protection </Link></li>
                    <li className={liClasses}><Link href="#">New User Guide </Link></li>
                </ul>
                <ul className={ulClasses}>
                    <h4 className="first:text-[#262626] first:font-bold first:mb-1.5">Help</h4>
                    <li className={liClasses}><Link href="#">Contacts Us </Link></li>
                    <li className={liClasses}><Link href="#">FAQ </Link></li>
                    <li className={liClasses}><Link href="#">Privacy Policy </Link></li>
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

            <span className="flex justify-center items-center gap-1 mb-5 ">
                <p className="text-sm text-[#555]">Site não comercial com fins demonstrativos - </p>
                <a href="https://github.com/M4rcosz" className="text-base text-black hover:text-[#c00] hover:underline decoration-black hover:scale-105 ease-in-out duration-300">M4rcosz</a>
            </span>
        </footer>
    )
}

export default Footer