"use client"
import React, { useState } from "react";

const interractionTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    { title: "1st Year", content: "" },
    { title: "2nd Year", content: "" },
    { title: "3rd Year", content: "" },
    { title: "4th Year", content: "" },
  ];

  return (
    <div className="pl-10 bg-white flex items-end h-14 gap-12 shadow-md border">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`text-lg font-semibold text-dark-blue cursor-pointer flex items-center flex-col gap-1 bg-white min-w-[500px]`}
          onClick={() => handleTabClick(index)}
        >
          {tab.title}
          <hr
            className={`h-[3px] w-full self-end bg-white border-white ${
              index === activeTab ? "bg-black" : ""
            }`}
          />
        </button>
      ))}
      {/* <div className="tab-content">
        <TabContent content={tabs[activeTab].content} />
      </div> */}
    </div>
  );
};

export default interractionTabs;
