import { Inter } from 'next/font/google'
import './globals.css'
import Layout from './layout/layout'
import Providers from './redux/Providers'
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>
      {/* <ToastContainer 
       position="top-center"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop
       closeOnClick
       rtl={false}
       pauseOnFocusLoss={false}
       draggable={false}
       pauseOnHover
       theme="light" 
       transition={Flip}
      /> */}
      <Layout/>
      {children}
      </body>
      </Providers>
    </html>
  )
}
