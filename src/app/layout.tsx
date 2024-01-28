import type { Metadata } from 'next'
import './globals.css'
import { lato } from '@app/fonts'

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
            <body className={`${lato.className}`}>
                {children}
            </body>
        </html>
    </>
    )
}
