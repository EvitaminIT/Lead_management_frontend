import React from 'react'
import Index from '@/material_component/client_component'
import { Delete_Emp_API } from '../redux/Slice/Employee/Delete_Emp';
import { useDispatch,useSelector } from 'react-redux';

export default function DeleteBtn({
    user_name,
    Emp_id
}) {
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);

    const dispatch = useDispatch()
    const token = useSelector((state) => state.myReducer.token);

    const oncli_delbtn=()=>{
        dispatch(Delete_Emp_API({ accessToken: token.access, Emp_ID:Emp_id }))
        handleOpen()
    }


  return (
    <>
    <Index.IconButton size='sm' onClick={handleOpen} className='bg-[#E55B5B]'><Index.DeleteOutlineOutlinedIcon/></Index.IconButton>
      <Index.Dialog open={open} size="xs" handler={handleOpen}>
        <br/>
        <Index.DialogHeader className='justify-center'> 
            <div className=''>
          <Index.Typography >
          Are you sure you want to delete this user?
          </Index.Typography>
            </div>
        </Index.DialogHeader>
        <Index.DialogBody className='text-center'>

          <Index.Button className='mr-4' variant="gradient" color="green" size='sm' onClick={oncli_delbtn}>
            <span>Confirm</span>
          </Index.Button>

        <Index.Button
            variant="outlined"
            onClick={handleOpen}
            size='sm'
          >
            Cancel
          </Index.Button>

        </Index.DialogBody>
        <Index.DialogFooter>
         
        </Index.DialogFooter>
      </Index.Dialog>
    </>
  )
}
