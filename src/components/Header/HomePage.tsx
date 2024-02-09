import Field from "@components/Field";
import Image from "next/image";
import Link from "next/link";
import DesktopNavList from "./Components/DesktopNavList";
import MenuHamburguer from "@/components/Header/Components/MenuHamburguer";
import UserNavBar from "./Components/UserNavBar";
import CartIcon from "./Cart/CartIcon";
import Cart from "./Cart";

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

                            <CartIcon className="md:hidden" />

                        </div>
                        <Field
                            placeholder="Search Products"
                            ariaLabel="Search Products"
                            typeModel="search"
                            className=" w-[80px] sm:w-[200px] lg:w-[250px] lg:text-base"
                        />
                    </div>

                    <DesktopNavList />

                </div>

                <UserNavBar />
                <Cart />
            </nav>
        </header>
    )
}

export default Header