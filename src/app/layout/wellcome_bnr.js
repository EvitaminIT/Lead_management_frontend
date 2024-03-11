import React from 'react'
import Index from '@/material_component/client_component'
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";


function WellcomeBnr() {
    const data = useSelector((state) => state.myReducer.data);
    const [Selselectfild, setSelselectfild] = React.useState("This_Month");
    const [value, setValue] = React.useState({
        // startDate: new Date(),
        // endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    

    const [fromdate, setfromDate] = React.useState()
    const [ todate, settoDate] = React.useState()


    return (
        <>
            <div className='col-span-4 '>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='px-6'>
                        <Index.Typography className='text-2xl text-[#67B037]'>{`Welcome Back, ${data ? data.name : ""} !`}</Index.Typography>
                        <Index.Typography>You have 45 new leads to update in 5 days.</Index.Typography>
                    </div>

                    <div className='grid grid-cols-3 gap-2'>
                        <div className={`col-span-2 ${Selselectfild!=="Custom"?"invisible":""}`}>
                            <div className='flex items-center gap-2'>
                            <div className="flex items-center">
                                <Index.Typography className="p-2 bg-[#2F3642] text-white rounded-l-full h-10 text-base">Date:</Index.Typography>
                                <Index.Popover>
                                    <Index.PopoverHandler >
                                    

                                        <Index.Input className="h-10 px-5 pr-1 rounded-r-full text-sm focus:outline-none !border !border-gray-300 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            containerProps={{ className: "!min-w-min" }}
                                            label="Select a Date"
                                            onChange={() => null}
                                            value={fromdate ? format(fromdate, "PPP") : ""}
                                        />
                        
                            
                                    </Index.PopoverHandler>
                                    <Index.PopoverContent>
                                        <DayPicker
                                            mode="single"
                                            selected={fromdate}
                                            onSelect={setfromDate}
                                            showOutsideDays
                                            className="border-0"
                                            classNames={{
                                                caption: "flex justify-center py-2 mb-4 relative items-center",
                                                caption_label: "text-sm font-medium text-gray-900",
                                                nav: "flex items-center",
                                                nav_button:
                                                    "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                                nav_button_previous: "absolute left-1.5",
                                                nav_button_next: "absolute right-1.5",
                                                table: "w-full border-collapse",
                                                head_row: "flex font-medium text-gray-900",
                                                head_cell: "m-0.5 w-9 font-normal text-sm",
                                                row: "flex w-full mt-2",
                                                cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                                day: "h-9 w-9 p-0 font-normal",
                                                day_range_end: "day-range-end",
                                                day_selected:
                                                    "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                                day_today: "rounded-md bg-gray-200 text-gray-900",
                                                day_outside:
                                                    "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                                day_disabled: "text-gray-500 opacity-50",
                                                day_hidden: "invisible",
                                            }}
                                            components={{
                                                IconLeft: ({ ...props }) => (
                                                    <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                                                ),
                                                IconRight: ({ ...props }) => (
                                                    <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                                                ),
                                            }}
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            containerProps={{ className: "min-w-[100px]" }}
                                        />
                                    </Index.PopoverContent>
                                </Index.Popover>
                            </div> 
                            <div>
                            <Index.Typography>To</Index.Typography>
                            </div>
                            <div className="flex items-center">
                                <Index.Typography className="p-2 bg-[#2F3642] text-white rounded-l-full h-10 text-base">Date:</Index.Typography>
                                <Index.Popover placement="bottom">
                                    <Index.PopoverHandler>
                                        <Index.Input className="h-10 px-5 pr-1 rounded-r-full text-sm focus:outline-none !border !border-gray-300 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            containerProps={{ className: "!min-w-min" }}
                                            label="Select a Date"
                                            onChange={() => null}
                                            value={todate ? format(todate, "PPP") : ""}
                                        />
                                    </Index.PopoverHandler>
                                    <Index.PopoverContent>
                                        <DayPicker
                                            mode="single"
                                            selected={todate}
                                            onSelect={settoDate}
                                            showOutsideDays
                                            className="border-0"
                                            classNames={{
                                                caption: "flex justify-center py-2 mb-4 relative items-center",
                                                caption_label: "text-sm font-medium text-gray-900",
                                                nav: "flex items-center",
                                                nav_button:
                                                    "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                                nav_button_previous: "absolute left-1.5",
                                                nav_button_next: "absolute right-1.5",
                                                table: "w-full border-collapse",
                                                head_row: "flex font-medium text-gray-900",
                                                head_cell: "m-0.5 w-9 font-normal text-sm",
                                                row: "flex w-full mt-2",
                                                cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                                day: "h-9 w-9 p-0 font-normal",
                                                day_range_end: "day-range-end",
                                                day_selected:
                                                    "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                                day_today: "rounded-md bg-gray-200 text-gray-900",
                                                day_outside:
                                                    "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                                day_disabled: "text-gray-500 opacity-50",
                                                day_hidden: "invisible",
                                            }}
                                            components={{
                                                IconLeft: ({ ...props }) => (
                                                    <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                                                ),
                                                IconRight: ({ ...props }) => (
                                                    <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                                                ),
                                            }}
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            containerProps={{ className: "min-w-[100px]" }}
                                        />
                                    </Index.PopoverContent>
                                </Index.Popover>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className=''>
                                <Index.Select value={Selselectfild} onChange={(value) => setSelselectfild(value)} variant="outlined" placeholder="Select Date" className={`h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full bg-[#2F3642] ${Selselectfild === "Select_Date" ? "text-[#9e9e9e]" : "text-white"}`}
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    containerProps={{ className: "min-w-[100px]" }} label="Select Version">
                                    <Index.Option value='Custom' className='capitalize'>Custom</Index.Option>
                                    <Index.Option value='This_Month' className='capitalize'>This Month</Index.Option>
                                    <Index.Option value='Last_Week' className='capitalize'>Last Week</Index.Option>
                                    <Index.Option value='Last_Month' className='capitalize'>Last Month</Index.Option>
                                    <Index.Option value='Last_7_Days' className='capitalize'>Last 7 Days</Index.Option>
                                    <Index.Option value='Last_30_Days' className='capitalize'>Last 30 Days</Index.Option>
                                    <Index.Option value='Last_60_Days' className='capitalize'>Last 60 Days</Index.Option>
                                </Index.Select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default dynamic(() => Promise.resolve(WellcomeBnr), { ssr: false })