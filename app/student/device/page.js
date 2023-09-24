'use client'
import React from 'react'
import ProtectedRouteWRap from '@app/ProtectedRouteWRap'
import QRCode from 'react-qr-code'
import { useState } from 'react'

const page = () => {
  const [text, setText] = useState('')
  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <ProtectedRouteWRap>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Your Device
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span className="text-black font-semibold text-sm">Your Device</span>
        </p>
      </div>

      <div className="col-start-1 col-end-13 px-4 pt-5 ">
        <div className="flex">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <p class="mb-3 font-normal text-gray-500 ">
              1. Download eQuor mobile application.
            </p>
            <p class="mb-3 font-normal text-gray-500 ">
              2. Open the Web Application
            </p>
            <p class="mb-3 font-normal text-gray-500 ">3. Scan the QR Code</p>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ml-5">
            <div>
              <h1>QR Code</h1>
              <QRCode value={text} />

              <div>
                <p>Enter your text</p>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => {
                    handleChange(e)
                  }}
                />
                <button>Generate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRouteWRap>
  )
}

export default page
