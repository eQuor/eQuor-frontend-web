'use client'
import React from 'react'
import DataTable from '../components/DataTable';



const data = [
  { id: 1,name: 'Manag Lama', code: 'CAU', email: 'maan@gmail.com', add: 'molamo',age: 23 },
  { id: 1,name: 'Manag Lama', code: 'CAU', email: 'maan@gmail.com', add: 'molamo',age: 23 },
  { id: 1,name: 'Manag Lama', code: 'CAU', email: 'maan@gmail.com', add: 'molamo',age: 23 },
  { id: 1,name: 'Manag Lama', code: 'CAU', email: 'maan@gmail.com', add: 'molamo',age: 23 },
  { id: 1,name: 'Manag Lama', code: 'CAU', email: 'maan@gmail.com', add: 'molamo',age: 23 },
  { id: 1,name: 'Manag Lama', code: 'CAU', email: 'maan@gmail.com', add: 'molamo',age: 23 },
  { id: 1,name: 'Manag Lama', code: 'CAU', email: 'maan@gmail.com', add: 'molamo',age: 23 },
  { id: 1,name: 'Manag Lama', code: 'CAU', email: 'maan@gmail.com', add: 'molamo',age: 23 },
  // Add more data as needed
];

const columns = [
  { Header: '#', accessor: 'id' },
  { Header: 'Lecturer name', accessor: 'name' },
  { Header: 'Lecturer Code', accessor: 'code' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Address', accessor: 'add' },
  { Header: 'Age', accessor: 'age' },
];




const user_mng = () => {
  return (
    <div>
       <br></br>
      <span className="font-Open Sans font-semibold text-2xl text-blue-600 pl-8">Lecturer Management</span>
      <br></br>
      <span className="font-Open Sans text-xs text-gray-500 pl-8">Home / Lecturer </span>
      <br></br>
      <button className="absolute right-96 bg-blue-600 text-white text-sm p-5 rounded-lg pl-8" style={{ fontSize: '20px' }}>Add New Lecturer</button>
      <br></br>
      <h1 className="font-Open Sans text-4xl text-blue-900 pl-8">Current Lecturers</h1>
      <br></br>
      <br></br>
      <DataTable columns={columns} data={data} />
    </div>
    
  )
}

export default user_mng
