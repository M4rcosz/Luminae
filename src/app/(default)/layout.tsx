import type { Metadata } from 'next'
import '@app/globals.css'
import { lato } from '@app/fonts'
import Header from '@/components/Header/HomePage'
import Footer from '@/components/Footer/HomePage'
import PopUp from '@/components/PopUp'
import { ClerkProvider } from '@clerk/nextjs'
import Hydrate from '@/components/utils/Hydrate'

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
  return (<ClerkProvider>
    <html lang="en">
      <body className={`${lato.className}`}>
        <PopUp />
        <Hydrate>
          <Header />
          {children}
          <Footer />
        </Hydrate>
      </body>
    </html>
  </ClerkProvider>
  )
}
