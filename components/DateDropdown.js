"use client";
import React, { useEffect } from "react";

const DateDropdown = () => {
  useEffect(() => {
    const dateSelect = document.getElementById("dateSelect");

    for (let i = 1; i <= 31; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      dateSelect.appendChild(option);
    }
  }, []);

  return (
    <div className="relative inline-block">
      <select
        id="dateSelect"
        className="block appearance-none w-40 h-20 rounded-lg bg-white border border-[#CED4DA] text-2xl font-medium text-dark-blue text-center "
      >
        {/* Options will be dynamically generated here */}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-dark-blue">
        
      </div>
    </div>
  );
};

export default DateDropdown;
