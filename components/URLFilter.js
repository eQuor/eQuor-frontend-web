'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const URLfilter = () => {
 const pathname = usePathname()
 return <p>Current pathname: {pathname}</p>
}

export default URLfilter
