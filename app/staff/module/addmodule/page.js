'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import ProtectedRouteWRap from '@app/ProtectedRouteWRap'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { axiosPost } from '@common/basicAxios'
import { useAuth } from '@contexts/authContext'

const addModule = () => {
  const router = useRouter()
  const { authUser, setAuthUser } = useAuth()

    const [formData, setFormData] = useState({
      name: '',
      semester: '',
      year: '',
      module_picture: '',
      managed_staff:authUser
    })
  
      const handleSubmit = async (e) => {
        e.preventDefault()

        Swal.fire({
          title: 'Are you sure?',
          text: 'This will save the module details!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#4154F1',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Save it!',
        })
          .then(async (result) => {
            if (result.isConfirmed) {
              const response = await axiosPost(
                '/module',
                formData,
                router,
                setAuthUser
              )
              if (response.status === 201) {
                Swal.fire(
                  'Saved!',
                  'New module has been saved.',
                  'success'
                )
                router.push('/staff/module')
              } else
                Swal.fire(
                  'Error!',
                  "Couldn't save new staff member.",
                  'success'
                )
            }
          })
          .catch((error) => {
            Swal.fire('Error!', "Couldn't save new module", 'error')
          })
  }
  

  









  const handleClick = () => {
    router.push('/staff/module')
  }
  return (
    <ProtectedRouteWRap>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Module Management
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home / Modules /{' '}
          <span className="text-black font-semibold text-sm">Add Module</span>
        </p>
      </div>

      <div className="col-start-4 col-end-13 p-5 w-[700px] h-[750px] justify-center bg-white rounded-lg shadow-lg overflow-y-auto">
        <form
          className="bg-white"
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <div>
            <h1 className="text-xl text-left text-[#012970] font-medium">
              Add a Module
            </h1>
          </div>
          <div className="h-12 bg-white"></div>
          <div className="text-base bg-white">
            <div>
              <label>Module Name</label>
              <input
                id="name"
                type="text"
                autoComplete="none"
                required
                className="static appearance-none rounded-none  vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                placeholder="Name"
                onChange={(e) => {
                  let newFormData = formData
                  newFormData.name = e.target.value
                  setFormData(newFormData)
                }}
              />
            </div>
      
            {/* <div>
              <label>Module Code</label>
              <input
                id="id"
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="SCS1213"
                onChange={(e) => {
                  let newFormData = formData
                  newFormData.id = e.target.value
                  setFormData(newFormData)
                }}
              />
            </div> */}
        
            <div>
              <label>Semester Number</label>
              <input
                id="semester"
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Semester 1"
                onChange={(e) => {
                  let newFormData = formData
                  newFormData.semester = e.target.value
                  setFormData(newFormData)
                }}
              />
            </div>
            <div>
              <label>Year</label>
              <input
                id="year"
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Year"
                onChange={(e) => {
                  let newFormData = formData
                  newFormData.year = e.target.value
                  setFormData(newFormData)
                }}
              />
            </div>
            <div>
              <label>Module Picture</label> <br></br>
              <input
                id='module_picture'
                type="file"
                autoComplete="none"
                required
                className="h-32 w-64 appearance-none rounded-none relative vlock px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Picture"
                onChange={(e) => {
                  let newFormData = formData
                  newFormData.module_picture = e.target.value
                  setFormData(newFormData)
                }}
              />
            </div>
            <br />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="justify-self-end"></div>
            <div className="flex justify-self-end gap-4 ">
              <button
                className="group relative w-26 flex justify-self-end py-2 px-4 border border-transparent font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base"
              >
                Submit
              </button>
              <button
                className="group relative w-26 flex justify-self-end py-2 px-4 border border-transparent font-regular rounded-md text-white bg-[#6C757D] hover:bg-[#5a6268]
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </ProtectedRouteWRap>
  )
}

export default addModule
