'use client'
import React from 'react'
import Button from './Button'
import Swal from 'sweetalert2'

import DataTable from '@components/DataTable'
import { axiosGet, axiosPost } from '@common/basicAxios'
import { useEffect, useState, useRef } from 'react'
import QRCodeComponent from '@components/QrcodeComponent'
import ReactDOMServer from 'react-dom/server'
import withReactContent from 'sweetalert2-react-content'
//import { renderToString } from 'react-dom/server'

function SessionDetails(props) {
  const slug = props.prop1

  const [qrCode, setQrCode] = useState([])

  const getQrCode = async () => {
    const slug = props.prop1 // Assuming 'slug' comes from props
    try {
      const response = await axiosGet(`/lecture/generateQrSequence/${slug}`)
      if (response.status === 200) {
        console.log('axios worked')
        console.log(response.data)
        setQrCode(response.data)
      } else {
        throw new Error('Error while fetching API')
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log('useEffect is running')
    getQrCode()
  }, []) // Add dependencies if any

  const data = [
    {
      id: 1,
      name: 'Manag Lama',
      reg: '2020/IS/027',
      ind: 20020279,
      email: 'maan@gmail.com',
      age: 23,
    },
    {
      id: 1,
      name: 'Manag Lama',
      reg: '2020/IS/027',
      ind: 20020279,
      email: 'maan@gmail.com',
      age: 23,
    },
    {
      id: 1,
      name: 'Manag Lama',
      reg: '2020/IS/027',
      ind: 20020279,
      email: 'maan@gmail.com',
      age: 23,
    },
    {
      id: 1,
      name: 'Manag Lama',
      reg: '2020/IS/027',
      ind: 20020279,
      email: 'maan@gmail.com',
      age: 23,
    },
    {
      id: 1,
      name: 'Manag Lama',
      reg: '2020/IS/027',
      ind: 20020279,
      email: 'maan@gmail.com',
      age: 23,
    },
    {
      id: 1,
      name: 'Manag Lama',
      reg: '2020/IS/027',
      ind: 20020279,
      email: 'maan@gmail.com',
      age: 23,
    },
    {
      id: 1,
      name: 'Manag Lama',
      reg: '2020/IS/027',
      ind: 20020279,
      email: 'maan@gmail.com',
      age: 23,
    },
    {
      id: 1,
      name: 'Manag Lama',
      reg: '2020/IS/027',
      ind: 20020279,
      email: 'maan@gmail.com',
      age: 23,
    },
    {
      id: 1,
      name: 'Manag Lama',
      reg: '2020/IS/027',
      ind: 20020279,
      email: 'maan@gmail.com',
      age: 23,
    },

    // Add more data as needed
  ]

  const columns = [
    { Header: '#', accessor: 'id' },
    { Header: 'Student name', accessor: 'name' },
    { Header: 'Reg No', accessor: 'reg' },
    { Header: 'Index No', accessor: 'ind' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Action', accessor: 'age' },
  ]

  const showAlertId = () => {
    //Swal.fire(slug)
    // Swal.fire(slug, 'Enter this code to log in to the session!', 'success')
    Swal.fire({
      title: slug,
      width: 600,
      padding: '3em',
      //background: '#fff url(/images/trees.png)',
      backdrop: `
    rgba(0,0,123,0.4)
    left top
    no-repeat
  `,
      html: '<p>Enter this code to log in to the session!</p>',
    })
  }

    //QR CODE WITH DEFINED ARRAY
  //   const MySwal = withReactContent(Swal)
  //   const values = [
  //     'value1',
  //     'value2',
  //     'value3',
  //     'value4',
  //     'value5',
  //     'value6',
  //     'value7',
  //     'value8',
  //     'value9',
  //     'value10',
  //   ]

  //   const generateQRCode = (value) => {
  //     return ReactDOMServer.renderToString(
  //       <div className="flex justify-center">
  //         <QRCodeComponent value={value} />
  //       </div>
  //     )
  //   }

  // const showAlertQr = async () => {
  //   await MySwal.fire({
  //     title: `QR Code 1`,
  //     html: generateQRCode(values[0]),
  //     timer: 3000 * values.length,
  //     timerProgressBar: true,
  //     width: '800px',
  //     //  height:800,
  //     didOpen: () => {
  //       Swal.showLoading()
  //       let i = 1
  //       const intervalId = setInterval(() => {
  //         if (i < values.length) {
  //           const htmlContainer = Swal.getHtmlContainer()
  //           if (htmlContainer) {
  //             // Check if the popup is still open
  //             Swal.update({ title: `QR Code ${i + 1}` }) // Update the title
  //             htmlContainer.innerHTML = generateQRCode(values[i])
  //             i++
  //           } else {
  //             clearInterval(intervalId)
  //           }
  //         } else {
  //           clearInterval(intervalId)
  //         }
  //       }, 2000)
  //     },
  //   })
  // }

    //QR CODE WITH DEFINED ARRAY
    const MySwal = withReactContent(Swal)
  

    const generateQRCode = (qrCode) => {
      return ReactDOMServer.renderToString(
        <div className="flex justify-center">
          <QRCodeComponent value={String(qrCode)} />
        </div>
      )
    }

  const showAlertQr = async () => {
    await MySwal.fire({
      title: `QR Code 1`,
      html: generateQRCode(qrCode[0]),
      timer: 3000 * qrCode.length,
      timerProgressBar: true,
      width: '800px',
      //  height:800,
      didOpen: () => {
        Swal.showLoading()
        let i = 1
        const intervalId = setInterval(() => {
          if (i < qrCode.length) {
            const htmlContainer = Swal.getHtmlContainer()
            if (htmlContainer) {
              // Check if the popup is still open
              Swal.update({ title: `QR Code ${i + 1}` }) // Update the title
              htmlContainer.innerHTML = generateQRCode(qrCode[i])
              i++
            } else {
              clearInterval(intervalId)
            }
          } else {
            clearInterval(intervalId)
          }
        }, 2000)
      },
    })
  }

  return (
    <>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Session Name
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span className="text-black font-semibold text-sm">Your Device</span>
        </p>
      </div>

      <div className="col-start-3 col-end-13 px-4  pt-5">
        <div className="flex">
          <div className="p-20 bg-white border flex flex-col items-center justify-center border-gray-200 rounded-lg shadow">
            <p className="mb-3 items-center text-dark-blue text-3xl font-semibold ">
              Session ID
            </p>
            {/* <Button title="View Session ID"></Button> */}
            <button
              onClick={showAlertId}
              className="bg-light-blue w-[200px] h-[40px] rounded-[5px] text-white text-center text-sm "
            >
              View Session ID
            </button>
          </div>
          <div className="p-20 bg-white flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow ml-5">
            <p className="mb-3 items-center text-dark-blue text-3xl font-semibold ">
              Session QR
            </p>
            {/* <Button title="View Session ID"></Button> */}
            <button
              onClick={showAlertQr}
              className="bg-light-blue w-[200px] h-[40px] rounded-[5px] text-white text-center text-sm "
            >
              View Session QR
            </button>
          </div>
          {/* <QRCodeComponent value={5} /> */}
        </div>
      </div>
      {/* <div className="col-start-1 col-end-13 px-4 pt-5">
        <DataTable columns={columns} data={data} />
      </div> */}
    </>
  )
}

export default SessionDetails
