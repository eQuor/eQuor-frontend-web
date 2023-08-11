"use client";
import Card from "@components/Card";
import Search from "@components/Search";
import TabsContainer from "@components/Tabscontent";
import React from "react";

const page = () => {
  const pageTopic = "Modules";
  return (
    <>
      <div className="col-start-1 col-end-13 ">
        <TabsContainer/>
      </div>
      <div className="col-start-1 col-end-13 px-4 row-start-2 row-end-3">
        <span className="text-light-blue font-semibold text-lg">
          {pageTopic}
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{" "}
          <span className="text-black font-semibold text-sm"></span>
        </p>
      </div>

      <div className=" col-start-1 col-end-8 ml-8">
        <Search />
      </div>

      <div className=" col-start-2 col-end-13 flex ">
        <div className="flex gap-6 flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default page;
