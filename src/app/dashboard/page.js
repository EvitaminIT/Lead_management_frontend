"use client"
import React from 'react'
import Index from '@/material_component/client_component'
import Image from 'next/image'
import { total_head, TABLE_HEAD, TABLE_ROWS } from './SSRcomponent'
import side_art from '../../Image/side_Artboard.svg'
import { useSelector } from 'react-redux'


export default function Page() {
  const [Selselectfild, setSelselectfild] = React.useState("Select_Performance_Type");
  const data = useSelector((state) => state.myReducer.data);
  const user_roll=data? data.user_role:""
  return (
    <div className='grid grid-cols-5 gap-4 w-full rounded-t-[40px] bg-[#2F3642] py-10 px-32 overflow-auto !h-[40.6rem] scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg scrollbar-w-lg'>
      {total_head.map((details) => {
        return (
          <>
            {/* {details.title==="Asked for Details" || details.title==="Associate Not Assigned" ? "wrok":""} */}
            <Index.Card className={`${details.title==="Asked for Details" || details.title==="Associate Not Assigned" ? `${user_roll ==="admin" || user_roll ==="lead_manager" ?"!hidden":""}`:"" } grid grid-cols-3 gap-2 p-6  ${details.title === "Converted Leads" ? "bg-[#E8FAD1]" : ""} ${details.title === "Not Interested" ? "bg-[#F9CECE]" : ""}`}>
              <div className='flex items-center'>
                <Image src={details.image} />
              </div>
              <div className='col-span-2 text-center flex flex-col justify-around'>
                <div className=''>
                  <Index.Typography className='text-xl'>{details.title}</Index.Typography>
                </div>
                <div className='border-t-2 border-[#D9D9D9]'>
                  <Index.Typography className='text-3xl'>{details.total_no}</Index.Typography>
                </div>
              </div>
            </Index.Card>
          </>
        )
      })}

      {/* table */}
      <Index.Card className='col-span-4 p-4'>
        <div className='flex justify-between mb-2'>
          <Index.Typography className='text-2xl px-[12px] text-[#67B037] font-bold'>Team Performance</Index.Typography>
          <div className='w-1/5'>
            <Index.Select size='md' value={Selselectfild} onChange={(value) => setSelselectfild(value)} variant="outlined" placeholder="Select Date" className={`px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full bg-[#2F3642] ${Selselectfild === "Select_Performance_Type" ? "text-[#9e9e9e]" : "text-white"}`}
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }} label="Select Version">
              <Index.Option value='Select_Performance_Type' className='capitalize' disabled>Select Performance Type</Index.Option>
              <Index.Option value='Overall_Performance' className='capitalize'>Overall Performance</Index.Option>
              <Index.Option value='Associate_Level_Performance' className='capitalize'>Associate Level Performance</Index.Option>
              <Index.Option value='Service_Level_Performance' className='capitalize'>Service Level Performance</Index.Option>
            </Index.Select>
          </div>
        </div>
        <Index.Card className="shadow-none h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="p-4"
                  >
                    <Index.Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none"
                    >
                      {head}
                    </Index.Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, job, date }) => {
                const isLast = Index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Index.Typography>
                    </td>
                    <td className={classes}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {job}
                      </Index.Typography>
                    </td>
                    <td className={classes}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Index.Typography>
                    </td>
                    <td className={classes}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Index.Typography>
                    </td>
                    <td className={classes}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Index.Typography>
                    </td>
                    <td className={classes}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Index.Typography>
                    </td>
                    <td className={classes}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Index.Typography>
                    </td>
                    <td className={classes}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Index.Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Index.Card>
      </Index.Card>
      <Index.Card>
        <Image src={side_art} />
      </Index.Card>
    </div>
  )
}
