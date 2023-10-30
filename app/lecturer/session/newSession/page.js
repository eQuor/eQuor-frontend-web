"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sessioncard from "../Sessioncard";
import Button from "@components/Button";
import Swal from "sweetalert2";
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";
import { renderToStaticMarkup } from "react-dom/server";
import Card from "@components/card";
import Popup from "@components/Popup";
import { useRouter } from "next/navigation";
import { axiosGet } from "@common/basicAxios";

const page = () => {
  const navigator = useRouter();
  const getResponse = async () => {
    const response = await axiosGet("/module");
    if (response.status == 200) {
      // setData(resdata);
      // console.log(resdata);
    } else {
      console.log("error while fetching API");
    }
    return response;
  };

  useEffect(() => {
    const response = getResponse();
  });
  const cardhtml = renderToStaticMarkup(<Popup />);

  const subject = "SCS1101 Database Management";
  
  const handlewithoutattendance = () => {
    navigator.push("/lecturer/session/withoutattendance");
    // Swal.fire({
    //   html: `${cardhtml}`,
    //   showCloseButton: false,
    //   showCancelButton: false,
    //   focusConfirm: false,
    //   confirmButtonText: '<i class="fa fa-thumbs-up"></i> Confirm',
    //   confirmButtonAriaLabel: "Thumbs up, great!",
    //   cancelButtonText: '<i class="fa fa-thumbs-down"></ i> Cancel',
    //   cancelButtonAriaLabel: "Thumbs down",
    // });
  };
  return (
    <ProtectedRouteWRap>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">{subject}</span>

        <p className="text-link-ash font-semibold text-sm">
          Home / Modules /SCS1101 Database Management/{" "}
          <span className="text-black font-semibold text-sm">New Session</span>
        </p>
      </div>

      <div className="col-start-1 col-end-13 row-start-2   px-4 pt-5 mt-3 mx-5 bg-white">
        <span className="text-dark-blue font-semibold text-2xl ">
          Create New Session
        </span>
      </div>

      <div className="col-start-1 col-end-13 row-start-3 row-end-6 px-4 pt-5  mx-5 bg-white flex justify-between">
        <div>
          <div className=" relative top-10 left-40 col-start-7 col-end-10">
            <button
              className="bg-light-blue w-[210px] h-[50px] rounded-[5px]"
              onClick={handlewithattendance}
              name={"With Attendance"}
            >
              With Attendance
            </button>
          </div>
        </div>
        <Link href="/" className=" gap-2 ml-5 items-center">
          <Image
            src="/attendence.svg"
            alt="eQuor Logo"
            width={300}
            height={300}
            className="object"
          />
        </Link>
        <div>
          <div className=" relative top-10 right-40 col-start-7 col-end-10">
          <button
              className="bg-light-blue w-[210px] h-[50px] rounded-[5px]"
              onClick={handlewithoutattendance}
              name={"With Attendance"}
            >
              Without Attendance
            </button>
          </div>
        </div>
      </div>

      <div className="col-start-1 col-end-13 row-start-7 px-4 pt-0">
        <span className="text-dark-blue font-semibold text-2xl">Past</span>
        <Sessioncard />
      </div>

      {/* <div className="col-start-3 col-end-11 row-start-3 px-4 pt-0  ">
                <div className="bg-white rounded shadow-lg px-4 py-3"></div>
            </div> */}
<<<<<<<<< Temporary merge branch 1
    </>
  )
}

export default page
=========
    </ProtectedRouteWRap>
  );
};

export default page;
