import React, { useState } from "react";
import Navbar from "@components/Navbar";
import SidebarAdmin from "@components/SidebarAdmin";
import SidebarLecturer from "@components/SidebarLecturer";
import SidebarStaff from "@components/SidebarStaff";
import SidebarStudent from "@components/SidebarStudent";
import { BsArrowLeftShort } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useAuth } from "@contexts/authContext";

const metadata = {
  title: "eQuor",
  description: "Keep you in know",
};

function ProtectedRouteWRap({ children }) {
  //check is authenticated
  const router = useRouter();
  const { authUser, setAuthUser } = useAuth();
  const [open, setOpen] = useState(false);

  if (authUser === null) {
    router.push("/auth/signin");
    return <></>;
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
          {authUser.role[0].authority === "ADMIN" ? (
            /* admin*/ <SidebarAdmin open={open} />
          ) : authUser.role[0].authority === "STAFF" ? (
            /*staff*/ <SidebarStaff open={open} />
          ) : authUser.role[0].authority === "LECTURER" ? (
            /*lecturer*/ <SidebarLecturer open={open} />
          ) : authUser.role[0].authority === "STUDENT" ? (
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

export default ProtectedRouteWRap;
