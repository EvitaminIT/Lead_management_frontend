"use client"
import Index from "@/material_component/client_component"
import Body from "./Body"
import Diloge from "./diloge"
import { useDispatch,useSelector } from "react-redux"
import React from "react"
import { Search_by_lead_api } from "../redux/Slice/Bussness_leads/Search_by_leads"
import { Search_by_leadResetState } from "../redux/Slice/Bussness_leads/Search_by_leads"


export default function Page() {
  const [ Search, SetSearch ] =React.useState()
  const dispatch =useDispatch()
  const token = useSelector((state) => state.myReducer.token);
  const onChange = (e)=>{
     SetSearch(e.target.value)
  }

  const dispatch_search=()=>{
     dispatch(Search_by_lead_api({ accessToken: token.access, Lead_id:Search }))
  }


  const clearSearch = () => {
    SetSearch('');
  };

  if(!Search){
    dispatch(Search_by_leadResetState())
  }

  return (
    <div className="p-6 px-32 h-[80vh]">
      <div className="grid grid-cols-2 gap-4">
    <div>
        <Index.Typography className="text-[#2F3642] text-2xl">Lead Management</Index.Typography>
        {/* <SearchBar/> */}
    </div>
    <div className="grid grid-cols-5 gap-0">
       <div>  </div>
        <div className="col-span-2 pr-[1.5rem]">
        <div className="text-gray-600 flex items-center">
      <Index.Input
        type="search"
        name="search"
        onChange={onChange}
        value={Search}
        placeholder="Search..."
        className="h-10 px-5 pr-1 rounded-l-full text-sm focus:outline-none !border !border-gray-300 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 !bg-[#2F3642] text-white"
        labelProps={{
          className: "hidden",
        }}
      />
      
      {Search && (
        <span className="cursor-pointer" onClick={clearSearch}>
          {/* Customize your cross button here */}
          <svg
            className="h-5 w-5 text-white hidden ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      )}

      <span>
      <Index.Button onClick={dispatch_search} type="submit" className="rounded-r-full bg-[#67B037] py-[11px]">
        Search
      </Index.Button>
      </span>
    </div>
        </div>
        <div>
         <Diloge btn={"Update Lead"}/>
        </div>
        <div>
          <Diloge btn={"Create Lead"}/>
        </div>
    </div>
    </div>
    <Body/>
    </div>
  )
}
