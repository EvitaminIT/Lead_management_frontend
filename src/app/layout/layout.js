"use client"
import React from 'react'
import Layout_headder from './Layout_headder'
import Index from '@/material_component/client_component'
import { usePathname } from 'next/navigation';
import Wellcome_bnr from './wellcome_bnr';

export default function Layout({children}) {
  const pathname = usePathname();
  return (
    <>
    { pathname==="/"? "":
    <div>
     <Layout_headder/>
     <div className={`grid grid-cols-5 gap-0 px-32 relative bottom-14  ${pathname!=="/dashboard"?"hidden":""}`}>
        <div></div>
        <Wellcome_bnr/>
     </div>
    <div>
       {children}
    </div>
    </div>}
    </>
  )
}
