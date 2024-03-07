// "use client"
import BackgroundScreen from "@/components/utils/BackgroudScreen"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import CartIcon from "@components/Header/Cart/CartIcon"

const UserNavBar = () => {

    // const {user} = useUser();

    return (
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
                    <SignedOut>
                        <Link href="/sign-in" className="flex items-center gap-2 hover:text-[#fff] group ease-in-out duration-100">
                            <svg width="24" height="24" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="lg:w-8 lg:h-8 *:group-hover:stroke-2"
                            >
                                <ellipse cx="21" cy="31.15" rx="12.25" ry="6.125" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                                <circle cx="21" cy="12.775" r="7" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>

                            Sign In
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <div className="flex items-center gap-2 hover:text-[#fff] group ease-in-out duration-100">
                            <UserButton />
                            {/* <p className="cursor-pointer">{user?.fullName}</p> */}
                        </div>
                    </SignedIn>
                    <Link href="#" className="flex items-center gap-2 hover:text-[#fff] group ease-in-out duration-100">
                        <svg width="24" height="24" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="lg:w-8 lg:h-8 *:group-hover:stroke-2"
                        >
                            <path d="M22.3388 8.75403L21 10.1924L19.6612 8.75403C15.9641 4.78202 9.96991 4.78202 6.27282 8.75403C2.57573 12.726 2.57573 19.1659 6.27282 23.1379L18.3223 36.0834C19.8012 37.6722 22.1988 37.6722 23.6777 36.0834L35.7272 23.1379C39.4243 19.1659 39.4243 12.726 35.7272 8.75403C32.0301 4.78202 26.0359 4.78202 22.3388 8.75403Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>

                        Favorites
                    </Link>
                    <CartIcon stroke="#fff" svgClassName="*:group-hover:stroke-2 lg:w-8 lg:h-8">
                        Cart
                    </CartIcon>
                </div>
            </div>
        </div>
    )
}

export default UserNavBar