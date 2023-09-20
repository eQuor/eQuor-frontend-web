"use client";
import React, { useEffect } from "react";

const MonthDropdown = () => {
  useEffect(() => {
    const monthSelect = document.getElementById("monthSelect");

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    months.forEach((month, index) => {
      const option = document.createElement("option");
      option.value = index + 1; // Months are 1-indexed in JavaScript
      option.textContent = month;
      monthSelect.appendChild(option);
    });
  }, []);

  return (
    <div className="relative inline-block">
      <select
        id="monthSelect"
        className="block appearance-none w-40 h-20 rounded-lg bg-white border border-[#CED4DA] text-2xl font-medium text-dark-blue text-center "
      >
        {/* Options will be dynamically generated here */}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-dark-blue">
        
      </div>
    </div>
  );
};

export default MonthDropdown;
