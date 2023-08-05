"use client"
import React from 'react'
import { BsSearch } from "react-icons/bs";


const Search = () => {
  return (
    <>
    <div className="bg-white flex-between gap-5 p-4 self-start h-[60%] rounded-md  shadow-md">
        <BsSearch className="text-2xl text-[#2B2B2B]"/>
        <input className="w-full placeholder:font-semibold p-2 outline-none font-semibold" type="text" placeholder="Search here"/>
      </div>
    </>
  )
}

export default Search