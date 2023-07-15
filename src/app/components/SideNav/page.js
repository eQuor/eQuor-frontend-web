import React from "react";
import Image from "next/image";
import propic from "../../../../public/pro 3.png"
import sidebarimg from "../../../../public/sidebardown.png"

import { RiDashboardFill } from "react-icons/ri";
import { PiUserListBold,PiNotificationBold } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { AiOutlineBars } from "react-icons/ai";

function SideNav() {
  const Menues = [
    { title: "Dashboard"},
    { title: "User Management",icon:  <PiUserListBold/>},
    { title: "Staff member registration",icon:<LuUser/> },
    { title: "API requests",icon:<PiNotificationBold/> },
    { title: "Audit log",icon: <AiOutlineBars/>},
  ];
  return (
    <div className="bg-[#2B2B2B] w-96 m-2 rounded-md">
      <div className="mt-4">
        {/* add profile icon */}
        <div className=" pt-5 pb-3 pl-5">
          <Image src={propic} alt="profile pic"className="ml-5 mb-4"/>
          <h1 className=" uppercase text-white text-2xl font-bold">
            Madusha Tharindi
          </h1>
          <h3 className=" uppercase text-gray-500">admin</h3>
        </div>
      </div>
      <div className="bg-white h-[6px] mx-3"></div>
      <ul className=" mt-7">{
        Menues.map((menu,index)=>(
          <>
          <li key={index} className="text-white text-xl flex items-center gap-x-4 cursor-pointer p-4 hover:bg-[#0066ff] rounded-md mt-4 mx-3">
          <span className="text-2xl block float-left">
          {menu.icon ? menu.icon : <RiDashboardFill />}
          </span>
          <span>
            {menu.title}
          </span>
          </li>
          </>
        ))
        }</ul>
        <Image className="m-5" src={sidebarimg} alt="sidebardown" width={282} height={236}/>
    </div>
  );
}

export default SideNav;
