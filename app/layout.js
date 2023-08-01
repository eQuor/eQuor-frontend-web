'use client'
import Sidebar from '@components/Sidebar'
import '@styles/globals.css'
import { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'

const RootLayout = ({ children }) => {
  const isUserLoggedIn = false

  const [open, setOpen] = useState(false)
  return (
    <html lang="en">
      {isUserLoggedIn ? (
        <body>
          <main className="layout-with-sidebar layout relative">
            <header className=" h-12 shadow-2xl">lsafhv</header>
            <aside
              className={`bg-white h-[100%] p-3 pt-8 ${
                open ? 'w-[300px]' : 'w-[100%]'
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
          <main className="layout-without-sidebar layout relative">
            <header className=" h-12 shadow-2xl">lsafhv</header>

            <section>{children}</section>
          </main>
        </body>
      )}
    </html>
  )
}

export default RootLayout
