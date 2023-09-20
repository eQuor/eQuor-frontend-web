'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sessioncard from '../Sessioncard'
import Button from '@components/Button'
import Swal from 'sweetalert2'
//import withReactContent from 'sweetalert2-react-content'


const page = () => {
  const subject = 'SCS1101 Database Management'

//const MySwal = withReactContent(Swal)
// const showForm = () => {
//   Swal.fire({
//     title: 'When do you want to use this session',
//     html:
//       '<form>' +
//       '<input style="border: 1px solid #3490dc; border-radius: 4px; padding: 8px;" type="datetime-local" id="daytime" name="daytime">' +
//       '<input style="border: 1px solid #3490dc; border-radius: 4px; padding: 8px;" type="datetime-local" id="daytime" name="daytime">'+
//       // '<input style="background-color: #3490dc; color: white; padding: 8px; border: none; border-radius: 4px; cursor: pointer;" type="submit" value="Submit">' +
//       '</form>',
//     showCancelButton: true,
//     confirmButtonText: 'Submit',
//   }).then((result) => {
//     if (result.isConfirmed) {
//       const name = document.getElementById('name').value
//       // Handle the form data, e.g., submit it or process it.
//       console.log(`You entered: ${name}`)
//     }
//   })
  // }
  const showForm = () => { 
    Swal.fire({
      title: 'Enter your name:',
      html:
        '<form class="bg-black text-white">' +
        '<label class="font-bold">' +
        'Your Name:' +
        '<input class="border-blue-500 border-opacity-100" type="text" id="name" />' +
        '</label>' +
        '</form>',
      showCancelButton: true,
      confirmButtonText: 'Submit',
    }).then((result) => {
      if (result.isConfirmed) {
        const name = document.getElementById('name').value
        console.log(`You entered: ${name}`)
      }
    })



  }




  return (
    <>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">{subject}</span>

        <p className="text-link-ash font-semibold text-sm">
          Home / Modules /SCS1101 Database Management/{' '}
          <span className="text-black font-semibold text-sm">New Session</span>
        </p>
      </div>

      <div className="col-start-1 col-end-13 row-start-2   px-4 pt-5 mt-3 mx-5 bg-white">
        <span className="text-dark-blue font-semibold text-2xl ">
          Create New Session
        </span>
      </div>

      <div className="col-start-1 col-end-13 row-start-3 row-end-6 px-4 pt-5  mx-5 bg-white flex justify-between">
        <div>
          <div className=" relative top-10 left-40 col-start-7 col-end-10">
            {/* <Button title={"With Attendance"} /> */}
            <div className=" text-white text-center text-sm  ">
              <button
                className="bg-light-blue w-[210px] h-[50px] rounded-[5px] "
                onClick={showForm}
              >
                With Attendance
              </button>
            </div>
          </div>
        </div>
        <Link href="/" className=" gap-2 ml-5 items-center">
          <Image
            src="/attendence.svg"
            alt="eQuor Logo"
            width={300}
            height={300}
            className="object"
          />
        </Link>
        <div>
          <div className=" relative top-10 right-40 col-start-7 col-end-10">
            <Button title={'Without Attendance'} />
          </div>
        </div>
      </div>

      <div className="col-start-1 col-end-13 row-start-7 px-4 pt-0">
        <span className="text-dark-blue font-semibold text-2xl">Past</span>
        <Sessioncard />
      </div>

      {/* <div className="col-start-3 col-end-11 row-start-3 px-4 pt-0  ">
                <div className="bg-white rounded shadow-lg px-4 py-3"></div>
            </div> */}
    </>
  )
}

export default page
