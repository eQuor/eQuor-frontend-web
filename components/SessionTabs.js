// TabsContainer.js
import SessionDetails from "./SessionDetails";
import TabContent from "./Tabcontent";
import Chat from "./Chat";

import React, { useState } from "react";


const SessionTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    { title: "Session Details", content: <SessionDetails></SessionDetails>   },
    { title: "Polls", content: "" },
    { title: "Chat", content: <Chat></Chat> },
    
  ];

  return (
    <div>
      <div className="pl-10 w-screen bg-white flex items-end h-14 gap-12 shadow-md border">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-lg font-semibold  text-dark-blue cursor-pointer flex items-center flex-col gap-1 bg-white min-w-[100px]`}
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
      </div>
        <div className="tab-content">
          <TabContent content={tabs[activeTab].content} />
        </div>
      </div>
  );
};

export default SessionTabs;
