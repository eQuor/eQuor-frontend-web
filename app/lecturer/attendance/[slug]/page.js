"use client";
import React, { useState } from "react";
import { AiFillPlaySquare } from "react-icons/ai";
import Sessioncard from "./Sessioncard";
import { useRouter } from "next/navigation";
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";

const page = () => {
  const [isSessionActive, setSessionActive] = useState(true);
  const router = useRouter();

  const handleClick = () => {
    router.push("/lecturer/session/newSession");
  };

  const subject = "SCS1101 Database Management";
  return (
    <ProtectedRouteWRap>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">{subject}</span>

        <p className="text-link-ash font-semibold text-sm">
          Home / Modules /{" "}
          <span className="text-black font-semibold text-sm">{subject}</span>
        </p>
      </div>

      {isSessionActive ? (
        <>
          <div className="col-start-1 col-end-13 row-start-1 px-4 pt-5"></div>
          <div className="col-start-1 col-end-13 pt-10 row-start-2 row-end-5  px-4 pt-0">
            <span className="text-dark-blue font-semibold text-2xl">Past</span>
            <Sessioncard />
            {/* <Sessioncard />
            <Sessioncard /> */}
          </div>
        </>
      ) : (
        <>
          <div className="col-start-1 col-end-3 row-start-2  px-4 pt-5">
            <span className="text-dark-blue font-semibold text-2xl ">Past</span>
          </div>
          <div className="col-start-11 col-end-13 row-start-2 px-4 pt-5">
            {/* <span className="text-dark-blue font-semibold text-2xl ml-0 px-0  flex justify-end ">
              Create
            </span> */}
            <div className="mb-3  flex justify-end">
              <button
                type="submit"
                className="text-white bg-light-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2 text-center  "
                onClick={handleClick}
              >
                New Session
              </button>
            </div>
          </div>
          <div className="col-start-1 col-end-13 row-start-3   px-4 pt-0">
            <Sessioncard />
          </div>
        </>
      )}
    </ProtectedRouteWRap>
  );
};

export default page;
