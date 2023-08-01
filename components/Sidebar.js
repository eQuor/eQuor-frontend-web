"use client";
import { AiOutlineFileText } from "react-icons/ai";
import { RiDashboardFill,RiPresentationFill } from "react-icons/ri";
import "@fontsource/open-sans";
function Sidebar({ open }) {
  const Menus = [
    { title: "Dashboard" },
    { title: "Modules",icon: <RiPresentationFill/> },
    { title: "Medical Submission",icon: <RiPresentationFill/> },
    { title: "Analytics",icon: <RiPresentationFill/> },
    { title: "Help Center",icon: <RiPresentationFill/> },
    
  ];
  return (
    <div>
      {/* <AiOutlineLineChart className=" text-3xl ml-3 text-[#012970]"/>
        <span htmlFor="" className={`font-sans uppercase ${!open && " hidden"} text-xs duration-300 font-semibold text-[#899BBD] p-2`}>modules</span> */}
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <>
            <li
              key={index}
              className={`text-[#012970] font-sans flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#DCE8FF] rounded-md mt-6 `}
            >
              <span className="text-2xl block float-left">
                {menu.icon ? menu.icon : <RiDashboardFill />}
              </span>
              <span
                className={`text-base font-semibold  flex-1 duration-200 ${
                  !open && "hidden"
                }`}
              >
                {menu.title}
              </span>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
