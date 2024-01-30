"use client"
import React from 'react'
import index from '@/material_component/client_component'
import { data } from './SSRcomponent'

export default function Create_lead_file_btn() {
    const [activeTab, setActiveTab] = React.useState("Create_Lead");
  return (
    <div className='h-full'>
      <index.Tabs value={activeTab}>
        <div className='bg-[#F3F3F3] rounded-md'>
      <index.TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className:
            "bg-[#67B037] shadow-none !text-gray-900",
        }}
      >
        {data.map(({ label, value }) => (
          <index.Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-white w-6/12" : "w-6/12"}
          >
            {label}
          </index.Tab>
        ))}
      </index.TabsHeader>
      </div>
   
      <index.TabsBody>
        {data.map(({ value, desc }) => (
          <index.TabPanel className='h-[90%] overflow-auto ...' key={value} value={value}>
            {desc}
          </index.TabPanel>
        ))}
      </index.TabsBody>
    </index.Tabs>
    </div>
  )
}
