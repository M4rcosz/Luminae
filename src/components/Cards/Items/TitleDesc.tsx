import ButtonFavorite from "@/components/Button/ButtonFavorite";
import Link from "next/link";

interface TitleDescProps {
    name: string;
    description: string | null;
    href?: string;
}

const TitleDesc = ({ name, description, href = "#" }: TitleDescProps) =>
    <div className="flex items-center w-full ">
        <div className="w-fit">
            <Link
                href={href}
            >
                <h2 className="w-fit text-[#262626] text-sm font-bold xl:text-xl cursor-pointer  hover:text-[#000a] ease-in-out duration-200">
                    {name}
                </h2>
            </Link>
            <p className="text-2xs w-fit lg:hover:overflow-visible xl:text-base">
                {description}
            </p>
        </div>

        <ButtonFavorite />
    </div>


export default TitleDesc