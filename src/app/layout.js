import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import AuthProvider from '@/providers/AuthProvider'
import WriteButton from '@/components/writeButton/writeButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bulletin',
  description: 'Your Source for Web Tech Trends.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className='container'>
            <div className='wrapper'>
              <Navbar/>
              {children}
              <WriteButton/>
            </div>
            <Footer/>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
