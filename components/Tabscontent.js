// TabsContainer.js
import React, { useState } from 'react';
import TabContent from "@components/Tabcontent";

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  
  const tabs = [
    { title: '1st Year', content: '' },
    { title: '2nd Year', content: '' },
    { title: '3rd Year', content: '' },
    { title: '4th Year', content: '' },
  ];

  return (
    <div className="tabs-container">
      <div className="tab-buttons w-full   flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2  text-xl font-semibold border text-dark-blue  border-gray-300 bg-white cursor-pointer ${
              index === activeTab ? 'bg-gray-100' : ''
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <TabContent content={tabs[activeTab].content} />
      </div>
    </div>
  );
};

export default TabsContainer;
