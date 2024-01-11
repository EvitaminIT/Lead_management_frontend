import React from 'react'
import Index from '@/material_component/client_component'
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import Datepicker from "react-tailwindcss-datepicker";


function Wellcome_bnr() {
    const data = useSelector((state) => state.myReducer.data);
    const [Selselectfild, setSelselectfild] = React.useState("Select_Date");
    const [value, setValue] = React.useState({
        // startDate: new Date(),
        // endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };



    return (
        <>
            <div className='col-span-4 '>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='px-6'>
                        <Index.Typography className='text-2xl text-[#67B037]'>{`Welcome Back, ${data ? data.name : ""} !`}</Index.Typography>
                        <Index.Typography>You have 45 new leads to update in 5 days.</Index.Typography>
                    </div>

                    <div className='grid grid-cols-3 gap-0'>
                    <div>
                        
                    </div>
                    <div className='flex items-center pr-2'>
                        <div className=''>
                        <Index.Select value={Selselectfild} onChange={(value)=>setSelselectfild(value)} variant="outlined" placeholder="Select Date" className={`h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full bg-[#2F3642] ${ Selselectfild==="Select_Date"?"text-[#9e9e9e]":"text-white" }`}
                            labelProps={{
                                className: "hidden",
                            }}
                            containerProps={{ className: "min-w-[100px]" }} label="Select Version">
                            <Index.Option value='Select_Date' className='capitalize' disabled>Select Date</Index.Option>
                            <Index.Option value='Last_Week' className='capitalize'>Last Week</Index.Option>
                            <Index.Option value='Last_Month' className='capitalize'>Last Month</Index.Option>
                            <Index.Option value='Last_7_Days' className='capitalize'>Last 7 Days</Index.Option>
                            <Index.Option value='Last_30_Days' className='capitalize'>Last 30 Days</Index.Option>
                            <Index.Option value='Last_60_Days' className='capitalize'>Last 60 Days</Index.Option>
                        </Index.Select>
                        </div>
                    </div>
                    {/* <div className='p-2'> */}
                        <div className='flex items-center'>
                         <Datepicker
                         inputClassName="w-4/5 h-10 px-5 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-l-full"
                         toggleClassName="absolute bg-[#2F3642] rounded-r-full text-white right-15 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                          placeholder='Data pic'  value={value} onChange={handleValueChange} />
                        
                        </div>
                    {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default dynamic(() => Promise.resolve(Wellcome_bnr), { ssr: false })