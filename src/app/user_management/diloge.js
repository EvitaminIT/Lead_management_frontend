import React from 'react'
import Index from '@/material_component/client_component'
import Create_user from './Create_user';
import { Edit_User } from './Edit_user';

export default function Diloge({
  btn,
  Lead_id,
  indx,
  Emp_id,
  Email_id,
  Designation,
  Name,
  Department,
  Product,
  Employee_Status
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
    >
       <Index.DialogHeader className={`pb-0 bg-[#2F3642] rounded-t-lg p-1`}>
      
      <div className={`w-full grid grid-cols-3 gap-4`}>
        <div></div>
        {btn==="Create"?
        <div className='flex justify-center items-center'>
        <Index.Typography color='white'>Create User</Index.Typography>
        </div>
        :
        <div className='flex justify-center items-center'>
        <Index.Typography color='white'>View / Edit Admin</Index.Typography>
        </div>
        }
      
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
        <div className={`h-[60vh] overflow-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg scrollbar-w-lg ${btn==="table_edit"?"bg-[#F2F2F2] rounded-b-lg":""}`}>
          {btn==="table_edit"?
          <Edit_User Emp_id={Emp_id} Name={Name} Department={Department} Designation={Designation} Email_id={Email_id} Product={Product} Employee_Status={Employee_Status} />
          :       
          <Create_user/>
        }
        </div>
    </Index.DialogBody>  
    
    </Index.Dialog>
  </>
  )
}
