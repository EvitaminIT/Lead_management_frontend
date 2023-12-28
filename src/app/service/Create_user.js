import React from 'react'
import { Create_user_manuinput } from './SSRcomponent'
import Index from '@/material_component/client_component'
import { removeUnderscores } from '../commen/commen_fun'

export default function Create_user() {
  return (
    <div className='grid grid-cols-3 gap-4 p-6'>
       { Create_user_manuinput.map((data)=>{
         return(
            <>
       {data.title==="Countryd" || data.title === "Marketplace" || data.title === "Service Category" ? 
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
        <Index.Typography className='text-xl'>{data.title}</Index.Typography>
       </div>
       <div className='col-span-2'>
          <Index.Input
          onChange={onchange}
          name={data.name}
          type={data.title==="Phone number"?"number":"text"}
        //   disabled={SelMarketplace && Selcountry && SelService ? false : true}
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
    </div>
  )
}
