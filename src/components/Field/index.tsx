import styled from "@emotion/styled"

const ContainerInput = styled.div<{ icon?: string }>`
border: 1px solid ${props => props.theme.colors.base.b200};
border-radius: 4px;
display: flex;
flex-wrap: wrap;
align-content: center;
padding: 8px 12px;

&::after{
    content: url(${props => props.icon ? props.icon : ""});
}
`

const Input = styled.input`
flex: 1 1 0;
font-size: 14px;
position: relative;

&:focus{
    outline: none;
}
`

const SearchButton = styled.button`
width: fit-content;
height: fit-content;
margin: auto 0;
padding: 0 0 0 12px;
border-left: 1px solid ${props => props.theme.colors.base.b100};
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const CategoriesList = styled.span`
position: relative;
white-space: nowrap;
font-size: 14px;
margin: auto 0;
padding: 0 25px 0 0;
&::after{
    content: url("/images/icons/arrow.svg");
    width: 24px;
    height: 24px;
    position: absolute;
    right: 0;
    bottom: 50%;
    transform: translateY(50%);
}
`

interface FieldProps {
    placeholder?: string;
    type?: "search" | "rightIcon" | "none";
    className?: string;
    ariaLabel?: string;
    iconSrc?: string;
}


const Field = ({ placeholder, type = "none", className, ariaLabel, iconSrc }: FieldProps) => {

    if (type === "search")
        return <ContainerInput>
            <Input
                type="search"
                placeholder={placeholder}
                aria-label={ariaLabel}
                className={`bg-[#fff0] ${className}`}
            />
            <CategoriesList>All categories</CategoriesList>
            <SearchButton aria-label="Lupa de Pesquisa">
                <svg width="20" height="20" viewBox="0 0 42 43" fill="none" xmlns="http:www.w3.org/2000/svg">
                    <path d="M40.1395 39.9461L36.4553 36.2619M3.29736 20.604C3.29736 10.939 11.1324 3.104 20.7974 3.104C30.4623 3.104 38.2974 10.939 38.2974 20.604C38.2974 30.269 30.4623 38.104 20.7974 38.104C11.1324 38.104 3.29736 30.269 3.29736 20.604Z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </SearchButton>
        </ContainerInput>

    else if (type === "rightIcon")
        return <ContainerInput
            className="bg-whiteText after:top-1/2  after:h-4 after:w-4"
            icon={iconSrc}
        >
            <Input
                type="email"
                placeholder={placeholder}
                aria-label={placeholder}
                className={`bg-whiteText w-full ${className}`}
            />
        </ContainerInput>

    else if (type === "none")
        return <Input
            type="text"
            placeholder={placeholder}
            aria-label={placeholder}
            className={`bg-whiteText py-2 px-3 rounded w-full  ${className}`}
        />

}

export default Field