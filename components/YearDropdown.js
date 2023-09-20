"use client";

// import React from 'react'
import React, { useEffect } from "react";

const YearDropdown = () => {
  useEffect(() => {
    const yearSelect = document.getElementById("yearSelect");
    const currentYear = new Date().getFullYear();

    // Add previous years
    for (let i = currentYear; i >= currentYear - 20; i--) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      yearSelect.appendChild(option);
    }

    // Add current year
    const currentYearOption = document.createElement("option");
    currentYearOption.value = currentYear;
    currentYearOption.textContent = currentYear;
    yearSelect.appendChild(currentYearOption);

    // Add next years
    // for (let i = currentYear + 1; i <= currentYear + 5; i++) {
    //   const option = document.createElement("option");
    //   option.value = i;
    //   option.textContent = i;
    //   yearSelect.appendChild(option);
    // }
  }, []);

  return (
    <div className="relative inline-block">
      <select
        id="yearSelect"
        className="block appearance-none w-40 h-20 rounded-lg bg-white border border-[#CED4DA] text-2xl font-medium text-dark-blue text-center "
      >
        {/* Options will be dynamically generated here */}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-dark-blue"></div>
    </div>
  );
};

export default YearDropdown;
