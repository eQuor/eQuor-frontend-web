'use client'
import Sidebar from '@components/Sidebar'
import Navbar from '@components/Navbar'
import '@styles/globals.css'
import { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'

export const metadata = {
  title: 'eQuor',
  description: 'Keep you in know',
}

const RootLayout = ({ children }) => {
  const isUserLoggedIn = true


  const [open, setOpen] = useState(false)
  return (
    <html lang="en">
      {isUserLoggedIn ? (
        <body>
<<<<<<< HEAD
         
          <main className="layout-with-sidebar layout relative z-0">
            
          <header><Navbar/></header>
            <aside
              className={`bg-white h-[100%] p-3 pt-8 ${
                open ? 'w-[300px]' : 'w-[100%] min-w-[80px]'
=======
          {/* <Navbar /> */}
          <main className="layout-with-sidebar layout relative z-0">
            <header>
              <Navbar />
            </header>

            <aside
              className={`bg-white h-[100%] p-3 pt-8 -z-2 ${
                open ? 'w-[300px]' : 'w-[100%]'
>>>>>>> 124cfde3446fa1ae00f4e7201db1093d770232a9
              } duration-300 absolute`}
            >
              <BsArrowLeftShort
                className={`text-3xl absolute -right-3 top-9 border rounded-full border-[#8198c0] bg-[#DCE8FF] ${
                  !open && 'rotate-180'
                }`}
                onClick={() => {
                  setOpen(!open)
                }}
              />
              <Sidebar open={open} />
            </aside>
            <section>{children}</section>
          </main>
        </body>
      ) : (
        <body>
          <main className="layout-without-sidebar layout relative z-0">
          <header><Navbar/></header>

            <section>{children}</section>
          </main>
        </body>
      )}
    </html>
  )
}

export default RootLayout
