"use client";
import { AiOutlineFileText } from "react-icons/ai";
import { RiDashboardFill, RiPresentationFill,RiFileChartFill,RiDraftFill } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import "@fontsource/open-sans";

function Sidebar({ open }) {
<<<<<<< HEAD
    const Menus = [
      { topic: false, subitems: [{ title: "Dashboard" }] },
      {
        topic: "user management",
        subitems: [
          { title: "Lecturer", icon: <RiPresentationFill /> },
          { title: "Student", icon: <PiStudentBold/> },
        ],
      },
      {
        topic: "module management",
        subitems: [
          { title: "Module", icon: <RiPresentationFill /> },
        ],
      },
      {
        topic: "attendance management",
        subitems: [
          { title: "Attendance", icon: <RiFileChartFill/> },
          { title: "Absence Reports", icon: <RiDraftFill /> },
        ],
      },
    ];
  
    return (
      <div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <li key={index}>
              {menu.topic ? (
                <span className={`uppercase font-sans font-semibold text-[#899BBD] text-xs ${!open && "hidden"}`}>
                  {menu.topic}
                </span>
              ) : (
                <span className="hidden"></span>
              )}
              <ul>
                {menu.subitems.map((subitem, index) => (
                  <li
                    key={index}
                    className={`text-[#012970] font-sans flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#DCE8FF] rounded-md mt-2 `}
                  >
                    <span key={index} className="text-2xl block float-left">
                      {subitem.icon ? subitem.icon : <RiDashboardFill />}
                    </span>
                    {subitem.title ? (<span
                      className={`text-base font-semibold flex-1 duration-200 ${!open && "hidden"}`}
                    >
                      {subitem.title}
                    </span>): (<span className=" hidden"></span>)}
                    
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Sidebar;
  
=======
  const Menus = [
    { id: 1, title: 'Dashboard' },
    { id: 2, title: 'Modules', icon: <RiPresentationFill /> },
    { id: 3, title: 'Medical Submission', icon: <RiPresentationFill /> },
    { id: 4, title: 'Analytics', icon: <RiPresentationFill /> },
    { id: 5, title: 'Help Center', icon: <RiPresentationFill /> },
  ]

  return (
    <div>
      <ul className="pt-2">
        {Menus.map((menu) => (
          <li
            key={menu.id}

            
            className={`text-[#012970] font-sans flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#DCE8FF] rounded-md mt-6`}
          >
            <span className="text-2xl block float-left">
              {menu.icon ? menu.icon : <RiDashboardFill />}
            </span>
            <span
              className={`text-base font-semibold flex-1 duration-200 ${
                !open && 'hidden'
              }`}
            >
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar;
>>>>>>> 124cfde3446fa1ae00f4e7201db1093d770232a9
