"use client";
// import Sidebar from '@components/Sidebar'
import "@styles/globals.css";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const RootLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <html lang="en">
      <body>
        <main className="layout relative">
          <header className=" h-12">lsafhv</header>
          <aside
            className={`bg-blue-700 h-[100%] p-5 pt-8 ${
              open ? "w-[300px]" : "w-[100%]"
            } duration-300 absolute`}
          >
            <BsArrowLeftShort
              className={`text-3xl absolute -right-3 top-9 border rounded-full border-black ${
                !open && "rotate-180"
              }`}
              onClick={() => {
                setOpen(!open);
              }}
            />
          </aside>
          <section >
          {/* className={`${!open ? "w-[100%]" : "w-[80%]"}`} */}
            {children}
          </section>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
