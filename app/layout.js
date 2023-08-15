"use client";
import Navbar from "@components/Navbar";
import SidebarAdmin from "@components/SidebarAdmin";

import SidebarLecturer from "@components/SidebarLecturer";
import SidebarStaff from "@components/SidebarStaff";
import SidebarStudent from "@components/SidebarStudent";
import "@styles/globals.css";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

export const metadata = {
  title: "eQuor",
  description: "Keep you in know",
};

const RootLayout = ({ children }) => {
  const isUserLoggedIn = true;
  const userType = 2;

  const [open, setOpen] = useState(false);
  return (
    <html lang='en'>
      {isUserLoggedIn ? (
        <body>
          {/* <Navbar /> */}
          <main className='layout-with-sidebar layout relative z-0'>
            <header>
              <Navbar />
            </header>

            <aside
              className={`bg-white h-[100%] p-3 pt-8 ${
                open ? 'w-[300px] absolute' : 'w-[100%] min-w-[80px]'
              } duration-300 absolute`}
            >
              <BsArrowLeftShort
                className={`text-3xl absolute -right-3 top-9 border rounded-full border-[#8198c0] bg-[#DCE8FF] ${
                  !open && "rotate-180"
                }`}
                onClick={() => {
                  setOpen(!open);
                }}
              />
              {userType === 1 ? (
                /* admin*/ <SidebarAdmin open={open} />
              ) : userType === 2 ? (
                /*staff*/ <SidebarStaff open={open} />
              ) : userType === 3 ? (
                /*lecturer*/ <SidebarLecturer open={open} />
              ) : userType === 4 ? (
                /*student*/ <SidebarStudent open={open} />
              ) : (
                console.log("Invalid user type")
              )}
              {/*<Navbar />*/}
            </aside>
            <section>{children}</section>
          </main>
        </body>
      ) : (
        <body>
          <main className="layout-without-sidebar layout relative z-0">
          <header><Navbar/></header>

            <section>{children}</section>
          </main>
        </body>
      )}
    </html>
  );
};

export default RootLayout;
