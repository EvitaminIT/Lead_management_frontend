"use client"
import React from 'react'
import Index from '@/material_component/client_component'
import Table from './Table'
import Diloge from './diloge'

export default function Page() {
  return (
    <>
    <div className='p-6 px-32 h-[80vh]'>
    <div className="grid grid-cols-2 gap-4">
    <div>
        {/* <Index.Typography className="text-[#2F3642] text-2xl">Create User</Index.Typography> */}
    </div>
    <div className="grid grid-cols-5 gap-0">
       <div></div>
        <div className="col-span-2 pr-[0.4rem]">
        <div className="text-gray-600 flex items-center">
      <Index.Input
        type="search"
        name="search"
        placeholder="Search..."
        className="h-10 px-5 pr-1 rounded-l-full text-sm focus:outline-none !border !border-gray-300 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 !bg-[#2F3642] text-white"
        labelProps={{
          className: "hidden",
        }}
      />
      <span>
      <Index.Button type="submit" className="rounded-r-full bg-[#67B037] py-[11px]">
        Search
      </Index.Button>
      </span>
    </div>
    <div></div>
        </div>
        <div className='col-span-2'>
        <Diloge btn={"Create"} />
        </div>
    </div>
    </div>
    <br/>
        <Table/>
    </div>
    </>
  )
}
