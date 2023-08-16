'use client'
import { AiOutlineFileText } from 'react-icons/ai'
import {
  RiDashboardFill,
  RiPresentationFill,
  RiFileChartFill,
  RiDraftFill,
  RiQuestionAnswerFill
} from 'react-icons/ri'
import { PiStudentBold, PiChalkboardTeacherFill } from 'react-icons/pi'
import { MdPeople } from 'react-icons/md'
import '@fontsource/open-sans'
import Link from 'next/link'
import {
  BsFillPersonFill,
  BsBuildingFillLock,
  BsTools,
  BsFillFileBarGraphFill,
} from 'react-icons/bs'

function SidebarAdmin({ open }) {
  const Menus = [
    {
      topic: false,
      subitems: [
        { title: 'Dashboard', icon: <RiDashboardFill />, url: '/lecturer' },
      ],
    },
    {
      topic: 'Session management',
      subitems: [
        {
          title: 'Session',
          icon: <PiChalkboardTeacherFill />,
          url: '/lecturer/session/newSession',
        },
        { title: 'Groups', icon: <MdPeople />, url: '/lecturer/groups' },
      ],
    },
    // {
    //   topic: 'Interations',
    //   subitems: [
    //     {
    //       title: 'Polls',
    //       icon: <BsFillFileBarGraphFill />,
    //       url: '/lecturer',
    //     },
    //     {
    //       title: 'Q&A',
    //       icon: <RiQuestionAnswerFill />,
    //       url: '/lecturer',
    //     },
    //   ],
    // },
    {
      topic: 'Attendance',
      subitems: [
        {
          title: 'Attendance',
          icon: <RiFileChartFill />,
          url: '/lecturer/attendance',
        },
      ],
    },
  ]

  return (
    <div>
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <li key={index}>
            {menu.topic ? (
              <span
                className={`uppercase font-sans font-semibold text-[#899BBD] text-xs ${
                  !open && 'hidden'
                }`}
              >
                {menu.topic}
              </span>
            ) : (
              <span className="hidden"></span>
            )}
            <ul>
              {menu.subitems.map((subitem, index) => (
                <Link key={index} href={subitem.url}>
                  <li
                    key={index}
                    className={`text-[#012970] font-sans flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#DCE8FF] rounded-md mt-2 `}
                  >
                    <span key={index} className="text-2xl block float-left">
                      {subitem.icon ? subitem.icon : <RiDashboardFill />}
                    </span>
                    {subitem.title ? (
                      <span
                        className={`text-base font-semibold flex-1 duration-200 ${
                          !open && 'hidden'
                        }`}
                      >
                        {subitem.title}
                      </span>
                    ) : (
                      <span className=" hidden"></span>
                    )}
                  </li>
                </Link>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SidebarAdmin
