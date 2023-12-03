import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Urban Craze',
  description: 'Urban Craze is my E-commerce app.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
