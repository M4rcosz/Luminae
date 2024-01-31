import type { Metadata } from 'next'
import '@app/globals.css'
import { lato } from '@app/fonts'
import Header from '@components/Header'
import Footer from '@components/Footer'
import PopUp from '@/components/PopUp'

export const metadata: Metadata = {
  title: 'Luminae',
  description: 'E-commerce de Venda de produtos, roupas, produtos eletrônicos e outros.',
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
        <PopUp />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  </>
  )
}
