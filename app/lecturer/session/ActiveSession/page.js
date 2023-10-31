"use client";
import React from 'react'
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";
import SessionTabs from '@components/SessionTabs';





function page() {
  return (
    <ProtectedRouteWRap>

    <div>
       <SessionTabs></SessionTabs>

       
      
    </div>
    </ProtectedRouteWRap>
  )
}

export default page
