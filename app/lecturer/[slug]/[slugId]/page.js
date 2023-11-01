"use client";
import React from 'react'
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";
import SessionTabs from '@components/SessionTabs';





function page({ params }) {
  const slug = params.slugId
  console.log(slug)
  return (
    <ProtectedRouteWRap>
      <div>
        {/* <SessionTabs></SessionTabs> */}
        <SessionTabs prop1={slug} />
      </div>
    </ProtectedRouteWRap>
  )
}

export default page
