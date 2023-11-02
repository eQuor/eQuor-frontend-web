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

const Page = () => {
  const { authUser, setAuthUser } = useAuth();
  const router = useRouter();
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const getResponse = async () => {
    const response = await axiosGet("/student");
    if (response.status == 200) {
      let i = 1;
      let resdata = response.data._embedded.student;
      resdata.forEach((element) => {
        element.index = i;
        i++;
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
  const handleRowClick = (row) => {
    setSelectedRow(row);
    console.log(row);
    router.push("/staff/lecturer/editlecturer")
    
  };

  const columns = [
    { Header: "#", accessor: "index" },
    { Header: "Staff Member Name", accessor: "name" },
    { Header: "Member ID", accessor: "id" },
    { Header: "Email", accessor: "email" },
    { Header: "Address", accessor: "address" },
  ];

  return (
    <ProtectedRouteWRap>
      <div className='col-start-1 col-end-13 '>
        <TabsContainer />
      </div>
      <div className='  col-start-1 col-end-13 row-start-2 row-end-3 pl-8  pt-5 '>
        <h1 className='text-xl font-normal text-[#4154F1] bg-#F0F4FB'>
          {" "}
          Student Management
        </h1>
        <p className=' text-xs font-normal'>Home / Staff Member/Student</p>
      </div>

      <div className='w-[950px] pl-10 '>
        <Search />
      </div>
      <div className=' col-start-4 col-end-7'>
        <Button
          title={"Add New Student"}
          url={"/staff/student/addstudent"}
        />
      </div>

      <div className=' font-semibold text-[#012970] text-3xl col-start-1 col-end-13  pl-12  pt-10 '>
        <h1>Current Students</h1>
      </div>

      <div className='col-start-1 col-end-13 row-start-5 px-4 pt-5'>
        <DataTable columns={columns} data={data} onRowClick={handleRowClick}/>
      </div>
    </ProtectedRouteWRap>
  );
};

export default Page;
