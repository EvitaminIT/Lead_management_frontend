"use client"
import React from 'react'
import { edit_from_title } from './SSRcomponent'
import Index from '@/material_component/client_component'
import { useSelector, useDispatch } from "react-redux";
import { getInd_Leads_api } from '../redux/Slice/Bussness_leads/Get_ind_leads';
import { convertToSlug, removeUnderscores } from './SSRcomponent';
import { RotateLoader } from 'react-spinners';
import { view_country_api } from '../redux/Slice/Bussness_leads/add_view_new_ser';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}



export default function Edit_popup({
  led_id,
}) {
  const [date, setDate] = React.useState();
  const [selectvalue, setSelectvalue] = React.useState("india");
  const [isChecked, setChecked] = React.useState(false);
  const [isDisabled, setDisabled] = React.useState(false);
  const from_data2 = useSelector((state) => state.GetInd_leadsReducer.Ind_led_data)
  const from_data=from_data2?from_data2:[]
  const token = useSelector((state) => state.myReducer.token);
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(0);
  const loading = useSelector((state) => state.GetInd_leadsReducer.BL_view_loading)
  const country_call = useSelector((state) => state.add_and_view_new_service_Reducer.data_country);
  const handleOpen = (value, title) => {
    dispatch(getInd_Leads_api({accessToken:token.access,table: convertToSlug(title),lead_id: led_id}))
    setOpen(open === value ? 0 : value);
    if(title==="All Identifiers"){
      setDisabled(true)
      setChecked(false)
    }else{
      setDisabled(false)
    }
  }
  
  const handleChange = () => {
    setChecked(!isChecked); // Toggle the state
  };


  const handle_dropdown=(table)=>{
    console.log(table,"work dorp")
    if(table==="service_country"){
      dispatch(view_country_api(token.access))
    }
  }



  return (
    <div className='h-[90%]'>
      <div className='p-6 pb-0 bg-white flex justify-between'>
        <Index.Typography className='flex gap-1'> <Index.Typography className='font-semibold'>Lead Id:</Index.Typography> {led_id}</Index.Typography>
        <div className="gap-4 px-16 flex justify-end mb-4">
        <Index.Switch color="red" checked={isChecked} disabled={isDisabled} onChange={handleChange} />
        <p>Edit {isChecked ? "on" : "off"}</p>
        </div>
      </div>
      <div className='overflow-auto h-full scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg scrollbar-w-lg p-4 pt-0 pb-0 rounded-b-lg bg-white'>
        
        {edit_from_title.map((data, index) => {
          return (
            <>
              <Index.Accordion open={open === index + 1} icon={<Icon id={index + 1} open={open} />}>
                <Index.AccordionHeader className="text-sm p-2" onClick={() => handleOpen(index + 1, data.title)}>{data.title}</Index.AccordionHeader>
                <Index.AccordionBody>
                  <Index.Card className="grid grid-cols-2 gap-4 bg-[#F2F2F2] p-4 shadow-none">
                    <div className={`col-span-2  ${loading === "pending" ? "hidden" : data.title==="All Identifiers"? "hidden": isChecked ? "" : "hidden"}`}>
                      <Index.Button disabled={data.title==="All Identifiers"? true : isChecked ? false : true} className='float-right bg-[#67B037]' size='sm'>Update</Index.Button>
                    </div>
                    {loading === "pending" ? <div className='col-span-2 flex justify-center  p-4'><RotateLoader color="#2F3642" /></div> :
                      from_data.map((frm_data) => 
                       (
                       <>
                       {frm_data.type==="CharField"?
                        <div className="grid grid-cols-3 gap-4">
                          <div className='flex items-center'>
                            <Index.Typography className="text-sm capitalize">{removeUnderscores(frm_data.key)}</Index.Typography>
                          </div>
                          <div className='col-span-2'>
                            <Index.Input
                              size="sm"
                              //   name={data.name}
                              placeholder={frm_data.value}
                              disabled={data.title==="All Identifiers"? true : isChecked ? false : true}
                              className='h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10  border-solid border-2 border-[#777777] bg-white'
                              labelProps={{
                                className: "hidden",
                              }}
                              containerProps={{ className: "min-w-[100px]" }} />
                          </div>
                        </div>
                      :frm_data.type==="dropdown"?
                      <div className="grid grid-cols-3 gap-4">
                          <div className='flex items-center'>
                            <Index.Typography className="text-sm capitalize">{removeUnderscores(frm_data.key)}</Index.Typography>
                          </div>
                          <div className='col-span-2'>
                          <Index.Select value={String(frm_data.value)} onChange={(value) => setSelectvalue(value)} onLoad={handle_dropdown(frm_data.key)} className='h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10  border-solid border-2 border-[#777777] bg-white'
                              labelProps={{
                                className: "hidden",
                              }}
                              containerProps={{ className: "min-w-[100px]" }} disabled={isChecked ? false : true} label="Select Version">
                            <Index.Option  value={frm_data.value}>{frm_data.value}</Index.Option>
                            <Index.Option>Material Tailwind HTML</Index.Option>
                            <Index.Option>Material Tailwind React</Index.Option>
                            <Index.Option>Material Tailwind Vue</Index.Option>
                            <Index.Option>Material Tailwind Angular</Index.Option>
                            <Index.Option>Material Tailwind Svelte</Index.Option>
                          </Index.Select>
                          </div>
                        </div>
                      :
                      // data.type ==="DateTimeField"?
                      <div className="grid grid-cols-3 gap-4">
                      <div className='flex items-center'>
                            <Index.Typography className="text-sm capitalize">{removeUnderscores(frm_data.key)}</Index.Typography>
                          </div>
                          <div className='col-span-2'>
                            <Index.Input
                              size="sm"
                              //   name={data.name}
                              placeholder={frm_data.value}
                              disabled={data.title==="All Identifiers"? true : isChecked ? false : true}
                              className='h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10  border-solid border-2 border-[#777777] bg-white'
                              labelProps={{
                                className: "hidden",
                              }}
                              containerProps={{ className: "min-w-[100px]" }} />
                          </div>
                          </div>
                                                                                                                                                         
                      }
                       </>  
                        

                      ))
                    }

                  </Index.Card>
                </Index.AccordionBody>
              </Index.Accordion>
            </>
          )
        })}

      </div>
      <div className='h-[11.5%]'>
        {/* <Index.Typography>work</Index.Typography> */}
      </div>
    </div>
  )
}
