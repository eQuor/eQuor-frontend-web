'use client'
import React from 'react'
import ProtectedRouteWRap from '@app/ProtectedRouteWRap'

const page = () => {
  return (
    <ProtectedRouteWRap>
      <div>page</div>
    </ProtectedRouteWRap>
  )
}

export default page
