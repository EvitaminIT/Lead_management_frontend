import React from 'react'
import index from '@/material_component/client_component'
import Create_lead_file_btn from './Create_lead_file_tab';
import Update_lead_popup from './ Update_lead_popup';

export default function Diloge({
  btn
}) {
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);
  return (
    <>
     <index.Button onClick={handleOpen} className="rounded-full bg-[#67B037] float-right">{btn}</index.Button>
    <index.Dialog
      open={open}
      size='lg'
      handler={handleOpen}
    //   animate={{
    //     mount: { scale: 1, y: 0 },
    //     unmount: { scale: 0.9, y: -100 },
    //   }}
    >
       <index.DialogHeader className="pb-0">
      
      <div className="w-full">
      <index.IconButton
          color="blue-gray"
          size="sm"
          variant="text"
          onClick={handleOpen}
          className="float-right"
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
        </index.IconButton>
        </div>
       
      </index.DialogHeader>
    <index.DialogBody>
        <div className='h-[60vh]'>
      {btn==="Create Lead"?
        <Create_lead_file_btn/>
        :
        <Update_lead_popup/>}
        </div>
    </index.DialogBody>  
    
    </index.Dialog>
  </>
  )
}
