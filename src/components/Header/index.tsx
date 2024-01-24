'use client'
import Field from "@/components/Field";
import Image from "next/image";
import { containerPadX, style } from "@/common/styles/containerPadX";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="py-5 flex flex-col gap-5">
                <nav className={`${style(containerPadX)} flex flex-col gap-8 md:flex-row md:justify-between`}>
                    <div className="flex justify-between items-center">
                        <svg width="20" height="16" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="md:hidden"
                            aria-label="menu hamburguer"
                            role="button"
                        >
                            <g id="Menue icon">
                                <line id="Line 119" x1="1.05" y1="1.41924" x2="19.95" y2="1.41924" stroke="#023047" stroke-width="2.1" stroke-linecap="round" />
                                <line id="Line 120" x1="1.05" y1="8.41924" x2="19.95" y2="8.41924" stroke="#023047" stroke-width="2.1" stroke-linecap="round" />
                                <line id="Line 121" x1="1.05" y1="15.4192" x2="19.95" y2="15.4192" stroke="#023047" stroke-width="2.1" stroke-linecap="round" />
                            </g>
                        </svg>

                        <div className="flex gap-2 items-center">
                            <Image
                                src={"/images/icons/Logo.png"}
                                alt="logo do site Luminae"
                                width={40}
                                height={27}
                                className="w-9 h-6 md:w-12 md:h-8"
                            />
                            <h1 className="text-xl font-bold md:text-2xl">Luminae</h1>
                        </div>
                        <div className="flex items-center text-white gap-0.5 md:hidden">
                            <svg width="24" height="24" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.75 11.025L15.75 12.775C15.75 15.6745 18.1005 18.025 21 18.025C23.8995 18.025 26.25 15.6745 26.25 12.775V11.025" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M27.3203 5.77502H14.6801C11.2582 5.77502 8.33791 8.24892 7.77536 11.6242L4.85869 29.1242C4.14757 33.391 7.43787 37.275 11.7635 37.275H30.237C34.5626 37.275 37.8529 33.391 37.1418 29.1242L34.2251 11.6242C33.6625 8.24892 30.7422 5.77502 27.3203 5.77502Z" stroke="#434343" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                            <span className="flex justify-center items-center h-5 w-5 rounded-full bg-[#3DC47E] text-sm">3</span>
                        </div>
                    </div>
                    <Field
                        placeholder="Search Producs"
                        ariaLabel="Search Producs"
                        type="search"
                        className=" w-[110px] sm:w-[200px]"
                    />
                </nav>
                <nav className="hidden md:flex flex-col gap-4">
                    <div className={`${style(containerPadX)} flex justify-between w-full`}>
                        <ul className="flex gap-8 text-sm text-[#555] font-semibold">
                            <li>About us</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                            <li>Help & Support</li>
                        </ul>

                        <ul className="flex gap-1">
                            <li>
                                <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 3.5C5.73858 3.5 3.5 5.73858 3.5 8.5V33.5C3.5 36.2614 5.73858 38.5 8.5 38.5H33.5C36.2614 38.5 38.5 36.2614 38.5 33.5V8.5C38.5 5.73858 36.2614 3.5 33.5 3.5H8.5ZM31.5 12.25C32.4665 12.25 33.25 11.4665 33.25 10.5C33.25 9.5335 32.4665 8.75 31.5 8.75C30.5335 8.75 29.75 9.5335 29.75 10.5C29.75 11.4665 30.5335 12.25 31.5 12.25ZM29.75 21C29.75 25.8325 25.8325 29.75 21 29.75C16.1675 29.75 12.25 25.8325 12.25 21C12.25 16.1675 16.1675 12.25 21 12.25C25.8325 12.25 29.75 16.1675 29.75 21ZM21 26.25C23.8995 26.25 26.25 23.8995 26.25 21C26.25 18.1005 23.8995 15.75 21 15.75C18.1005 15.75 15.75 18.1005 15.75 21C15.75 23.8995 18.1005 26.25 21 26.25Z" fill="#C4C4C4" />
                                </svg>

                            </li>
                            <li>
                                <svg width="20" height="20" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.5 5.75H22.5C19.7386 5.75 17.5 7.98858 17.5 10.75V19.1667H10.5V26.8333H17.5V40.25H24.5V26.8333H31.5V19.1667H24.5V14.4167C24.5 13.8644 24.9477 13.4167 25.5 13.4167H31.5V5.75Z" fill="#C4C4C4" />
                                </svg>

                            </li>
                            <li>
                                <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.31927 18.7159L36.9466 4.18299C38.528 3.49956 40.2415 4.82944 39.9718 6.53094L35.374 35.5417C35.09 37.3336 32.8723 38.019 31.6268 36.6997L24.0815 28.7072C22.6018 27.1399 22.4858 24.7277 23.8083 23.0256L29.1359 16.169C29.4404 15.777 28.9595 15.2614 28.5473 15.5379L17.9549 22.6438C16.1574 23.8497 13.9764 24.3457 11.8342 24.0359L3.87338 22.8845C1.69258 22.5691 1.29659 19.5901 3.31927 18.7159Z" fill="#C4C4C4" />
                                </svg>

                            </li>
                        </ul>
                    </div>
                    <div className="bg-[#262626] py-2">
                        <div className={`${style(containerPadX)} flex justify-between items-center`}>
                            <span className="flex gap-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icon/categories">
                                        <path id="Vector" d="M10 6H16M10 14H16M10 10H22M10 18H22M3 10H5C5.55228 10 6 9.55228 6 9V7C6 6.44772 5.55228 6 5 6H3C2.44772 6 2 6.44772 2 7V9C2 9.55228 2.44772 10 3 10ZM3 18H5C5.55228 18 6 17.5523 6 17V15C6 14.4477 5.55228 14 5 14H3C2.44772 14 2 14.4477 2 15V17C2 17.5523 2.44772 18 3 18Z" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                    </g>
                                </svg>
                                <h2 className="text-whiteText font-bold">Categories</h2>
                            </span>

                            <div className="flex text-[#ddd] text-sm gap-10 ">
                                <Link href="#" className="flex items-center gap-1 ">
                                    <svg width="24" height="24" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="21" cy="31.15" rx="12.25" ry="6.125" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" />
                                        <circle cx="21" cy="12.775" r="7" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" />
                                    </svg>

                                    Sign In
                                </Link>
                                <Link href="#" className="flex items-center gap-1">
                                    <svg width="24" height="24" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.3388 8.75403L21 10.1924L19.6612 8.75403C15.9641 4.78202 9.96991 4.78202 6.27282 8.75403C2.57573 12.726 2.57573 19.1659 6.27282 23.1379L18.3223 36.0834C19.8012 37.6722 22.1988 37.6722 23.6777 36.0834L35.7272 23.1379C39.4243 19.1659 39.4243 12.726 35.7272 8.75403C32.0301 4.78202 26.0359 4.78202 22.3388 8.75403Z" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" />
                                    </svg>

                                    Favorites
                                </Link>
                                <Link href="#" className="flex items-center gap-1">
                                    <svg width="24" height="24" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.75 11.025L15.75 12.775C15.75 15.6745 18.1005 18.025 21 18.025C23.8995 18.025 26.25 15.6745 26.25 12.775V11.025" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M27.3203 5.77502H14.6801C11.2582 5.77502 8.33791 8.24892 7.77536 11.6242L4.85869 29.1242C4.14757 33.391 7.43787 37.275 11.7635 37.275H30.237C34.5626 37.275 37.8529 33.391 37.1418 29.1242L34.2251 11.6242C33.6625 8.24892 30.7422 5.77502 27.3203 5.77502Z" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" />
                                    </svg>

                                    Card
                                    <span className="flex justify-center items-center h-5 w-5 rounded-full bg-[#3DC47E] text-sm">3</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header