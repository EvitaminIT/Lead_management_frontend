"use client"
import React from 'react'
import Layout_headder from './Layout_headder'
import index from '@/material_component/client_component'


export default function Layout({children}) {
    
  return (
    <div>
     <Layout_headder/>
     <div className='grid grid-cols-5 gap-16 relative bottom-14'>
        <div></div>
        <div className='col-span-3 px-6'>
       <index.Typography className='text-2xl text-[#67B037]'>Welcome Back, Ajex Wills !</index.Typography>
       <index.Typography>You have 45 new leads to update in 5 days.</index.Typography>
        </div>
     </div>
    <div>
       {children}
    </div>
    </div>
  )
}
