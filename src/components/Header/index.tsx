'use client'
import styled from "@emotion/styled";
import Field from "@/components/Field";

const StyledHeader = styled.header`
padding: ${props => props.theme.spacing.md} 0;
margin: 0 ${props => props.theme.spacing.md};
height: max-content;
`

const CardNumber = styled.span`
background-color: ${props => props.theme.colors.secondary.s400};
border-radius: 50%;
width: 24px;
text-align: center;
`

const Header = () => {
    return (
        <>
            <StyledHeader>
                <div className="flex justify-between ">
                    <img src="/images/icons/hamburguer.svg" alt="hamburguer para abrir o menu" />
                    <img src="/images/icons/logo.svg" alt="icone da logo do site Luminae" />
                    <div className="flex items-center text-white gap-0.5">
                        <svg width="24" height="24" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.75 11.025L15.75 12.775C15.75 15.6745 18.1005 18.025 21 18.025C23.8995 18.025 26.25 15.6745 26.25 12.775V11.025" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M27.3203 5.77502H14.6801C11.2582 5.77502 8.33791 8.24892 7.77536 11.6242L4.85869 29.1242C4.14757 33.391 7.43787 37.275 11.7635 37.275H30.237C34.5626 37.275 37.8529 33.391 37.1418 29.1242L34.2251 11.6242C33.6625 8.24892 30.7422 5.77502 27.3203 5.77502Z" stroke="#434343" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                        <CardNumber>3</CardNumber>
                    </div>
                </div>
                <Field
                    placeholder="Search Producs"
                />
            </StyledHeader>
        </>
    )
}

export default Header