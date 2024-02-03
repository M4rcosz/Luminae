import Field from "@components/Field";
import Image from "next/image";
import Link from "next/link";
import BackgroundScreen from "@/components/utils/BackgroudScreen";
import DesktopNavList from "./DesktopNavList";
import MenuHamburguer from "./MenuHamburguer";
import NotificationPopUp from "../NotificationPopUp";

const Header = () => {

    return (
        <header className="max-w-[1440px] mx-auto lg:mb-10">
            <nav className="py-5 flex flex-col gap-5 md:pb-0">
                <div className="flex flex-col gap-5 xl:flex-row xl:gap-0 xl:justify-between xl:items-center xl:px-Tablet">

                    <div className="px-Mobile flex flex-col gap-8 md:flex-row md:justify-between md:px-Tablet xl:px-0 xl:flex-row xl:w-fit">
                        <div className="flex justify-between items-center">
                            <MenuHamburguer />

                            <Link href="/" className="flex gap-2 items-center">
                                <Image
                                    src={"/images/icons/Logo.png"}
                                    alt="logo do site Luminae"
                                    width={40}
                                    height={27}
                                    className="w-9 h-6 md:w-12 md:h-8"
                                />
                                <h1 className="text-xl font-bold md:text-2xl">Luminae</h1>
                            </Link>
                            <div className="flex items-center text-white gap-0.5 md:hidden">
                                <svg width="24" height="24" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.75 11.025L15.75 12.775C15.75 15.6745 18.1005 18.025 21 18.025C23.8995 18.025 26.25 15.6745 26.25 12.775V11.025" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M27.3203 5.77502H14.6801C11.2582 5.77502 8.33791 8.24892 7.77536 11.6242L4.85869 29.1242C4.14757 33.391 7.43787 37.275 11.7635 37.275H30.237C34.5626 37.275 37.8529 33.391 37.1418 29.1242L34.2251 11.6242C33.6625 8.24892 30.7422 5.77502 27.3203 5.77502Z" stroke="#434343" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>
                                <NotificationPopUp />
                            </div>
                        </div>
                        <Field
                            placeholder="Search Products"
                            ariaLabel="Search Products"
                            typeModel="search"
                            className=" w-[90px] sm:w-[200px] lg:w-[250px] lg:text-base"
                        />
                    </div>

                    <DesktopNavList />

                </div>

                <div className="hidden md:flex h-11 lg:h-[72px]">
                    <BackgroundScreen color="#262626" className="h-11 lg:h-[72px]" />
                    <div className="flex w-full justify-between items-center px-Mobile md:px-Tablet">
                        <span className="flex gap-1 items-center lg:gap-2 lg:text-xl">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="lg:w-8 lg:h-8"
                            >
                                <g id="Icon/categories">
                                    <path id="Vector" d="M10 6H16M10 14H16M10 10H22M10 18H22M3 10H5C5.55228 10 6 9.55228 6 9V7C6 6.44772 5.55228 6 5 6H3C2.44772 6 2 6.44772 2 7V9C2 9.55228 2.44772 10 3 10ZM3 18H5C5.55228 18 6 17.5523 6 17V15C6 14.4477 5.55228 14 5 14H3C2.44772 14 2 14.4477 2 15V17C2 17.5523 2.44772 18 3 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </g>
                            </svg>
                            <h2 className="text-whiteText font-bold">Categories</h2>
                        </span>

                        <div className="flex text-[#ddd] text-sm gap-10 lg:text-base">
                            <Link href="#" className="flex items-center gap-2 hover:text-[#fff] group hover:scale-105 ease-in-out duration-100">
                                <svg width="24" height="24" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="lg:w-8 lg:h-8 *:group-hover:stroke-2"
                                >
                                    <ellipse cx="21" cy="31.15" rx="12.25" ry="6.125" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                                    <circle cx="21" cy="12.775" r="7" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>

                                Sign In
                            </Link>
                            <Link href="#" className="flex items-center gap-2 hover:text-[#fff] group hover:scale-105 ease-in-out duration-100">
                                <svg width="24" height="24" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="lg:w-8 lg:h-8 *:group-hover:stroke-2"
                                >
                                    <path d="M22.3388 8.75403L21 10.1924L19.6612 8.75403C15.9641 4.78202 9.96991 4.78202 6.27282 8.75403C2.57573 12.726 2.57573 19.1659 6.27282 23.1379L18.3223 36.0834C19.8012 37.6722 22.1988 37.6722 23.6777 36.0834L35.7272 23.1379C39.4243 19.1659 39.4243 12.726 35.7272 8.75403C32.0301 4.78202 26.0359 4.78202 22.3388 8.75403Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>

                                Favorites
                            </Link>
                            <Link href="#" className="flex items-center gap-2 hover:text-[#fff] group hover:scale-105 ease-in-out duration-100">
                                <svg width="24" height="24" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="lg:w-8 lg:h-8 *:group-hover:stroke-2"
                                >
                                    <path d="M15.75 11.025L15.75 12.775C15.75 15.6745 18.1005 18.025 21 18.025C23.8995 18.025 26.25 15.6745 26.25 12.775V11.025" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M27.3203 5.77502H14.6801C11.2582 5.77502 8.33791 8.24892 7.77536 11.6242L4.85869 29.1242C4.14757 33.391 7.43787 37.275 11.7635 37.275H30.237C34.5626 37.275 37.8529 33.391 37.1418 29.1242L34.2251 11.6242C33.6625 8.24892 30.7422 5.77502 27.3203 5.77502Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>

                                Card
                                <NotificationPopUp />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header