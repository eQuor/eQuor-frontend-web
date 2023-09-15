import React from "react";
import Image from "next/image";
import profImg from "../../../public/login.png";


const studMobileDetails = () => {
  return (
    <>
      <div className=" col-start-1 col-end-12 row-start-1 row-end-2 h-[150px] mt-6 m-4 p-[15px] pl-6">
        <span className="text-dark-blue font-semibold text-lg">
          Your Mobile Device is already Registered!!
        </span>
      </div>
      <div className=" col-start-1 col-end-7 row-start-2 h-[125px] mt-6 ml-4 p-[15px] pl-6 bg-white rounded-lg shadow-lg">

        <div className="flex gap-5">
          <div className="pl-6 w-[270px]">
            <span className="text-[#444444] font-regular text-[13px]">
            Model name
            </span>
          </div>
          <div className="pl-6 w-[270px]">
            <span className="text-[#444444] font-regular text-[13px]">
            Galaxy A30
            </span>
          </div>
          
        </div>
        <div className="bg-[#999797] h-[1px]"></div>

        <div className="flex gap-5">
          <div className="pl-6 w-[270px]">
            <span className="text-[#444444] font-regular text-[13px]">
            Model number
            </span>
          </div>
          <div className="pl-6 w-[270px]">
            <span className="text-[#444444] font-regular text-[13px]">
            SM-A305F/DS
            </span>
          </div>
          
        </div>
        <div className="bg-[#999797] h-[1px]"></div>

        <div className="flex gap-5">
          <div className="pl-6 w-[270px]">
            <span className="text-[#676666] font-regular text-[13px]">
            IMEI
            </span>
          </div>
          <div className="pl-6 w-[270px]">
            <span className="text-[#444444] font-regular text-[13px]">
            358384101498562
            </span>
          </div>
          
        </div>
        <div className="bg-[#999797] h-[1px]"></div>
      </div>


      {/* ................ */}

        <div className="col-start-7 col-end-13 row-start-1 mt-7 ml-10">
          <Image
            src={profImg}
            alt="profile image"
            className="w-[607px] h-[400px]"
          />
        </div>
    </>
  );
};

export default studMobileDetails;
