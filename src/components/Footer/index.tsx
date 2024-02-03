import Link from "next/link";
import NewsEmailCard from "./NewsEmailCard";
import Image from "next/image";

const Footer = () => {

    const ulClasses = "flex flex-col gap-2.5";
    const liClasses = "text-[#555] hover:text-black hover:scale-105 ease-in-out duration-200 w-fit";

    return (
        <footer className="pb-5">
            <NewsEmailCard />
            <nav className="px-Mobile md:px-Tablet flex flex-wrap bg-[#D1E2EB] text-sm justify-center py-10 gap-y-10 sm:gap-14 sm:pt-24 lg:text-base lg:gap-24 lg:pt-32 lg:pb-12">
                <div className="flex flex-col gap-2.5 w-1/2 sm:w-fit">
                    <h3 id="companyTitle" className="first:text-[#262626] first:font-bold first:mb-1.5">Company</h3>
                    <ul className={ulClasses} aria-labelledby="companyTitle">
                        <li className={liClasses}><Link href="#">About Us </Link></li>
                        <li className={liClasses}><Link href="#">Our Store </Link></li>
                        <li className={liClasses}><Link href="#">Contact us </Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2.5 w-1/2 sm:w-fit">
                    <h3 id="carrerOpTitle" className="first:text-[#262626] first:font-bold first:mb-1.5">Career Opportunities</h3>
                    <ul className={ulClasses} aria-labelledby="carrerOpTitle">
                        <li className={liClasses}><Link href="#">Selling Programs </Link></li>
                        <li className={liClasses}><Link href="#">Advertise </Link></li>
                        <li className={liClasses}><Link href="#">Cooperation  </Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2.5 w-1/2 sm:w-fit">
                    <h3 id="howToBuyTitle" className="first:text-[#262626] first:font-bold first:mb-1.5">How to Buy</h3>
                    <ul className={ulClasses} aria-labelledby="howToBuyTitle">
                        <li className={liClasses}><Link href="#">Making Payments </Link></li>
                        <li className={liClasses}><Link href="#">Delivery Options </Link></li>
                        <li className={liClasses}><Link href="#">Buyer Protection </Link></li>
                        <li className={liClasses}><Link href="#">New User Guide </Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2.5 w-1/2 sm:w-fit">
                    <h3 id="helpTitle" className="first:text-[#262626] first:font-bold first:mb-1.5">Help</h3>
                    <ul className={ulClasses} aria-labelledby="helpTitle">
                        <li className={liClasses}><Link href="#">Contacts Us </Link></li>
                        <li className={liClasses}><Link href="#">FAQ </Link></li>
                        <li className={liClasses}><Link href="#">Privacy Policy </Link></li>
                    </ul>
                </div>
            </nav>

            <div>
                <ul className="flex grayscale justify-center gap-6 py-6 bg-white">
                    <li className="flex justify-center">
                        <Image
                            src={"/images/icons/visa.svg"}
                            alt="Logo da VISA"
                            width={60}
                            height={60}
                            className="w-auto h-auto"
                            loading="lazy"
                        />
                    </li>
                    <li className="flex justify-center">
                        <Image
                            src={"/images/icons/mastercard.svg"}
                            alt="Logo da Mastercard"
                            width={40}
                            height={40}
                            className="w-auto h-auto"
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

            <span className="flex justify-center items-center gap-1 bg-white">
                <p className="text-xs xs:text-sm text-[#555]">Site não comercial com fins demonstrativos - </p>
                <a href="https://github.com/M4rcosz" target="_blank" className="text-base text-black hover:text-[#c00] hover:underline decoration-black hover:scale-105 ease-in-out duration-300">M4rcosz</a>
            </span>
        </footer>
    )
}

export default Footer