import React from 'react'
import Index from '@/material_component/client_component'
import { TABLE_HEAD,TABLE_ROWS } from './SSRcomponent';
import { viewall_Leads_api } from '../redux/Slice/Bussness_leads/view_all_LedSlice';
import { useDispatch,useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Diloge from './diloge';
import DeleteBtn from './deleteBtn';

export default function Table({
  table_Row 
}) {

  return (
    <div className='bg-transparent'>
        <Index.Card className="h-full w-full overflow-scroll bg-transparent shadow-none scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg scrollbar-w-lg h-[55vh]">
      <table className="w-full min-w-max table-auto text-left bg-transparent">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-transparent p-4"
              >
                <Index.Typography
                  variant="small"
                  color="blue-gray"
                  className="font-semibold leading-none opacity-70"
                >
                  {head}
                </Index.Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table_Row.map(({ lead_id, requester_name, service_category,lead_status },index) => {
            const isLast = Index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={lead_id}>
                <td className={classes}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {lead_id ? lead_id : <Skeleton/>}
                  </Index.Typography>
                </td>
                <td className={classes}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {requester_name ? requester_name : <Skeleton/> }
                  </Index.Typography>
                </td>
                <td className={classes}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {service_category ? service_category : <Skeleton/>}
                  </Index.Typography>
                </td>
                <td className={classes}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index}
                  </Index.Typography>
                </td>
                <td className={classes}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {/* {date} */}
                  </Index.Typography>
                </td>
                <td className={classes}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {lead_status ? lead_status :<Skeleton />}
                  </Index.Typography>
                </td>
                <td className={classes}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {/* {date} */}
                  </Index.Typography>
                </td>
                <td className={classes}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {/* {date} */}
                  </Index.Typography>
                </td>
                <td className={`${classes} space-x-2`}>
                  {/* <Index.IconButton size='sm' className='bg-[#67B037]'><Index.RemoveRedEyeOutlinedIcon/></Index.IconButton> */}
                  <Diloge btn={"table_edit"} Lead_id={lead_id}/>
                  <DeleteBtn Lead_id={lead_id}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Index.Card>
    </div>
  )
}
