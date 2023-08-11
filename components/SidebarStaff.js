"use client";
import { AiOutlineFileText } from "react-icons/ai";
import { RiDashboardFill, RiPresentationFill } from "react-icons/ri";
import "@fontsource/open-sans";

function SidebarStaff({ open }) {
  const Menus = [
    { id: 1, title: "Dashboard" },
    { id: 2, title: "Modules", icon: <RiPresentationFill /> },
    { id: 3, title: "Medical Submission", icon: <RiPresentationFill /> },
    { id: 4, title: "Analytics", icon: <RiPresentationFill /> },
    { id: 5, title: "Help Center", icon: <RiPresentationFill /> },
  ];

  return (
    <div>
      <h1>Staff</h1>
      <ul className='pt-2'>
        {Menus.map((menu) => (
          <li
            key={menu.id}
            className={`text-[#012970] font-sans flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#DCE8FF] rounded-md mt-6`}
          >
            <span className='text-2xl block float-left'>
              {menu.icon ? menu.icon : <RiDashboardFill />}
            </span>
            <span
              className={`text-base font-semibold flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarStaff;
