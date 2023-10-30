"use client";
import Button from "@components/Button";
import React, { useEffect, useState } from "react";
import Search from "@components/Search";
import TabsContainer from "@components/Tabscontent";
import axios from "axios";
import Card from "@components/card";
import Link from "next/link";
<<<<<<< HEAD
import ProtectedRouteWRap from '@app/ProtectedRouteWRap'
import { axiosGet } from '@common/basicAxios'
import { useAuth } from '@contexts/authContext'
import { useRouter } from 'next/navigation'
=======
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";

>>>>>>> origin/suresh-2

const Home = () => {

const { authUser, setAuthUser } = useAuth()
const router = useRouter()
const [data, setData] = useState([])

const getResponse = async () => {
  const response = await axiosGet('/module')
 
  if (response.status == 200) {
    console.log('axios wed')
    let i = 1
    let resdata = response.data._embedded.module
    resdata.forEach((element) => {
      element.action = 1
      element.index = i
      i++
    })
    setData(resdata)
   console.log(resdata)
  } else {
    console.log('error while fetching API')
  }
  return response
}
useEffect(() => {
  console.log('useEffect is running')
  const response = getResponse()
  console.log(response)
}, [])








  return (
    <ProtectedRouteWRap>
<<<<<<< HEAD
      <div className="col-start-1 col-end-13 ">
=======
      <div className='col-start-1 col-end-13 '>
>>>>>>> origin/suresh-2
        <TabsContainer />
      </div>
      <div className="col-start-1 col-end-13 row-start-2 row-end-2  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Module Management
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span className="text-black font-semibold text-sm">Modules</span>
        </p>
      </div>
      <div className="col-start-1 col-end-13 px-4 pt-5 flex">
        <div className="w-[1200px] overflow-x-auto">
          <Search />
        </div>

        <div className="ml-3">
          <Button title={'Add Module'} url={'/staff/module/addmodule'} />
        </div>
      </div>
      <div className=" col-start-1 col-end-13 flex px-4 mt-4">
        <div className="flex gap-5 flex-wrap">{data.map((module,index) => {

          //const { name, semester } = data
          
          // return <Card name={module.name} semester = {module.semester} />

          return (
            <div key={index}>
              <Link href={`/staff/module/${module.id}`}>
                
                <Card name={module.name} semester={module.semester} />
              </Link>
            </div>
          )
          
        })}</div>
      </div>
      {/* 
      <div className=" text-white text-center text-sm col-start-10 col-end-11 row-start-2 row-end-4 ">
        <button className="bg-light-blue w-[210px] h-[50px] rounded-[5px] ">
          Assign Lecturers{' '}
        </button>
      </div>
      <div className=" text-white text-center text-sm col-start-11 col-end-12 row-start-2 row-end-4 pl-3">
        <button className="bg-light-blue w-[210px] h-[50px] rounded-[5px] ">
          Assign Students{' '}
        </button>
      </div> */}
      {/* <div className=" font-semibold text-[#012970] text-lg col-start-1 col-end-13 row-start-3 row-end-4 pl-12  pt-10 ">
        <h1>Assigned Lecturers</h1>
      </div> */}
    </ProtectedRouteWRap>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> origin/suresh-2
};

export default Home;
