import Link from "next/link"

const DesktopNavList = () =>
    <div className="hidden px-Tablet md:flex justify-between w-full xl:gap-8 xl:px-0 xl:justify-normal xl:w-fit xl:whitespace-nowrap">
        <ul className="flex gap-8 text-sm text-[#555] font-semibold lg:text-base">
            <li className="hover:text-[#0006] hover:scale-105 ease-in-out duration-100">
                <Link href="#">About us</Link>
            </li>
            <li className="hover:text-[#0006] hover:scale-105 ease-in-out duration-100">
                <Link href="#">Blog</Link>
            </li>
            <li className="hover:text-[#0006] hover:scale-105 ease-in-out duration-100">
                <Link href="#">Contact us</Link>
            </li>
            <li className="hover:text-[#0006] hover:scale-105 ease-in-out duration-100">
                <Link href="#">Help & Support</Link>
            </li>
        </ul>

        <ul className="flex gap-1">
            <li>
                <a href="#" target="_blank">
                    <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="lg:w-6 lg:h-6 cursor-pointer *:hover:fill-[#333] hover:scale-125 ease-in-out duration-200"
                    >
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.5 3.5C5.73858 3.5 3.5 5.73858 3.5 8.5V33.5C3.5 36.2614 5.73858 38.5 8.5 38.5H33.5C36.2614 38.5 38.5 36.2614 38.5 33.5V8.5C38.5 5.73858 36.2614 3.5 33.5 3.5H8.5ZM31.5 12.25C32.4665 12.25 33.25 11.4665 33.25 10.5C33.25 9.5335 32.4665 8.75 31.5 8.75C30.5335 8.75 29.75 9.5335 29.75 10.5C29.75 11.4665 30.5335 12.25 31.5 12.25ZM29.75 21C29.75 25.8325 25.8325 29.75 21 29.75C16.1675 29.75 12.25 25.8325 12.25 21C12.25 16.1675 16.1675 12.25 21 12.25C25.8325 12.25 29.75 16.1675 29.75 21ZM21 26.25C23.8995 26.25 26.25 23.8995 26.25 21C26.25 18.1005 23.8995 15.75 21 15.75C18.1005 15.75 15.75 18.1005 15.75 21C15.75 23.8995 18.1005 26.25 21 26.25Z" fill="#C4C4C4" />
                    </svg>
                </a>
            </li>
            <li>
                <a href="#" target="">
                    <svg width="20" height="20" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="lg:w-6 lg:h-6 cursor-pointer *:hover:fill-[#333] hover:scale-125 ease-in-out duration-200"
                    >
                        <path d="M31.5 5.75H22.5C19.7386 5.75 17.5 7.98858 17.5 10.75V19.1667H10.5V26.8333H17.5V40.25H24.5V26.8333H31.5V19.1667H24.5V14.4167C24.5 13.8644 24.9477 13.4167 25.5 13.4167H31.5V5.75Z" fill="#C4C4C4" />
                    </svg>
                </a>
            </li>
            <li>
                <a href="#" target="">
                    <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="lg:w-6 lg:h-6 cursor-pointer *:hover:fill-[#333] hover:scale-125 ease-in-out duration-200"
                    >
                        <path d="M3.31927 18.7159L36.9466 4.18299C38.528 3.49956 40.2415 4.82944 39.9718 6.53094L35.374 35.5417C35.09 37.3336 32.8723 38.019 31.6268 36.6997L24.0815 28.7072C22.6018 27.1399 22.4858 24.7277 23.8083 23.0256L29.1359 16.169C29.4404 15.777 28.9595 15.2614 28.5473 15.5379L17.9549 22.6438C16.1574 23.8497 13.9764 24.3457 11.8342 24.0359L3.87338 22.8845C1.69258 22.5691 1.29659 19.5901 3.31927 18.7159Z" fill="#C4C4C4" />
                    </svg>
                </a>
            </li>
        </ul>
    </div>


export default DesktopNavList