"use client";
import Button from "@components/Button";
import DataTable from "@components/DataTable";
import Search from "@components/Search";
import TabsContainer from "@components/Tabscontent";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { axiosGet } from "@common/basicAxios";
import { useAuth } from "@contexts/authContext";
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";
import { useSearchParams } from "next/navigation";
//import { useRouter } from 'next/router';

const Page = ({ params }) => {
  const { authUser, setAuthUser } = useAuth();
  const router = useRouter();
  const id = params.slug;
  console.log(id);

  const [data, setData] = useState([]);

  const getResponse = async () => {
    const response = await axiosGet(`/lecture/getSessionAttendance?session_id=${id}`);

    if (response.status == 200) {
      let i = 1;
      let resdata = response.data;
      resdata.forEach((element) => {
        element.action = 1;
        element.index = i;
        i++;
        console.log(element)
      });
      setData(resdata);
      console.log(resdata);
    } else {
      console.log("error while fetching API");
    }
    return response;
  };
  useEffect(() => {
    console.log("useEffect is running");
    const response = getResponse();
  }, []);

  const columns = [
    // { Header: "#", accessor: "id" },
    { Header: "Student name", accessor: "name" },
    { Header: "Reg No", accessor: "id" },
    { Header: "Address", accessor: "address" },
    { Header: "Email", accessor: "email" },
    // { Header: "Action", accessor: "age" },
  ];



  return (
    <ProtectedRouteWRap>
      <div className="  col-start-1 col-end-13 row-start-2 row-end-3 pl-8  pt-5 ">
        <h1 className="text-xl font-normal text-[#4154F1] bg-#F0F4FB">
          {" "}
          Student Attendance
        </h1>
        <p className=" text-xs font-normal">Home /Student Attendance</p>
      </div>

      <div className=" font-semibold text-[#012970] text-3xl col-start-1 col-end-13  pl-8  pt-10 ">
        <h1>Student Attendance</h1>
      </div>

      <div className="col-start-1 col-end-13 row-start-3 px-4 pt-5">
        <DataTable columns={columns} data={data} />
      </div>
    </ProtectedRouteWRap>
  );
};

export default Page;
