"use client";
import React from 'react'
import Link from 'next/link'
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";


const page = () => {
  return (
    <ProtectedRouteWRap>

      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          About Us
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span className="text-black font-semibold text-sm">
            {' '}
            About Us
          </span>
        </p>
      </div>

      <div className="col-start-1 col-end-13 px-4 pt-5">
        <span className="text-dark-blue font-semibold text-2xl ">
          about us
        </span>

        <div className="overflow-x-auto shadow-md sm:rounded-lg mt-3">
          
         <div></div>
        </div>
      </div>
    </ProtectedRouteWRap>
  )
}

export default page
