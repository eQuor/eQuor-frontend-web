import React from "react";

const Home = () => {
  return (
    <>
    <div className=" bg-white  col-start-1 col-end-13 row-start-1 row-end-2 pl-8  pt-5 ">
  
  </div>

    <div className="  col-start-1 col-end-13 row-start-2 row-end-3 pl-8  pt-5 ">
    <h1 className="text-xl font-normal text-[#4154F1] bg-#F0F4FB"> IS3116 Database Management System</h1>
    <p className=" text-xs font-normal">Home/Attendance/Attendance Reports</p>
    
   </div>
   <div className=" text-white text-center text-sm col-start-10 col-end-11 row-start-3 row-end-4 ">
    <button className="bg-light-blue w-[210px] h-[50px] rounded-[5px] ">Assign Lecturers </button>
   </div>
   <div className=" text-white text-center text-sm col-start-11 col-end-12 row-start-3 row-end-4 pl-3">
    <button className="bg-light-blue w-[210px] h-[50px] rounded-[5px] ">Assign Students </button>
   </div>

   
   <div className=" font-semibold text-[#012970] text-lg col-start-1 col-end-13 row-start-3 row-end-4 pl-12  pt-10 " >
    <h1>Assigned Lecturers</h1>
   </div>

    </>
    

    );
};

export default Home;