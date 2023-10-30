'use client'
import React from 'react'
import ProtectedRouteWRap from '@app/ProtectedRouteWRap'
import { useEffect, useState, useRef } from 'react'
import { axiosGet, axiosPost } from '@common/basicAxios'
import { useAuth } from '@contexts/authContext'
import axios from 'axios'
import Papa from 'papaparse'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const Csv = (props) => {
  const module_name = props.prop1
  const fileInput = useRef()
  const [csvData, setCsvData] = useState([])
  const router = useRouter()
  const { authUser, setAuthUser } = useAuth()

  const parseCsv = () => {
    const file = fileInput.current.files[0]
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function (results) {
        console.log(results.data)
        const data = []
        results.data.forEach((element) => {
          if (element.student_id != null) {
            data.push(element)
          }
        })

        setCsvData(data)
        console.log('After passing data')
        handleSubmit()
      },
    })
  }

  useEffect(() => {
    console.log(csvData)
  }, [csvData])

  const handleSubmit = () => {
    // e.preventDefault()

    Swal.fire({
      title: 'Are you sure?',
      text: 'Add students to the' + ' ' + module_name + '!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4154F1',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Save it!',
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          const response = await axiosPost(
            '/staff/student-modules',
            csvData,
            router,
            setAuthUser
          )

          if (response.status === 200) {
            Swal.fire('Saved!', 'New records have been saved.', 'success')
            // router.push('/staff/module')
          }
          //  else {
          //   Swal.fire('Error!', "Couldn't save new staff members.", 'success')
          // }
        }
      })
      .catch((error) => {
        Swal.fire('Error!', "Couldn't save new module", 'error')
        //alert(response.status)
      })
  }

  return (
    <>
      <div className="mr-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="p-6">
          <h5 className="text-lg font-bold leading-none text-dark-blue mt-3">
            Assign Students
          </h5>
          <input type="file" ref={fileInput} accept=".csv" />
          <button
            onClick={parseCsv}
            type="button"
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3"
          >
            Assign
          </button>
        </div>
      </div>
    </>
  )
}

export default Csv
