'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const URLFilter = () => {
    const pathname = usePathname()
    const adminSegment = pathname.split('/')[1]
    return (
        <>
            <p>Current pathname: {pathname}</p>
            <p>Admin segment: {adminSegment}</p>
        </>

    )
}

export default URLFilter
