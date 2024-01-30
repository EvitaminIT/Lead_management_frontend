import React from 'react'
import Index from '@/material_component/client_component'
import { TABLE_HEAD,TABLE_ROWS } from './SSRcomponent';
import { useDispatch,useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { View_all_Service_API } from '../redux/Slice/Evitamin/Veiw_all_serviceRedu';
import { MoonLoader } from 'react-spinners';

export default function Table({
  table_Row 
}) {
  const dispatch=useDispatch()
  const token = useSelector((state) => state.myReducer.token);
  React.useEffect(() => {
    dispatch(View_all_Service_API({accessToken:token.access,page:1}))
}, [])
  const [ TBLdata,setTBLdata ]=React.useState([])
  const table_loading = useSelector((state) => state.View_all_Service_Reducer.loading); 
  const table_coll = useSelector((state) => state.View_all_Service_Reducer.data);
  const Search_data = useSelector((state) => state.SearchService_Reducer.data);
  const Search_load = useSelector((state) => state.SearchService_Reducer.loading);
  const table_data=table_coll || Search_data ?  Search_data? Search_data: table_coll.data :[]

  React.useEffect(() => {
    setTBLdata(table_data)
}, [table_data])

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
        {/* {table_loading==="pending" || Search_load==="pending" ? "": */}
        <tbody>
          {TBLdata.map(({ service_id,country,marketplace,services,price_for_mou },index) => {
            const isLast = Index === TBLdata.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={""}>
                <td className={classes}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {/* {service_id} */}
                    {table_loading==="pending" || Search_load==="pending" ? <Skeleton/>: service_id}
                  </Index.Typography>
                </td>
                <td className={`${classes} capitalize`}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                  {/* {marketplace} */}
                  {table_loading==="pending" || Search_load==="pending" ? <Skeleton/>: marketplace}
                  </Index.Typography>
                </td>
                <td className={`${classes} capitalize`}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {/* {country} */}
                    {table_loading==="pending" || Search_load==="pending" ? <Skeleton/>: country}
                  </Index.Typography>
                </td>
                <td className={`${classes} capitalize`}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                   {/* {services} */}
                   {table_loading==="pending" || Search_load==="pending" ? <Skeleton/>: services}
                  </Index.Typography>
                </td>
                <td className={`${classes} capitalize`}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {/* {price_for_mou} */}
                    {table_loading==="pending" || Search_load==="pending" ? <Skeleton/>: price_for_mou}
                  </Index.Typography>
                </td>
                <td className={`${classes} capitalize`}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {table_loading==="pending" || Search_load==="pending" ? <Skeleton/>:""}
                  </Index.Typography>
                </td>
                <td className={`${classes} capitalize`}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                  {table_loading==="pending" || Search_load==="pending" ? <Skeleton/>:""}
                  </Index.Typography>
                </td>
                <td className={`${classes} capitalize`}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                   {table_loading==="pending" || Search_load==="pending" ? <Skeleton/>:""}
                  </Index.Typography>
                </td>
                <td className={`${classes} space-x-2`}>
                  {/* <Index.IconButton size='sm' className='bg-[#67B037]'><Index.RemoveRedEyeOutlinedIcon/></Index.IconButton> */}
                  {/* <Diloge btn={"table_edit"} Lead_id={lead_id}/>
                  <DeleteBtn Lead_id={lead_id}/> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      {/* }  */}
      </table>
      {/* { table_loading==="pending" || Search_load==="pending"? 
      <div className='h-full flex justify-center items-center'>
        <MoonLoader color="#2F3642" />
        </div>
      :""} */}
    </Index.Card>
    </div>
  )
}
