// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav>
//     <h1>Hello</h1>
//     </nav>
//   )
// }

// export default Navbar

"use client";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import logo from "./eQuor.svg";
import { links } from "./Data";
import { Butterfly_Kids } from "next/font/google";
import { IonIcon } from "@ionic/react";
import "@ionic/react/css/core.css";
import { menu, close } from "ionicons/icons";
import { useState } from "react";

const Navbar = () => {
  const links = [
    {
      id: 1,
      url: "/",
      text: "Home",
    },
    {
      id: 2,
      url: "/about",
      text: "About",
    },
    {
      id: 3,
      url: "/projects",
      text: "Account",
    },
    {
      id: 4,
      url: "/contact",
      text: "Contact",
    },
    {
      id: 5,
      url: "/profile",
      text: "Profile",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between  bg-[#0066FF] py-4 md:px-10 px-7 h-16">
        {/* <div className="flex items-center justify-between p-0 pl-2"> */}
        <Image src={logo} alt="eQuor" width={100} height={40} />
        {/* </div> */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
        >
          <IonIcon icon={open ? close : menu} />
        </div>
        {/* <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#0066FF] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in"> */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#0066FF] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-300px]"
          }`}
        >
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id} className="md:ml-8 text-xl md:my-0 my-3">
                <a
                  href="#"
                  className="text-white font-small hover:text-black duration-500"
                >
                  {text}
                </a>
              </li>
            );
          })}
          <button
            className="bg-black text-white  font-medium py-2 px-6 rounded md:ml-8 hover:bg-gray-900 
    duration-500"
          >
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
