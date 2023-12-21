import React from 'react'
import Index from '@/material_component/client_component'
import Create_lead_file_btn from './Create_lead_file_tab';
import Update_lead_popup from './ Update_lead_popup';
import Edit_popup from './Edit_popup';

export default function Diloge({
  btn,
  Lead_id,
  indx,
}) {
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);
  return (
    <>
     {btn==="table_edit"?
      <Index.IconButton onClick={handleOpen} size='sm' className='bg-[#67B037]'><Index.RemoveRedEyeOutlinedIcon/></Index.IconButton>
      :  
     <Index.Button onClick={handleOpen} className="rounded-full bg-[#67B037] float-right">{btn}</Index.Button>
    }
    <Index.Dialog
      open={open}
      size='lg'
      handler={handleOpen}
    //   animate={{
    //     mount: { scale: 1, y: 0 },
    //     unmount: { scale: 0.9, y: -100 },
    //   }}
    >
       <Index.DialogHeader className={`pb-0 ${btn==="table_edit"?"bg-[#2F3642] rounded-t-lg p-1":""}`}>
      
      <div className={`w-full ${btn==="table_edit"?"grid grid-cols-3 gap-4":""}`}>
        {btn==="table_edit"?<div></div>:""}
        {btn==="table_edit"?
        <div className='text-center'>
        <Index.Typography color='white'>Action</Index.Typography>
        </div>
        :""}
      
       <div>
      <Index.IconButton
          color="blue-gray"
          size="sm"
          variant="text"
          onClick={handleOpen}
          className={`float-right ${btn==="table_edit"?"text-white":""}`}
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
    <Index.DialogBody className={`${btn==="table_edit"?"p-0":""}`}>
        <div className={`h-[60vh] ${btn==="table_edit"?"bg-[#F2F2F2] rounded-b-lg":""}`}>
      {btn==="Create Lead"?
        <Create_lead_file_btn/>
        :
      btn==="table_edit"?
      <Edit_popup led_id={Lead_id} indx={indx} />
      :
        <Update_lead_popup/>}
        </div>
    </Index.DialogBody>  
    
    </Index.Dialog>
  </>
  )
}
