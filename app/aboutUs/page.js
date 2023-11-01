"use client";
import React from 'react'
import Link from 'next/link'
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";


const page = () => {
  return (
    <ProtectedRouteWRap>

    <>
      <div className="bg-gray-100 min-h-screen flex items-center ">
     
<div class="relative w-[600] h-[740px]">
  <div class="bg-light-blue w-[600] h-[740px] absolute bottom-0 z-10"></div>
    <div class=" w-[650px] h-[720px] absolute top-[150px] left-5 z-20"><Image src={aboutus} alt='aboutus' className='w-[644px] h-[419px] z-10' /></div>
</div>          

      </div>
    </>
  
export default aboutUs;
    </ProtectedRouteWRap>
  )
}

export default page
