"use client"
import styled from "@emotion/styled";
import NewsEmailCard from "./NewsEmailCard";
import Image from "next/image";

const Container = styled.div`
background-color: ${props => props.theme.colors.footer.f100};
display: flex;
font-size: 14px;
flex-wrap: wrap;
row-gap: 40px;
padding: 40px 25px;
justify-content: center;

ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
    li{
        color: ${props => props.theme.colors.base.b600};
    }

    li:first-of-type{
        color: ${props => props.theme.colors.base.b800};
        font-weight: 700;
        margin-bottom: 5px;
    }
}
`

const Footer = () => {
    return (
        <footer>
            <NewsEmailCard />
            <Container>
                <ul>
                    <li>Company</li>
                    <li>About Us</li>
                    <li>Our Store</li>
                    <li>Contact us</li>
                </ul>
                <ul>
                    <li>Career Opportunities</li>
                    <li>Selling Programs</li>
                    <li>Advertise</li>
                    <li>Cooperation </li>
                </ul>
                <ul>
                    <li>How to Buy</li>
                    <li>Making Payments</li>
                    <li>Delivery Options</li>
                    <li>Buyer Protection</li>
                    <li>New User Guide</li>
                </ul>
                <ul>
                    <li>Help</li>
                    <li>Contacts Us</li>
                    <li>FAQ</li>
                    <li>Privacy Policy</li>
                </ul>
            </Container>

            <div>
                <ul className="flex grayscale justify-center gap-6 my-6">
                    <li className="flex justify-center">
                        <Image
                            src={"/images/icons/visa.svg"}
                            alt="Logo da VISA"
                            width={60}
                            height={60}
                            loading="lazy"

                        />
                    </li>
                    <li className="flex justify-center">
                        <Image
                            src={"/images/icons/mastercard.svg"}
                            alt="Logo da Mastercard"
                            width={40}
                            height={40}
                            loading="lazy"
                        />
                    </li>
                    <li className="flex justify-center">
                        <Image
                            src={"/images/icons/paypal.svg"}
                            alt="Logo do Paypal"
                            width={70}
                            height={70}
                            loading="lazy"
                        />
                    </li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer