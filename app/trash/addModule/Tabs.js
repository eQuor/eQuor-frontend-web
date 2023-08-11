'use client'
import React, { useState } from 'react';
import TabContent1 from './TabContent1';
import TabContent2 from './TabContent2';

const Tabs = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}>
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
      {activeTab === 0 && <TabContent1 />}
        {activeTab === 1 && <TabContent2 />}
              </div>
    </div>
  );
};
export default Tabs;