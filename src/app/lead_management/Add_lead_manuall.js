import React from 'react'
import Index from '@/material_component/client_component'
import { Add_lead_manuinput } from './SSRcomponent'
import { useSelector, useDispatch } from "react-redux";
import { Add_manual_Leads_api } from '../redux/Slice/Bussness_leads/Add_manual_leads';
import { view_country_api,view_Marketpalce_api,view_Service_api } from '../redux/Slice/Bussness_leads/add_view_new_ser';
import { Flip } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetState_add_view_leads } from '../redux/Slice/Bussness_leads/add_view_new_ser';
import { viewall_Leads_api } from '../redux/Slice/Bussness_leads/view_all_LedSlice';



export default function Add_lead_manuall() {
  const [Selcountry, setSelCountry] = React.useState("");
  const [SelMarketplace, setMarketplace] = React.useState("");
  const [SelService, setSelServive] = React.useState("");
  const dispatch = useDispatch()
  const [ManulLeaddetails,setManulLeaddetails]= React.useState({})
  const token = useSelector((state) => state.myReducer.token);
  const onchange=(e)=>{
    setManulLeaddetails({...ManulLeaddetails,[e.target.name]:e.target.value})
 }

 React.useEffect(() => {
  dispatch(view_country_api(token.access))
}, [])
const submint_Lodeing = useSelector((state) => state.Add_manual_leadsReducer.loading);
const country_call = useSelector((state) => state.add_and_view_new_service_Reducer.data_country);
const country=country_call?country_call:[]
const Marketplace_state = useSelector((state) => state.add_and_view_new_service_Reducer.data_market);
const Service_state = useSelector((state) => state.add_and_view_new_service_Reducer.data_Service);

const Marketplace = Marketplace_state ? Marketplace_state :[];
const Service=Service_state? Service_state :[];


 const add_data =()=>{
   dispatch(Add_manual_Leads_api({ accessToken: token.access, data:ManulLeaddetails })) 
   dispatch(resetState_add_view_leads())
   setSelCountry("")
   setMarketplace("")
   setSelServive("")
   setManulLeaddetails({ "requester_name":"","phone_number":"","email_id":""})
   dispatch(viewall_Leads_api({accessToken:token.access,pages:1}))
 }

const setCountry=(value)=>{
   setSelCountry(value)
   setManulLeaddetails({...ManulLeaddetails,"service_country":value})
   dispatch(view_Marketpalce_api({accessToken:token.access,country:value}))
} 

const setmarket=(value)=>{
  setMarketplace(value)
  setManulLeaddetails({...ManulLeaddetails,"marketplace":value})
  dispatch(view_Service_api({accessToken:token.access,country:Selcountry,marketplace:value}))
} 

const setSvervice=(value)=>{
  setSelServive(value)
  setManulLeaddetails({...ManulLeaddetails,"service_category":value})
} 

// submint_Lodeing==="fulfilled" ?  dispatch(resetState_add_view_leads()) : "";







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
    <div className='grid grid-cols-3 gap-4 p-6'>
      { Add_lead_manuinput.map((data)=>{
         return(
            <>
       {data.title==="Country" || data.title === "Marketplace" || data.title === "Service Category" ? 
        <>
         <div className='flex items-center'>
        <Index.Typography className='text-xl'>{data.title}:</Index.Typography>
       </div>
       <div className='col-span-2'>
       <Index.Select placeholder={data.title} value={data.title==="Country" ? Selcountry:""} disabled={data.title==="Marketplace" ? Selcountry? false : true :data.title==="Service Category"? SelMarketplace ? false:true:""} onChange={(value) => data.title==="Country" ? setCountry(value) : data.title==="Marketplace" ? setmarket(value) : data.title==="Service Category"? setSvervice(value):""} variant="outlined" className='h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
           labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }} label="Select Version">
        {data.title==="Country"? country.map((coun,index)=>{
          return(
            <Index.Option value={coun} id={index} key={index}>{coun}</Index.Option>
          )
        }): data.title==="Marketplace" ? 
        Marketplace.map((mar,index)=>{
          return(
            <Index.Option value={mar} id={index} key={index}>{mar}</Index.Option>
          )
        })
        :data.title==="Service Category"?
        Service.map((mar,index)=>{
          return(
            <Index.Option value={mar} id={index} key={index}>{mar}</Index.Option>
          )
        }):""
      }
       
  
      </Index.Select>
       </div>
        </>
       :
       <>
       <div className='flex items-center'>
        <Index.Typography className='text-xl'>{data.title}:</Index.Typography>
       </div>
       <div className='col-span-2'>
          <Index.Input
          onChange={onchange}
          name={data.name}
          type={data.title==="Phone number"?"number":"text"}
          disabled={SelMarketplace && Selcountry && SelService ? false : true}
          placeholder={data.title}
          value={data.title==="Requester name" ? ManulLeaddetails.requester_name : data.title==="Phone number"? ManulLeaddetails.phone_number :data.title==="Email id"?ManulLeaddetails.email_id:""}
          className='h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
           labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}/>
       </div>
       </>
      }
            </>
         )
      })}
     <div className='col-span-3 text-center mt-6'> 
     <Index.Button onClick={add_data} disabled={submint_Lodeing==="pending"? true:false} className='rounded-full bg-[#67B037]'>
      <div className={submint_Lodeing==="pending"? "px-4":""}>
      {submint_Lodeing==="pending"? <Index.Spinner className="h-4 w-4" color='white' /> : "Submit"}   
      </div> 
     </Index.Button>
     </div>
    </div>
  </>
  )
};
