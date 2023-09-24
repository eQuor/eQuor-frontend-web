"use client";
import Button from "@components/Button";
import DataTable from "@components/DataTable";
import Search from "@components/Search";
import TabsContainer from "@components/Tabscontent";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { axiosGet } from "@common/basicAxios";
import { useAuth } from "@contexts/authContext";
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";

function page() {
  const tableRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/api/v1/lecturer",
      responseType: "json",
    }).then(function (response) {
      console.log("axios wed");
      let i = "id";
      let resdata = response.data._embedded.lecturer;
      resdata.forEach((element) => {
        element.action = "id";
        element.index = i;
      });
      setData(resdata);
      console.log(resdata);
    });
  }, []);

  const columns = [
    { Header: "#", accessor: "index" },
    { Header: "Lecturer Name", accessor: "name" },
    { Header: "User Name", accessor: "user_name" },
    { Header: "Lecturer Code", accessor: "id" },
    { Header: "Email", accessor: "email" },
    { Header: "Address", accessor: "address" },
  ];

  return (
    // <ProtectedRouteWRap>
    //   <div className='col-start-1 col-end-13 '>
    //     <TabsContainer />
    //   </div>
    //   <div className='  col-start-1 col-end-13 row-start-2 row-end-3 pl-8  pt-5 '>
    //     <h1 className='text-xl font-normal text-[#4154F1] bg-#F0F4FB'>
    //       {" "}
    //       Staff Member Management
    //     </h1>
    //     <p className=' text-xs font-normal'>Home / Staff Member</p>
    //   </div>

    //   <div className='w-[950px] pl-10 '>
    //     <Search />
    //   </div>
    //   <div className=' col-start-4 col-end-7'>
    //     <Button
    //       title={"Add Staff Member"}
    //       url={"/admin/staffmanage/staffcreate"}
    //     />
    //   </div>

    //   <div className=' font-semibold text-[#012970] text-3xl col-start-1 col-end-13  pl-12  pt-10 '>
    //     <h1>Current Staff members</h1>
    //   </div>

    //   <div className='col-start-1 col-end-13 row-start-5 px-4 pt-5'>
    //     <DataTable columns={columns} data={data} />
    //   </div>
    // </ProtectedRouteWRap>
    <>
    <ProtectedRouteWRap>
    <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
      <span className="text-light-blue font-semibold text-lg">
      Lecturer Profile
      </span>

      <p className="text-link-ash font-semibold text-sm">
        Home /{" "}
        <span className="text-black font-semibold text-sm">Profile</span>
      </p>  
    </div> 
    <div className=" col-start-1 col-end-12 row-start-2 row-end-4 h-[150px] mt-6 m-4 p-[15px] pl-6 bg-white rounded-lg shadow-lg flex gap-10">
      {/* <div>
        <Image
          src={profImg}
          alt="profile image"
          className="w-[100px] h-[100px]"
        />
      </div> */}
      <div>
        <span className="text-dark-blue font-semibold text-xl">
          Kavinda Athapaththu
        </span>
      </div>
    </div>
    <div className=" col-start-1 col-end-12 row-start-5 h-[400px] mt-1 m-4 p-[15px] pl-6 bg-white rounded-lg shadow-lg ">
      <span className="text-dark-blue font-semibold text-2xl">
        User Details
      </span>
      <div className="float-right">
      <div className="w-10 h-10 rounded-full">
              {/* <FiEdit
                style={{ width: "20px", height: "20px", color: "#7D7D7D" }}
              /> */}
            </div>
      </div>
      <div className="ml-6 p-5 ">
        <div>
          <div className="m-5">
            <span className="text-[#444444] font-regular text-lg">
              Lecture Code
            </span>
            <br></br>
            <span className="text-[#6C757D] font-regular text-lg">
              KAV
            </span>
          </div>
          <div className="m-5">
            <span className="text-[#444444] font-regular text-lg">Email</span>
            <br></br>
            <span className="text-[#6C757D] font-regular text-lg">
              email@gmail.com
            </span>
          </div>
          <div className="m-5">
            <span className="text-[#444444] font-regular text-lg">
              Address
            </span>
            <br></br>
            <span className="text-[#6C757D] font-regular text-lg">
              Apartment,studio,or floor
            </span>
          </div>
        </div>
      </div>
    </div>
    </ProtectedRouteWRap>
  </>
  );
};

export default Page;
