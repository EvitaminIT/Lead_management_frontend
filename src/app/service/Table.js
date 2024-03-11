import React from 'react'
import Index from '@/material_component/client_component'
import { Service_TABLE_HEAD,Marketplace_TABLE_HEAD,TABLE_ROWS } from './SSRcomponent';
import { useDispatch,useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Diloge from './diloge';
import DeleteBtn from './Delete_service';
import { ToastContainer, Flip, toast } from 'react-toastify';
import { ViewAllMarketPlaceAPI } from '../redux/Slice/Leads/MartketPlace/ViewAllMarkerPlaceRedu';
import { resetStateUpdateMarketpalce } from '../redux/Slice/Leads/MartketPlace/UpdateMarketPlaceRedu';
import { resetStateDeleteMarketpalce } from '../redux/Slice/Leads/MartketPlace/DeleteMarketPlaceRedu';

export default function Table({
  table_Row,
  TableType,
  pageNo,
  TableData,
}) {
  const dispatch=useDispatch()
  const token = useSelector((state) => state.myReducer.token);
  const [ TableHead,setTableHead ]=React.useState([]);
  const ServiceTableLoading = useSelector((state) => state.ViewAllServiceReducer.loading);  
  const MarketPlaceTableLoading = useSelector((state) => state.ViewAllMarketReducer.loading);  
  const MarketPlaceSearch_data = useSelector((state) => state.SearchMarketPlaceReducer.data);  
  const MarketPlaceSerchLoading = useSelector((state) => state.SearchMarketPlaceReducer.loading); 

  const ServiceSearch_data = useSelector((state) => state.SearchServiceReducer.data);
  const ServiceSearchLoad = useSelector((state) => state.SearchServiceReducer.loading);
  const Servicetable_data=TableData || ServiceSearch_data ?  ServiceSearch_data? ServiceSearch_data: TableData :[]
  const MarketPlace_data=TableData || MarketPlaceSearch_data ? MarketPlaceSearch_data? MarketPlaceSearch_data : TableData:[];
  const UpdateMarketLoading = useSelector((state) => state.UpdateMarketPlaceReducer.loading);
  const DeleteMarketLoading = useSelector((state) => state.DeleteMarketPlaceReducer.loading);
  const [ TBLData,setTBLData ]=React.useState([])


  React.useEffect(()=>{
    if(UpdateMarketLoading==="fulfilled"||DeleteMarketLoading==="fulfilled"){
      dispatch(ViewAllMarketPlaceAPI({ accessToken: token.access}))
      UpdateMarketLoading ? dispatch(resetStateUpdateMarketpalce()):dispatch(resetStateDeleteMarketpalce());

    }
  },[UpdateMarketLoading,DeleteMarketLoading])


  React.useEffect(()=>{
    TableType==="Service" ? setTBLData(Servicetable_data):setTBLData(MarketPlace_data);
  },[Servicetable_data,MarketPlace_data])

  React.useEffect(()=>{
    TableType==="Service" ? setTableHead(Service_TABLE_HEAD):setTableHead(Marketplace_TABLE_HEAD);
  },[TableType]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    <div className='bg-transparent'>
        <Index.Card className="h-full w-full overflow-scroll bg-transparent shadow-none scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg scrollbar-w-lg h-[55vh]">
      <table className="w-full min-w-max table-auto text-left bg-transparent">
        <thead>
          <tr>
            {TableHead.map((head,index) => (
              <th
                key={index}
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

        {TableType==="Service"?
      
        <tbody>
          {TBLData.map(({ service_id,service_name,marketplace_id,marketplace },index) => {
            const isLast = Index === TBLData.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={index}>
                <td className={classes}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {ServiceTableLoading==="pending" || ServiceSearchLoad==="pending" ? <Skeleton/>: service_name}
                  </Index.Typography>
                </td>
                <td className={`${classes} capitalize`}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                  {ServiceTableLoading==="pending" || ServiceSearchLoad==="pending" ? <Skeleton/>: marketplace}
                  </Index.Typography>
                </td>
                <td className={`${classes} space-x-2`}>
                {ServiceTableLoading==="pending" || ServiceSearchLoad==="pending" ? <Skeleton/>:
                <>
                <Diloge togel={"services"}  btn={"Servicetable_edit"} page_no={pageNo} serviceID={service_id} Service_name={service_name} MPlaceID={marketplace_id} MPlaceName={marketplace} />
                <DeleteBtn serviceID={service_id}/>
                </>
                }
                </td>
              </tr>
            );
          })}
        </tbody>

        :
        <tbody>

       { TBLData.map(({ marketplace,id },index) => {
          const isLast = Index === TBLData.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={index}>

              <td className={`${classes} capitalize`}>
                <Index.Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                {MarketPlaceTableLoading==="pending" || MarketPlaceSerchLoading==="pending" ? <Skeleton/>: marketplace}
                </Index.Typography>
              </td>
              <td className={`${classes} space-x-2`}>
               <>
                <Diloge MPlaceID={id} MPlaceName={marketplace} page_no={pageNo} btn={"MarketPlacetable_edit"}/>
                <DeleteBtn  MarID={id} MarName={marketplace}/>
               </>
              </td>
            </tr>
          );
        })}

      </tbody>
        }

      </table>
    </Index.Card>
    </div>
    </>
  )
}
