// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav>
//     <h1>Hello</h1>
//     </nav>
//   )
// }

// export default Navbar

//'use client'
import Image from 'next/image'
//import React, { useState } from 'react'
import Button from './Button'
import 'tailwindcss/tailwind.css'
import logo from './eQuor.svg'
import { links} from './Data'
import { Butterfly_Kids } from 'next/font/google'



const Navbar = () => {
  
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between  bg-blue-500 py-4 md:px-10 px-7">
        <div className="flex items-center justify-between p-0 pl-2">
          <Image src={logo} alt="eQuor" width={100} height={50} />
        </div>

        <ul className="md:flex md:items-center">
          {links.map((link) => {
            const { id, url, text } = link
            return (
              <li key={id} className="md:ml-8 text-xl">
                <a
                  href="#"
                  className="text-white font-medium hover:text-gray-400 duration-500"
                >
                  {text}
                </a>
              </li>
            )
          })}
          <Button>
          Login
          </Button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
