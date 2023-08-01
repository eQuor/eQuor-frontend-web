'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaBell } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'

const Navbar = () => {
  //const isUserLoggedIn = false

  const [isUserLoggedIn, setState] = useState(false)
  const [toggleDropDown, SetToggleDropdown] = useState(false)

  return (
    <nav className=" fixed flex-between top-0 left-0 z-50 bg-white w-full py-1.5 shadow-md">
      <Link href="/" className="flex gap-2 ml-5 items-center">
        <Image
          src="eQuor.svg"
          alt="eQuor Logo"
          width={100}
          height={100}
          className="object"
        />
      </Link>

      {/* Desktop Naviagation */}
      <div className="sm:flex hidden ">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            {/* <div className="py-4">
              <FaBell />
            </div> */}

            <Link href="/profile">
              <Image
                src="/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              ></Image>
            </Link>
            <span
              // mr-4
              className="py-1 mr-0 pl-0"
              onClick={() => setState(!isUserLoggedIn)}
            >
              Tharusha Pathirana
            </span>
            <div
              className="mt-2 ml-0 mr-3"
              onClick={() => SetToggleDropdown((prev) => !prev)}
            >
              <IoMdArrowDropdown />
            </div>
            {toggleDropDown && (
              <div className="dropdown">
                <button
                  type="button"
                  onClick={() => {
                    SetToggleDropdown(false)
                    signOut()
                  }}
                  className="mt-5 w-full log-in"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => setState(!isUserLoggedIn)}
            className="log-in mr-4"
          >
            Log in
          </button>
        )}
      </div>
      {/* Mobile Nevigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div div className="flex">
            <Image
              src="/logo.svg"
              width={37}
              height={37}
              className="rounded-full mr-4"
              alt="profile"
              onClick={() => SetToggleDropdown((prev) => !prev)}
            ></Image>
            {toggleDropDown && (
              <div className="dropdown">
                <button
                  type="button"
                  onClick={() => {
                    SetToggleDropdown(false)
                    signOut()
                  }}
                  className="mt-5 w-full log-in"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => setState(!isUserLoggedIn)}
            className="log-in mr-4"
          >
            Log in
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
