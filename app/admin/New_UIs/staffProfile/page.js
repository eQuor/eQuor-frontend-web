import React from "react";
import Image from "next/image";
import profImg from "../../../../public/profile_icon.png";
import { FiEdit } from "react-icons/fi";

const staffProfile = () => {
  return (
    <>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Staff Member Profile
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{" "}
          <span className= "text-black font-semibold text-sm">Profile</span>
        </p>
      </div>
      <div className=" col-start-1 col-end-12 row-start-2 row-end-4 h-[150px] mt-6 m-4 p-[15px] pl-6 bg-white rounded-lg shadow-lg flex gap-10">
        <div>
          <Image
            src={profImg}
            alt="profile image"
            className="w-[100px] h-[100px]"
          />
        </div>
        <div>
          <span className="text-dark-blue font-semibold text-xl">
            DE SILVA W.M.T.
          </span>
        </div>
      </div>
      <div className=" col-start-1 col-end-12 row-start-5 h-[400px] mt-1 m-4 p-[15px] pl-6 bg-white rounded-lg shadow-lg ">
        <span className="text-dark-blue font-semibold text-2xl">
          User Details
        </span>
        <div className="float-right">
        <div className="w-10 h-10 rounded-full">
                <FiEdit
                  style={{ width: "20px", height: "20px", color: "#7D7D7D" }}
                />
              </div>
        </div>
        <div className="ml-6 p-5 flex gap-[400px]">
          <div>
            <div className="m-5">
              <span className="text-[#444444] font-regular text-lg">
                User Name
              </span>
              <br></br>
              <span className="text-[#6C757D] font-regular text-lg">
                DeSilva123
              </span>
            </div>
            <div className="m-5">
              <span className="text-[#444444] font-regular text-lg">Email</span>
              <br></br>
              <span className="text-[#6C757D] font-regular text-lg">
                email@gmail.com
              </span>
            </div>
            <div className="m-5">
              <span className="text-[#444444] font-regular text-lg">
                Address
              </span>
              <br></br>
              <span className="text-[#6C757D] font-regular text-lg">
                Apartment,studio,or floor
              </span>
            </div>
            
            
          </div>

          <div>
            <span className="text-[#444444] font-regular text-lg">
              Index Number
            </span>
            <br></br>
            <span className="text-[#6C757D] font-regular text-lg">
              20020279
            </span>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default staffProfile;
