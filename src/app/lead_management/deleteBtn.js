"use client"
import React from 'react'
import Index from '@/material_component/client_component'
import { Delete_lead_for_app_api } from '../redux/Slice/Bussness_leads/delete_lead_for_approvl'
import { useDispatch,useSelector } from 'react-redux';

export default function DeleteBtn({
    Lead_id
}) {
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);

    const dispatch = useDispatch()
    const token = useSelector((state) => state.myReducer.token);

    const oncli_delbtn=()=>{
        dispatch(Delete_lead_for_app_api({ accessToken: token.access, lead_id:Lead_id }))
        handleOpen()
    }


  return (
    <>
    <Index.IconButton size='sm' onClick={handleOpen} className='bg-[#E55B5B]'><Index.DeleteOutlineOutlinedIcon/></Index.IconButton>
      <Index.Dialog open={open} size="xs" handler={handleOpen}>
        <Index.DialogHeader className='justify-center'> 
            <div className=''>
          <Index.Typography className='font-semibold'>
            Are you Sure want to delete this Id
          </Index.Typography>
          <Index.Typography className='text-center'>
            {Lead_id}
          </Index.Typography>
            </div>
        </Index.DialogHeader>
        <Index.DialogBody className='text-center'>
        <Index.Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Index.Button>
          <Index.Button variant="gradient" color="green" onClick={oncli_delbtn}>
            <span>Confirm</span>
          </Index.Button>
        </Index.DialogBody>
        <Index.DialogFooter>
         
        </Index.DialogFooter>
      </Index.Dialog>
    </>
  )
}
