"use client";
import React from "react";
import Navbar from "@components/Navbar";
import SidebarAdmin from "@components/SidebarAdmin";
import SidebarLecturer from "@components/SidebarLecturer";
import SidebarStaff from "@components/SidebarStaff";
import SidebarStudent from "@components/SidebarStudent";
import { Children, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAuth } from "@contexts/authContext";

const metadata = {
  title: "eQuor",
  description: "Keep you in know",
};

function MainContextLayout({ children }) {
  //check is authenticated
  const router = useRouter();
  const { isAuth, setIsAuth } = useAuth();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {}, [isAuth]);

  if (!isAuth) {
    router.push("/auth/signin");

    if (pathname.includes("/auth/")) {
      return <body>{children}</body>;
    } else {
      return <></>;
    }
  } else {
    if (pathname.includes("/auth/")) {
      router.push("/");
      return <></>;
    }

    let userType;

    const segment = pathname.split("/")[1];
    if (segment === "admin") {
      userType = 1;
    } else if (segment === "staff") {
      userType = 2;
    } else if (segment === "lecturer") {
      userType = 3;
    } else if (segment === "student") {
      userType = 4;
    } else {
      userType = 1;
    }

    return (
      <>
        <main className='layout-with-sidebar layout relative z-0'>
          <header>
            <Navbar />
          </header>

          <aside
            className={`bg-white h-[100%] p-3 pt-8 ${
              open ? "w-[300px] absolute" : "w-[100%] min-w-[80px]"
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
          </aside>
          <section>{children}</section>
        </main>
      </>
    );
  }
}

export default MainContextLayout;
