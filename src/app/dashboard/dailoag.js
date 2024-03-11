import React from 'react';
import Index from '@/material_component/client_component';
import Image from 'next/image';
import PopoverTab from './PopoverTab';

export default function Dailoag({
  Title,
  Img,
  TotalNo,
  user_roll,
}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
  return (
    <>
        
              <Index.Card onClick={handleOpen} className={`${Title==="Asked for Details" || Title==="Associate Not Assigned" ? `${user_roll ==="admin" || user_roll ==="lead_manager" ?"!hidden":""}`:"" } grid grid-cols-3 gap-2 p-6  ${Title === "Converted Leads" ? "bg-[#E8FAD1]" : ""} ${Title === "Not Interested" ? "bg-[#F9CECE]" : ""}`}>
              <div className='flex items-center'>
                <Image alt={Title} src={Img} />
              </div>
              <div className='col-span-2 text-center flex flex-col justify-around'>
                <div className=''>
                  <Index.Typography className='text-xl'>{Title}</Index.Typography>
                </div>
                <div className='border-t-2 border-[#D9D9D9]'>
                  <Index.Typography className='text-3xl'>{TotalNo}</Index.Typography>
                </div>
              </div>
            </Index.Card>

      <Index.Dialog open={open} handler={handleOpen}>
        <Index.DialogHeader className='bg-[#2F3642] rounded-t-lg p-1'>
        <div className={`w-full grid grid-cols-3 gap-4`}>
        <div></div>
        <div className='flex justify-center items-center'>
        <Index.Typography color='white'> 
             {Title}
          </Index.Typography>
        </div>
       <div>
      <Index.IconButton
          color="blue-gray"
          size="sm"
          variant="text"
          onClick={handleOpen}
          className={`float-right text-white`}
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
        <Index.DialogBody>
             <PopoverTab/>
        </Index.DialogBody>
        <Index.DialogFooter>
    
        </Index.DialogFooter>
      </Index.Dialog>
    </>
  )
}
