import type { Metadata } from 'next'
import './globals.css'
import { lato } from '@app/fonts'

export const metadata: Metadata = {
    title: 'Luminae',
    description: 'E-commerce de Venda de produtos, roupas, produtos eletrônicos e outros. (DEMONSTRATIVO E NÃO OFICIAL)',
    authors: [{ name: 'Marcos Paulo', url: 'https://github.com/M4rcosz' }],
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
