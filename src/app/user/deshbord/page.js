"use client"
import React from 'react'
import index from '@/material_component/client_component'
import Image from 'next/image'
import { total_head,TABLE_HEAD,TABLE_ROWS } from './SSRcomponent'
import side_art from '../../../Image/side_Artboard.svg'


export default function page() {
  return (
    <div className='grid grid-cols-5 gap-4 w-full rounded-t-[40px] bg-[#2F3642] py-10 px-32 overflow-auto h-[75.2vh] scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg scrollbar-w-lg'>
    {total_head.map((details)=>{
        return(
            <>
      <index.Card className={`grid grid-cols-3 gap-2 p-6  ${details.title==="Converted Leads"?"bg-[#E8FAD1]":""} ${details.title==="Not Interested"?"bg-[#F9CECE]":""}`}>
        <div className='flex items-center'>
            <Image src={details.image} />
        </div>
        <div className='col-span-2 text-center flex flex-col justify-around'>
           <div className=''>
            <index.Typography className='text-xl'>{details.title}</index.Typography>
           </div>
           <div className='border-t-2 border-[#D9D9D9]'>
            <index.Typography className='text-3xl'>{details.total_no}</index.Typography>
           </div>
        </div>
      </index.Card>
            </>
        )
    })}

    {/* table */}
     <index.Card className='col-span-4 p-4'>
     <index.Typography className='text-2xl px-[12px] text-[#67B037] font-bold'>Team Performance</index.Typography>
     <index.Card className="shadow-none h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="p-4"
              >
                <index.Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none"
                >
                  {head}
                </index.Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </index.Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </index.Card>
     </index.Card>
     <index.Card>
        <Image src={side_art}/>
     </index.Card>
    </div>
  )
}
