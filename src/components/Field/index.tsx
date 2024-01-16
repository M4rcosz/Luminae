import styled from "@emotion/styled"

const StyledContainerInput = styled.div`
border: 1px solid ${props => props.theme.colors.base.b200};
border-radius: 4px;
margin: 48px 0 10px 0;
display: flex;
flex-wrap: wrap;
align-content: center;
padding: 8px 12px;
`

const StyledInput = styled.input`
flex: 1 1 0;
width:110px;
font-size: 14px;
position: relative;

&:focus{
    outline: none;
}
`

const StyledSearchButton = styled.button`
width: fit-content;
height: fit-content;
margin: auto 0;
padding: 0 0 0 12px;
border-left: 1px solid ${props => props.theme.colors.base.b100};
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const StyledCategoriesList = styled.span`
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
    placeholder: string
}


const Field = ({ placeholder }: FieldProps) => {
    return (
        <StyledContainerInput>
            <StyledInput type="search" placeholder={placeholder} aria-label="Pesquisar Produtos" />
            <StyledCategoriesList>All categories</StyledCategoriesList>
            <StyledSearchButton aria-label="Lupa de Pesquisa">
                <svg width="20" height="20" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.1395 39.9461L36.4553 36.2619M3.29736 20.604C3.29736 10.939 11.1324 3.104 20.7974 3.104C30.4623 3.104 38.2974 10.939 38.2974 20.604C38.2974 30.269 30.4623 38.104 20.7974 38.104C11.1324 38.104 3.29736 30.269 3.29736 20.604Z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </StyledSearchButton>
        </StyledContainerInput>
    )
}

export default Field