import React from 'react'
import Index from '@/material_component/client_component'
import Create_user from './CreateAndEdit';
import { useDispatch,useSelector } from 'react-redux';
import { ViewAllServiceAPI } from '../redux/Slice/Leads/Service/VeiwAllServiceRedu';
import { resetStateCreateService } from '../redux/Slice/Leads/Service/CreateServiceRedu';
import CreateAndEditMarketPlace from './CreateAndEditMarketPlace';
import { ViewAllMarketPlaceAPI } from '../redux/Slice/Leads/MartketPlace/ViewAllMarkerPlaceRedu';
import { resetStateCreateMarketpalce } from '../redux/Slice/Leads/MartketPlace/CreatMarketPlaceRedu';


export default function Diloge({
  btn,
  MPlaceName,
  MPlaceID,
  Service_name,
  serviceID,
  page_no,
  togel,
}) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const handleOpen = () => setOpen(!open);
    const token = useSelector((state) => state.myReducer.token);
    const creacteService = useSelector((state) => state.CreateServiceReducer.loading);
    const AddMarketLoading = useSelector((state) => state.CreateMarketPlaceReducer.loading);
    const UpdateMarketLoading = useSelector((state) => state.UpdateMarketPlaceReducer.loading);

    React.useEffect(()=>{
      if(UpdateMarketLoading==="fulfilled"){
        // dispatch(ViewAllMarketPlaceAPI({ accessToken: token.access}))
        // dispatch(resetState_UpdateMarketpalce())
        setOpen(false)
      }
    },[UpdateMarketLoading])

    React.useEffect(()=>{
      if(AddMarketLoading==="fulfilled"){
        dispatch(ViewAllMarketPlaceAPI({ accessToken: token.access}))
        dispatch(resetStateCreateMarketpalce())
        setOpen(false);
      }
    },[AddMarketLoading])

    React.useEffect(()=>{
      if(creacteService==="fulfilled"){
        dispatch(ViewAllServiceAPI({accessToken:token.access,page:page_no}))
        dispatch(resetStateCreateService())
        setOpen(false);
      }
    },[creacteService])



  return (
    <>
     {btn==="Servicetable_edit" || btn==="MarketPlacetable_edit" ?
      <Index.IconButton onClick={handleOpen} size='sm' className='bg-[#67B037]'><Index.RemoveRedEyeOutlinedIcon/></Index.IconButton>
      :  
     <Index.Button onClick={handleOpen} className="rounded-full bg-[#67B037] float-right">{btn}</Index.Button>
    }
    <Index.Dialog
      className={`${togel==="services"?'!h-[40rem]':''} bg-blue-gray-50`}
      open={open}
      size={togel==="services"?"md":"xs"}
      handler={handleOpen}
    //   animate={{
    //     mount: { scale: 1, y: 0 },
    //     unmount: { scale: 0.9, y: -100 },
    //   }}
    >
       <Index.DialogHeader className={`pb-0 ${btn==="Create" || btn==="MarketPlacetable_edit" || btn==="Servicetable_edit"?"bg-[#2F3642] rounded-t-lg p-1":""}`}>
      
      <div className={`w-full ${btn==="Create" || btn==="MarketPlacetable_edit" || btn==="Servicetable_edit" ?"grid grid-cols-3 gap-4":""}`}>
        {btn==="Create" || btn==="MarketPlacetable_edit" || btn==="Servicetable_edit"?<div></div>:""}
        {btn==="Create" || btn==="MarketPlacetable_edit" || btn==="Servicetable_edit"?
        <div className='flex justify-center items-center'>
        <Index.Typography color='white'> 
        {togel==="services"?
          btn==="Create" ?"Create Service":btn==="Servicetable_edit"?"Edit Service":""
          :btn==="Create"?"Create Marketplace":"Update Marketplace"
        }
          </Index.Typography>
        </div>
        :
        ""
        }
      
       <div>
      <Index.IconButton
          color="blue-gray"
          size="sm"
          variant="text"
          onClick={handleOpen}
          className={`float-right ${btn==="Create"?"text-white":""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Index.IconButton>
        </div>
        </div>
       
      </Index.DialogHeader>
    <Index.DialogBody className={`${btn==="Create" || btn==="Servicetable_edit"?"p-0":""}`}>
        <div className={`${togel==="services"?'h-[60vh]':''} ${btn==="Create" || btn==="Servicetable_edit"?"bg-[#F2F2F2] rounded-b-lg":""}`}>
        {togel==="services"?
        btn==="Create" || btn==="Servicetable_edit"?
          <Create_user PageNo={page_no} type={btn} MarPlaceName={MPlaceName} MarPlaceID={MPlaceID} SerName={Service_name} SerID={serviceID} />
        :''
      :<CreateAndEditMarketPlace Btn={btn} MarketPlaceID={MPlaceID} MarketPlaceName={MPlaceName} />}
        </div>
    </Index.DialogBody>  
    
    </Index.Dialog>
  </>

  )
}
