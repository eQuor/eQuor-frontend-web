import React from 'react'
import Image from "next/image";
import graph from "../../../public/Graph.png";
import piegrph from "../../../public/piechart.png";

const adminDashboard = () => {
  const subject = 'Dashboard'

  return (
    <>
    <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5">
        <span className="text-light-blue font-semibold text-lg">{subject}</span>

        <p className="text-link-ash font-semibold text-sm">
          Home / {" "}
          <span className="text-black font-semibold text-sm">{subject}</span>
        </p>
      </div>

{/* .................cards........................... */}
      <div className="col-start-2 col-end-12 row-start-2 row-end-4 container mx-auto mt-4 flex gap-4 ">
        <div className="flex-1 transition duration-300 transform hover:scale-105">
          <div className="bg-white p-6 rounded shadow-md">
            <h1 className='text-lg font-medium text-light-blue'>Total staff Members</h1><br></br>
            <div className='flex gap-4'>
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <div ><h1 className='text-4xl font-bold text-light-blue'>100</h1></div>
              <br></br>
            </div>
          </div>
        </div>

        <div className="flex-1 transition duration-300 transform hover:scale-105">
          <div className=" bg-white p-6 rounded shadow-md">
            <h1 className='text-lg font-medium text-light-blue'>Total Lecturers</h1><br></br>
            <div className='flex gap-4'>
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <div ><h1 className='text-4xl font-bold text-light-blue'>145</h1></div>
              <br></br>
            </div>
          </div>
        </div>

        <div className="flex-1 transition duration-300 transform hover:scale-105">
          <div className=" bg-white p-6 rounded shadow-md">
            <h1 className='text-lg font-medium text-light-blue'>Total Students</h1><br></br>
            <div className='flex gap-4'>
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <div ><h1 className='text-4xl font-bold text-light-blue'>320</h1></div>
              <br></br>
            </div>
          </div>
        </div>

      </div>
{/* .................cards end here .......................  */}

<div className="col-start-2 col-end-12 row-start-5 row-end-8 container mx-auto mt-4 flex gap-4">
        <div className="flex-1 transition duration-300 transform hover:scale-105">
        <div className="w-[530px] h-[340px] flex justify-self-center ">
          <Image src={graph} alt="tick" className="w-[400px] h-[300px]" />
        </div>
        </div>

        <div className="flex-1 transition duration-300 transform hover:scale-105">
        <div className="w-[530px] h-[340px] flex justify-self-center ">
          <Image src={piegrph} alt="tick" className="w-[450px] h-[300px]" />
        </div>
        </div>

      </div>

    </>
  )
}

export default adminDashboard
