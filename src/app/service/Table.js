import React from 'react'
import Index from '@/material_component/client_component'
import { Service_TABLE_HEAD,TABLE_ROWS,Marketplace_TABLE_HEAD } from './SSRcomponent';
import { useDispatch,useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { View_all_Service_API } from '../redux/Slice/Evitamin/Veiw_all_serviceRedu';
import Diloge from './diloge';

export default function Table({
  table_Row,
  TableType,
}) {
  const dispatch=useDispatch()
  const token = useSelector((state) => state.myReducer.token);
  React.useEffect(() => {
    dispatch(View_all_Service_API({accessToken:token.access,page:1}))
}, [])
  const [ TableHead,setTableHead ]=React.useState([])
  const [ ServiceTBLdata,setServiceTBLdata ]=React.useState([])
  const [ MarketPlcTBLdata, setMarketPlcTBLdata ] = React.useState([])
  const ServiceTableLoading = useSelector((state) => state.View_all_Service_Reducer.loading); 
  const ServiceTableCall = useSelector((state) => state.ViewAllServiceReducer.data);
  const MarkerplaceTableCall = useSelector((state) => state.ViewAllMarketReducer.data);
  const ServiceSearch_data = useSelector((state) => state.SearchService_Reducer.data);
  const ServiceSearchLoad = useSelector((state) => state.SearchService_Reducer.loading);
  const Servicetable_data=ServiceTableCall || ServiceSearch_data ?  ServiceSearch_data? ServiceSearch_data: ServiceTableCall.data :[]
  const MarketPlace_data=MarkerplaceTableCall? MarkerplaceTableCall.marketplace:""

  React.useEffect(()=>{
    TableType==="Service" ? setTableHead(Service_TABLE_HEAD):setTableHead(Marketplace_TABLE_HEAD);
  },[TableType])

 
  React.useEffect(() => {
    TableType==="Service"?
    setServiceTBLdata(Servicetable_data)
    :TableType==="Markerplace"?
    setMarketPlcTBLdata(MarketPlace_data)
    :
    "";
}, [Servicetable_data,TableType])
 

  return (
    <div className='bg-transparent'>
        <Index.Card className="h-full w-full overflow-scroll bg-transparent shadow-none scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg scrollbar-w-lg h-[55vh]">
      <table className="w-full min-w-max table-auto text-left bg-transparent">
        <thead>
          <tr>
            {TableHead.map((head) => (
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
        {/* {ServiceTableLoading==="pending" || ServiceSearchLoad==="pending" ? "": */}
        {TableType==="Service"?
        <tbody>
          {ServiceTBLdata.map(({ service_id,service_name,marketplace_id,marketplace },index) => {
            const isLast = Index === ServiceTBLdata.length - 1;
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
                    {ServiceTableLoading==="pending" || ServiceSearchLoad==="pending" ? <Skeleton/>: service_name}
                  </Index.Typography>
                </td>
                <td className={`${classes} capitalize`}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                  {/* {marketplace} */}
                  {ServiceTableLoading==="pending" || ServiceSearchLoad==="pending" ? <Skeleton/>: marketplace}
                  </Index.Typography>
                </td>
                <td className={`${classes} space-x-2`}>
                  {/* <Index.IconButton size='sm' className='bg-[#67B037]'><Index.RemoveRedEyeOutlinedIcon/></Index.IconButton> */}
                  <Diloge btn={"Servicetable_edit"} serviceID={service_id} Service_name={service_name} MPlaceID={marketplace_id} MPlaceName={marketplace} />
                  {/* <DeleteBtn Lead_id={lead_id}/> */}
                </td>
              </tr>
            );
          })}
        </tbody>
        :
        <tbody>
       {MarketPlcTBLdata?
        MarketPlcTBLdata.map(({ marketplace,id },index) => {
          const isLast = Index === MarketPlcTBLdata.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={""}>

              <td className={`${classes} capitalize`}>
                <Index.Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                {/* {marketplace} */}
                {ServiceTableLoading==="pending" || ServiceSearchLoad==="pending" ? <Skeleton/>: marketplace}
                </Index.Typography>
              </td>
              <td className={`${classes} space-x-2`}>
                {/* <Index.IconButton size='sm' className='bg-[#67B037]'><Index.RemoveRedEyeOutlinedIcon/></Index.IconButton> */}
                <Diloge btn={"MarketPlacetable_edit"}/>
                {/* <DeleteBtn Lead_id={lead_id}/> */}
              </td>
            </tr>
          );
        })
        :""}
      </tbody>
        }
      {/* }  */}
      </table>
    </Index.Card>
    </div>
  )
}
