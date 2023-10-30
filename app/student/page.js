'use client'
import Button from '@components/Button'
import React from 'react'
import Search from '@components/Search'
import TabsContainer from '@components/Tabscontent'
<<<<<<< HEAD
import ProtectedRouteWRap from '@app/ProtectedRouteWRap'

=======
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";
>>>>>>> origin/suresh-2


import Card from '@components/card'
import Link from 'next/link'

const Home = () => {
  return (
<<<<<<< HEAD
 
      <ProtectedRouteWRap>
=======
    <ProtectedRouteWRap>
>>>>>>> origin/suresh-2
      <div className="col-start-1 col-end-13 ">
        <TabsContainer />
      </div>

      <div className="col-start-1 col-end-13 row-start-2 row-end-2  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">Dashboard</span>

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
          <Button title={'Search Module'} url={'/student'} />
        </div>
      </div>

      <div className=" col-start-1 col-end-13 flex px-4 mt-4">
        <div className="flex gap-5 flex-wrap">
          <Link href="/student/session">
            <Card />
          </Link>
          <Link href="/student/session">
            <Card />
          </Link>
          <Link href="/student/session">
            <Card />
          </Link>
          <Link href="/student/session">
            <Card />
          </Link>
          <Link href="/student/session">
            <Card />
          </Link>
          <Link href="/student/session">
            <Card />
          </Link>
          <Link href="/student/session">
            <Card />
          </Link>
          <Link href="/student/session">
            <Card />
          </Link>

          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
      {/* 
      <div className=" text-white text-center text-sm col-start-10 col-end-11 row-start-2 row-end-4 ">
        <button className="bg-light-blue w-[210px] h-[50px] rounded-[5px] ">
          Assign students{' '}
        </button>
      </div>
      <div className=" text-white text-center text-sm col-start-11 col-end-12 row-start-2 row-end-4 pl-3">
        <button className="bg-light-blue w-[210px] h-[50px] rounded-[5px] ">
          Assign Students{' '}
        </button>
      </div> */}

      {/* <div className=" font-semibold text-[#012970] text-lg col-start-1 col-end-13 row-start-3 row-end-4 pl-12  pt-10 ">
        <h1>Assigned students</h1>
      </div> */}
<<<<<<< HEAD

      </ProtectedRouteWRap>
=======
    </ProtectedRouteWRap>
>>>>>>> origin/suresh-2
  )
}

export default Home
