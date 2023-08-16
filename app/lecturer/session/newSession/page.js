"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sessioncard from "../Sessioncard"
import Button from '@components/Button'

const page = () => {
     const subject = 'SCS1101 Database Management'
    return (
      <>
        <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
          <span className="text-light-blue font-semibold text-lg">
            {subject}
          </span>

          <p className="text-link-ash font-semibold text-sm">
            Home / Modules /SCS1101 Database Management/{' '}
            <span className="text-black font-semibold text-sm">
              New Session
            </span>
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
          <Button title={"With Attendance"} />
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
          <Button title={"Without Attendance"} />
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
      </>
    )
}

export default page