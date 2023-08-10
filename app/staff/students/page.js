'use client'
import React from 'react'
import DataTable from '@components/DataTable';
import { useRef } from 'react';
import { useEffect } from 'react';

function page() {
  const tableRef = useRef(null);

  const data = [
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo' },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo' },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo' },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo' },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo' },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo' },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo' },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo' },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo' },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo' },
    { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', add: 'molamo' },
  
  ];
  
  const columns = [
    { Header: '#', accessor: 'id' },
    { Header: 'Student name', accessor: 'name' },
    { Header: 'Reg No', accessor: 'reg' },
    { Header: 'Index No', accessor: 'ind' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Address', accessor: 'add' },
    
  ];
  
  
  
  
  

  return (
   
      
      // <div>
        
      //   <span className="font-Open Sans font-semibold text-2xl text-blue-600 pl-8">Student Management</span>
       
      //   <span className="font-Open Sans text-xs text-gray-500 pl-8">Home / Student </span>
        
      //   <button className="col-start-10 col-end-12 row-start-1 row-end-1 absolute right-96 bg-blue-600 text-white text-sm p-5 rounded-lg pl-8" style={{ fontSize: '20px' }}>Add New Student</button>
      
      //   <h1 className="font-Open Sans text-4xl text-blue-900 pl-8">Current Students</h1>
        
      //   <div className=' col-start-1  '>
      //   <DataTable columns={columns} data={data} />
      //   </div>
      // </div>
      <>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">Student Management</span>

        <p className="text-link-ash font-semibold text-sm">
          Home / Modules /{' '}
          <span className="text-black font-semibold text-sm">Student Management</span>
        </p>
      </div>
      <div className="col-start-1 col-end-8 row-start-2 px-4 pt-5">
      <DataTable columns={columns} data={data} />
        </div>
      

      </>
    
  )
}

export default page


