"use client"
import index from "@/material_component/client_component"
import Body from "./Body"
import Diloge from "./diloge"

export default function Page() {
  return (
    <div className="p-6 px-32 h-[80vh]">
      <div className="grid grid-cols-2 gap-4">
    <div>
        <index.Typography className="text-[#2F3642] text-2xl">Lead Management</index.Typography>
    </div>
    <div className="grid grid-cols-5 gap-0">
       <div></div>
        <div className="col-span-2 pr-[1.5rem]">
        <div className="text-gray-600 flex items-center">
      <index.Input
        type="search"
        name="search"
        placeholder="Search..."
        className="h-10 px-5 pr-1 rounded-l-full text-sm focus:outline-none !border !border-gray-300 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 !bg-[#2F3642] text-white"
        labelProps={{
          className: "hidden",
        }}
      />
      <span>
      <index.Button type="submit" className="rounded-r-full bg-[#67B037] py-[11px]">
        Search
      </index.Button>
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
