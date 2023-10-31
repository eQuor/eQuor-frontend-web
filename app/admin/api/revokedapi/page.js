"use client";
import Button from "@components/Button";
import DataTable from "@components/DataTable";
import Search from "@components/Search";
import TabsContainer from "@components/Tabscontent";
import { axiosGet } from "@common/basicAxios";
import ProtectedRouteWRap from '@app/ProtectedRouteWRap'
import React, { useEffect, useState } from "react";
import axios from "axios";


const columns = [
  { Header: "#", accessor: "index" },
  { Header: "Full Name", accessor: "full_name" },
  { Header: "Email", accessor: "email" },
  { Header: "Address", accessor: "address" },
  { Header: "Action", accessor: "action" },
];

const Page = () => {
  const [data, setData] = useState([]);
  const getResponse = async () => {
    const response = await axiosGet("/apiRequests");
    if (response.status == 200) {
      let i = 1;
      let resdata = response.data._embedded.apiRequests;
      const filteredData = resdata.filter(item => item.action === "0");
      filteredData.forEach((element) => {
        element.index = i;
        i++;
      });
      setData(filteredData);
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

  return (
    <ProtectedRouteWRap>
      <div className='  col-start-1 col-end-13  pl-8  pt-5 '>
        <h1 className='text-xl font-normal text-[#4154F1] bg-#F0F4FB'>
          {" "}
          API Request Management
        </h1>
        <p className=' text-xs font-normal'>Home / API Requests/Revoked API Requests</p>
      </div>


      <div className=' font-semibold text-[#012970] text-3xl col-start-1 col-end-13  pl-12  pt-4 '>
        <h1>Revoked API Requests</h1>
      </div>

      <div className='col-start-1 col-end-13 px-4 pt-5'>
        <DataTable columns={columns} data={data} />
      </div>
    </ProtectedRouteWRap>
  );
};

export default Page;
