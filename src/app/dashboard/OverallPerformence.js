import React from 'react'
import Index from '@/material_component/client_component'
import { TABLE_HEAD } from './SSRcomponent';

export default function OverallPerformence() {
    const data=[
        {
            Title:"Business Development",
            TABLE_HEAD:["Name","Total Assigned Leads","Open Leads","Closed Leads","Unresponsive","Not Interested","Conversion Rate"],
            TABLE_ROWS:[
                {
                    Name:"xyz",
                    TotalAssLeads:120,
                    OpenLeads:20,
                    ClosedLeads:40,
                    Unresponsive:10,
                    NotIntersted:40,
                    ConverRate:70,
                }
            ]
        }
    ]
  return (
    <div className='px-10'>
        {data.map((Data,index)=>(
            <>
            <Index.Typography className='text-lg px-[12px] text-[#67B037] font-semibold'>{Data.Title}</Index.Typography>
        <div>
        <table className="w-full min-w-max table-auto text-left">
    <thead>
      <tr>
        {Data.TABLE_HEAD.map((head,index) => (
          <th
            key={index}
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
      {Data.TABLE_ROWS.map(({ Name, TotalAssLeads,OpenLeads, ClosedLeads,Unresponsive,NotIntersted,ConverRate },index) => {
        const isLast = Index === Data.TABLE_ROWS.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b-2 border-blue-gray-50";

        return (
          <tr key={index}>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {Name}
              </Index.Typography>
            </td>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {TotalAssLeads}
              </Index.Typography>
            </td>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {OpenLeads}
              </Index.Typography>
            </td>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {ClosedLeads}
              </Index.Typography>
            </td>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {Unresponsive}
              </Index.Typography>
            </td>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {NotIntersted}
              </Index.Typography>
            </td>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {ConverRate}
              </Index.Typography>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
        </div>
            </>
        )) }
      
    </div>
  )
}
