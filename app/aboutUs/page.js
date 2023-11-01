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
<div>
<div className="ml-[200px] bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p>
            "eQuor” is an academic management system which provides accurate
            attendance recording and better lecturer student interaction within
            lectures.
            <div className="pt-6"><h1>What we offer.</h1></div>
            <div className="pl-8">
            <ul className="list-disc">
              <li>Mark attendence via QR code scanning.</li>
              <li>Ask questions</li>
              <li>Polls</li>
              <li>Student grouping facility</li>
              <li>Submitting medical forms</li>
            </ul>
            </div>
            <div className="flex gap-6 pt-6">
                <div>50+ Institutions</div>
                <div>10000+ Students</div>
                <div>1000+ Lecturers</div>
            </div>
            <div className="flex gap-6 pt-6">
                <div><Image src={call} alt='call' className='w-[20px] h-[20px]' /></div>
                <div><Image src={mail} alt='mail' className='w-[20px] h-[20px]' /></div>
                <div><Image src={linkedin} alt='linkedin' className='w-[20px] h-[20px]' /></div>
            </div>

          </p>
        </div>

      </div>
         

      </div>
    </>
  
export default aboutUs;
    </ProtectedRouteWRap>
  )
}

export default page
