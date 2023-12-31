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

  const getResponse = async () => {
    const response = await axiosGet("/staff");
    if (response.status == 200) {
      let i = 1;
      let resdata = response.data._embedded.staff;
      resdata.forEach((element) => {
        element.action = 1;
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

  const columns = [
    { Header: "#", accessor: "index" },
    { Header: "Staff Member Name", accessor: "name" },
    { Header: "Member ID", accessor: "id" },
    { Header: "Email", accessor: "email" },
    { Header: "Address", accessor: "address" },
    { Header: "Action", accessor: "action" },
  ];

  return (
    <ProtectedRouteWRap>
      <div className='col-start-1 col-end-13 '>
        <TabsContainer />
      </div>
      <div className='  col-start-1 col-end-13 row-start-2 row-end-3 pl-8  pt-5 '>
        <h1 className='text-xl font-normal text-[#4154F1] bg-#F0F4FB'>
          {" "}
          Staff Member Management
        </h1>
        <p className=' text-xs font-normal'>Home / Staff Member</p>
      </div>

      <div className='w-[950px] pl-10 '>
        <Search />
      </div>
      <div className=' col-start-4 col-end-7'>
        <Button
          title={"Add Staff Member"}
          url={"/admin/staffmanage/staffcreate"}
        />
      </div>

      <div className=' font-semibold text-[#012970] text-3xl col-start-1 col-end-13  pl-12  pt-10 '>
        <h1>Current Staff members</h1>
      </div>

      <div className='col-start-1 col-end-13 row-start-5 px-4 pt-5'>
        <DataTable columns={columns} data={data} />
      </div>
    </ProtectedRouteWRap>
  );
};

export default Page;
