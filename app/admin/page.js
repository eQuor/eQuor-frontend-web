'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
//import { useRouter } from 'next/router'

const page = () => {
  const router = useRouter()

  const handleClick = () => {
<<<<<<< HEAD
    router.push('/admin/staff')
=======
    router.push('/newadmin/addStaff')
>>>>>>> 124cfde3446fa1ae00f4e7201db1093d770232a9
  }
  return (
    <>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">Dashboard</span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span className="text-black font-semibold text-sm">Dashboard</span>
        </p>

        {/* <Link href="/admin/staffmember">Admin</Link> */}
      </div>

      <div className="col-start-6 col-end-9 row-start-3 row-end-3 ">
        <button
          className=" text-white  bg-light-blue hover:bg-blue-800  font-medium rounded-lg text-sm px-20 py-2  "
          onClick={handleClick}
        >
          Add Staff Member
        </button>
      </div>
    </>
  )
}

export default page
