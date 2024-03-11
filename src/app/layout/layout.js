"use client"
import React from 'react'
import LayoutHeadder from './Layout_headder'
import Index from '@/material_component/client_component'
import { usePathname } from 'next/navigation';
import WellcomeBnr from './wellcome_bnr';

export default function Layout({children}) {
  const pathname = usePathname();
  return (
    <>
    { pathname==="/"? "":
    <div>
     <LayoutHeadder/>
     <div className={`grid grid-cols-5 gap-0 px-32 relative bottom-[3rem]  ${pathname!=="/dashboard"?"hidden":""}`}>
        <div></div>
        <WellcomeBnr/>
     </div>
    <div>
       {children}
    </div>
    </div>}
    </>
  )
}
