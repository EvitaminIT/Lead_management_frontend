import React from 'react';
import Index from '@/material_component/client_component';
import { useSelector,useDispatch } from 'react-redux';
import { CreateMarketPlaceAPI } from '../redux/Slice/Leads/MartketPlace/CreatMarketPlaceRedu';
import { ToastContainer,Flip } from 'react-toastify';
import { UpdateMarketPlaceAPI } from '../redux/Slice/Leads/MartketPlace/UpdateMarketPlaceRedu';

export default function CreateAndEditMarketPlace({
   Btn,
   MarketPlaceID,
   MarketPlaceName,
}) {
    

    const dispatch=useDispatch()
    const [ marketName,setmarketName ]=React.useState("");
    const token = useSelector((state) => state.myReducer.token);

    React.useEffect(()=>{
      MarketPlaceName?setmarketName(MarketPlaceName):"";
    },[MarketPlaceName])

    const dispatchAddMarketPlace=()=>{
        const data={
          marketplace:marketName
        }
      Btn==="Create"?dispatch(CreateMarketPlaceAPI({ accessToken: token.access, data: data })):dispatch(UpdateMarketPlaceAPI({ accessToken: token.access,MarketID:MarketPlaceID, data: data }));
      };
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
        <div className='p-6 py-10'>
            <div className='grid grid-cols-3 gap-4'>
                <div className='flex items-center'>
                    <Index.Typography>Marketplace</Index.Typography>
                </div>
                <div className='col-span-2'>
                    <Index.Input value={marketName} onChange={(e)=>setmarketName(e.target.value)} className="h-10 px-5 pr-1 text-sm focus:outline-none !border !border-gray-500 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                            className: "hidden",
                        }} />
                </div>
                <div className='col-span-3 text-center py-4'>
                  <Index.Button onClick={dispatchAddMarketPlace} color='green'>Submit</Index.Button>
                </div>
            </div>
        </div>
        </>
    )
}
