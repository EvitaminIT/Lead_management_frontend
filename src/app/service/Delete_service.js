import React from 'react'
import Index from '@/material_component/client_component'
import { useDispatch,useSelector } from 'react-redux';
import { DeleteServiceAPI } from '../redux/Slice/Leads/Service/DeleteServiceRedu';
import { DeleteMarketPlaceAPI } from '../redux/Slice/Leads/MartketPlace/DeleteMarketPlaceRedu';

export default function DeleteBtn({
    user_name,
    serviceID,
    MarID,
    MarName,
}) {
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);
    const dispatch = useDispatch()
    const token = useSelector((state) => state.myReducer.token);


    const oncli_delbtn=()=>{
        MarID ? dispatch(DeleteMarketPlaceAPI({ accessToken: token.access, MarketID:MarID })):
        dispatch(DeleteServiceAPI({ accessToken: token.access, serviceID:serviceID }))
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
          {`Are you sure you want to delete this ${MarID?"Marketplace":"user"}?`}
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
