import React from 'react'
import index from '@/material_component/client_component'
import { Add_lead_manuinput } from './SSRcomponent'

export default function Add_lead_manuall() {
  return (
    <div className='grid grid-cols-3 gap-4 p-6'>
      { Add_lead_manuinput.map((data)=>{
         return(
            <>
       <div className='flex items-center'>
        <index.Typography className='text-xl'>{data.title}:</index.Typography>
       </div>
       <div className='col-span-2'>
          <index.Input
          name={data.name}
          placeholder={data.title}
          className='h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
           labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}/>
       </div>
            </>
         )
      })}
     <div className='col-span-3 text-center mt-6'> 
     <index.Button className='rounded-full bg-[#67B037]'>Submit</index.Button>
     </div>
    </div>
  )
};
