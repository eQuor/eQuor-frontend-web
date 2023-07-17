"use client";
import React from "react";
import Image from "next/image";
import propic from "../../../public/pro 3.png";
import sidebarimg from "../../../public/sidebardown.png";

import { RiDashboardFill } from "react-icons/ri";
import { PiUserListBold, PiNotificationBold } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { AiOutlineBars } from "react-icons/ai";

function SideNav() {
  const Menues = [
    { title: "Dashboard" },
    { title: "User Management", icon: <PiUserListBold /> },
    { title: "Staff registration", icon: <LuUser /> },
    { title: "API requests", icon: <PiNotificationBold /> },
    { title: "Audit log", icon: <AiOutlineBars /> },
  ];
  return (
    <>
      <div className='bg-[#2B2B2B] h-[100%] w-80 rounded-md relative ml-2'>
        <div>
          {/* add profile icon */}
          <div className=' pt-5 pb-3 pl-5'>
            <Image src={propic} alt='profile pic' className='ml-5 mb-4' />
            <h1 className=' uppercase text-white text-xl font-bold'>
              Madusha Tharindi
            </h1>
            <h3 className=' uppercase text-gray-500 text-sm'>admin</h3>
          </div>
        </div>
        <div className='bg-white h-[6px] mx-3'></div>
        <ul className=' mt-2'>
          {Menues.map((menu, index) => (
            <>
              <li
                key={index}
                className='text-white text-lg flex items-center gap-x-4 cursor-pointer p-3 hover:bg-[#0066ff] rounded-md mt-1 mx-3'
              >
                <span className='text-xl block float-left'>
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span>{menu.title}</span>
              </li>
            </>
          ))}
        </ul>
        <Image
          className='absolute bottom-3 left-10 w-52'
          src={sidebarimg}
          alt='sidebardown'
        />
      </div>
    </>
  );
}

export default SideNav;
