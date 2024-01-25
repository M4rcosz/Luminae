import type { Metadata } from 'next'
import './globals.css'
// import ThemeProviderComp from '@components/ThemeProviderComp'
import { lato } from '@app/fonts'
// import Footer from '@components/Footer'

export const metadata: Metadata = {
    title: 'Luminae',
    description: 'E-commerce de Venda de produtos, roupas, produtos eletrônicos e outros.',
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (<>
        <html lang="en">
            <body className={`${lato.className} bg-[#F4F4F4]`}>
                {/* <ThemeProviderComp> */}
                {children}
                {/* <Footer /> */}
                {/* </ThemeProviderComp> */}
            </body>
        </html>
    </>
    )
}
