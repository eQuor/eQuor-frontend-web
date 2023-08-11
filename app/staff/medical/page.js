'use client'
import React from 'react'
import DataTable from '@components/DataTable';



const data = [
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  
  // Add more data as needed
];

const columns = [
  { Header: '#', accessor: 'id' },
  { Header: 'Student name', accessor: 'name' },
  { Header: 'Reg No', accessor: 'reg' },
  { Header: 'Index No', accessor: 'ind' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Action', accessor: 'age' },
];


// commit weyw

const user_mng = () => {
  return (
    <div>
       <br></br>
      <span className="font-Open Sans font-semibold text-2xl text-blue-600 pl-8">Student Management</span>
      <br></br>
      <span className="font-Open Sans text-xs text-gray-500 pl-8">Home / Absence reports </span>
      <br></br>
      
      <h1 className="font-Open Sans text-4xl text-blue-900 pl-8">Absence reports</h1>
      <br></br>
      <br></br>
      <DataTable columns={columns} data={data} />
     
    </div>
    
  )
}

export default user_mng
