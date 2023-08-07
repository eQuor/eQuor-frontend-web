'use client'
import React from 'react'
import DataTable from '../../components/DataTable';
import { useRef } from 'react';
import { useEffect } from 'react';

function page() {
  const tableRef = useRef(null);


  // useEffect(() => {
  //   // Initialize DataTables
  //   $(tableRef.current).DataTable({
  //     responsive: true, // Enable responsive layout
  //     searching: true, // Enable search functionality
  //     // Add any other DataTables options here
  //   });
  // }, []);

  const data = [
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo',age: 23 },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo',age: 23 },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo',age: 23 },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo',age: 23 },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo',age: 23 },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo',age: 23 },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo',age: 23 },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo',age: 23 },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo',age: 23 },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo',age: 23 },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo',age: 23 },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo',age: 23 },
  
  ];
  
  const columns = [
    { Header: '#', accessor: 'id' },
    { Header: 'Student name', accessor: 'name' },
    { Header: 'Reg No', accessor: 'reg' },
    { Header: 'Index No', accessor: 'ind' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Address', accessor: 'add' },
    { Header: 'Age', accessor: 'age' },
  ];
  
  
  
  
  

  return (
   
      
      <div>
         <br></br>
        <span className="font-Open Sans font-semibold text-2xl text-blue-600 pl-8">Student Management</span>
        <br></br>
        <span className="font-Open Sans text-xs text-gray-500 pl-8">Home / Student </span>
        <br></br>
        <button className="absolute right-96 bg-blue-600 text-white text-sm p-5 rounded-lg pl-8" style={{ fontSize: '20px' }}>Add New Student</button>
        <br></br>
        <h1 className="font-Open Sans text-4xl text-blue-900 pl-8">Current Students</h1>
        <br></br>
        <br></br>
        <DataTable columns={columns} data={data} />
      </div>
      
  
    
  )
}

export default page


