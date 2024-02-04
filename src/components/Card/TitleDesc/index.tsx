import FavoriteButton from "@/components/Button/FavoriteButton";

interface TitleDescProps {
    name: string;
    description: string;
}

const TitleDesc = ({ name, description }: TitleDescProps) =>
    <div className="flex items-center w-full ">
        <div className="w-fit">
            <h2 className="w-fit text-[#262626] text-sm font-bold xl:text-xl cursor-pointer  hover:text-[#000a] ease-in-out duration-200">
                {name}
            </h2>
            <p className="text-2xs w-fit lg:hover:overflow-visible xl:text-base">
                {description}
            </p>
        </div>

        <FavoriteButton />
    </div>


export default TitleDesc