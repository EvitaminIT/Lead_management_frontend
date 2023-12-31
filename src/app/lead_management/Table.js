import React from 'react'
import Index from '@/material_component/client_component'
import { TABLE_HEAD } from './SSRcomponent';
import { viewall_Leads_api } from '../redux/Slice/Bussness_leads/view_all_LedSlice';
import { useDispatch,useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Diloge from './diloge';
import DeleteBtn from './deleteBtn';
import { MoonLoader } from 'react-spinners';

export default function Table({
  table_Row 
}) {
  const BL_loading = useSelector((state) => state.view_all_leadsReducer.loading);
  const search_data = useSelector((state) => state.Search_by_leadReducer.data);
  const search_loading = useSelector((state) => state.Search_by_leadReducer.loading);
  const table_data=search_data?search_data:table_Row

  // const table_data=table_Row
  
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

     {search_loading==="pending" || BL_loading==="pending" ? "":
        <tbody>
          {table_data.map(({ lead_id, requester_name, service_category,lead_status },index) => {
            const isLast = Index === table_Row.length - 1;
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
  
                  </Index.Typography>
                </td>
                <td className={classes}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                
                  </Index.Typography>
                </td>
                <td className={`${classes} space-x-2`}>
                  <Diloge btn={"table_edit"} Lead_id={lead_id}/>
                  <DeleteBtn Lead_id={lead_id}/>
                </td>
              </tr>
            );
          })}
        </tbody>
    }
      </table>
      { search_loading==="pending" || BL_loading==="pending"? 
      <div className='h-full flex justify-center items-center'>
        <MoonLoader color="#2F3642" />
        </div>
      :""}
    </Index.Card>
    </div>
  )
}
