import React from 'react'
import Index from '@/material_component/client_component'
import Create_user from './Create_user';


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
      className='!h-[40rem]'
      open={open}
      size='md'
      handler={handleOpen}
    //   animate={{
    //     mount: { scale: 1, y: 0 },
    //     unmount: { scale: 0.9, y: -100 },
    //   }}
    >
       <Index.DialogHeader className={`pb-0 ${btn==="Create"?"bg-[#2F3642] rounded-t-lg p-1":""}`}>
      
      <div className={`w-full ${btn==="Create"?"grid grid-cols-3 gap-4":""}`}>
        {btn==="Create"?<div></div>:""}
        {btn==="Create"?
        <div className='flex justify-center items-center'>
        <Index.Typography color='white'>Create Service</Index.Typography>
        </div>
        :""}
      
       <div>
      <Index.IconButton
          color="blue-gray"
          size="sm"
          variant="text"
          onClick={handleOpen}
          className={`float-right ${btn==="Create"?"text-white":""}`}
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
          {btn==="table_edit"? 
          ""
          :
          <Create_user/>
          }
        </div>
    </Index.DialogBody>  
    
    </Index.Dialog>
  </>
  )
}
