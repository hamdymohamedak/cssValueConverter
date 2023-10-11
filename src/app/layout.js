import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'cssValue converter',
  description: 'cssValue converter ',
}

export default function RootLayout({ children }) {
  return (
    <html className='html' lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
