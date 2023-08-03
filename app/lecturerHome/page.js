"use client";
import Search from "@components/Search";
import React from "react";

const page = () => {
  const pageTopic = "Modules";
  return (
    <>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5">
        <span className="text-light-blue font-semibold text-lg">
          {pageTopic}
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{" "}
          <span className="text-black font-semibold text-sm">{pageTopic}</span>
        </p>
      </div>

      <Search/>

      
    </>
  );
};

export default page;
