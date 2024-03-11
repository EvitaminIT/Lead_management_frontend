"use client"
import React from 'react';
import Index from '@/material_component/client_component';
import Image from 'next/image';
import { TotalHead } from './SSRcomponent';
import side_art from '../../Image/side_Artboard.svg';
import { useSelector } from 'react-redux';
import Dailoag from './dailoag';
import OtherPerformence from './OtherPerformence';
import OverallPerformence from './OverallPerformence';
import { ServicePerHead,AssociatePerHead } from './SSRcomponent';



export default function Page() {
  const [Selselectfild, setSelselectfild] = React.useState("Overall_Performance");
  const data = useSelector((state) => state.myReducer.data);
  const user_roll=data? data.user_role:""
  
  function getPerformence(argument) {
    const typeMap = {
        "Overall_Performance":<OverallPerformence/>,
        "Associate_Level_Performance":<OtherPerformence Head={AssociatePerHead}/>,
        "Service_Level_Performance":<OtherPerformence Head={ServicePerHead}/>,
    };

    return typeMap[argument];
}

 const getPerformenceName=(agr)=>{
   const Map={
    "Overall_Performance":"Overall Performance",
    "Associate_Level_Performance":"Associate Level Performance",
    "Service_Level_Performance":"Service Level Performance",
   }
   return Map[agr]
 }

  // console.log(updateTotalNoWithTitle("Converted Leads",20))
  return (
    <>
    {/* <Index.Button onClick={()=>}>tst</Index.Button> */}
    <div className='grid grid-cols-5 gap-4 w-full rounded-t-[40px] bg-[#2F3642] py-10 px-32 overflow-auto !h-[40.6rem] scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg scrollbar-w-lg'>
      {TotalHead.map((details,index) => {
        return (
          <>
             <Dailoag Title={details.title} Img={details.image} TotalNo={details.total_no} user_roll={user_roll}/>  
          </>
        )
      })}

      <Index.Card className='col-span-4 p-4'>
        <div className='flex justify-between mb-2'>
          <Index.Typography className='text-2xl px-[12px] text-[#67B037] font-bold'>{getPerformenceName(Selselectfild)}</Index.Typography>
          <div className='w-1/5'>
            <Index.Select size='md' value={Selselectfild} onChange={(value) => setSelselectfild(value)} variant="outlined" placeholder="Select Date" className={`px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full bg-[#2F3642] ${Selselectfild === "Select_Performance_Type" ? "text-[#9e9e9e]" : "text-white"}`}
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }} label="Select Version">
              <Index.Option value='Overall_Performance' className='capitalize'>Overall Performance</Index.Option>
              <Index.Option value='Associate_Level_Performance' className='capitalize'>Associate Level Performance</Index.Option>
              <Index.Option value='Service_Level_Performance' className='capitalize'>Service Level Performance</Index.Option>
            </Index.Select>
          </div>
        </div>
        <Index.Card className="shadow-none h-full w-full overflow-scroll">
          {getPerformence(Selselectfild)}
        </Index.Card>
      </Index.Card>
      <Index.Card>
        <Image alt='art' src={side_art} />
      </Index.Card>
    </div>
    </>
  )
}
