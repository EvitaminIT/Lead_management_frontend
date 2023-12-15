import React from 'react'
import Table from './Table'
import { useDispatch,useSelector } from 'react-redux';
import { viewall_Leads_api } from '../redux/Slice/Bussness_leads/view_all_LedSlice';
import Index from '@/material_component/client_component';

const pagecount=5

export default function Body() {
  
  const [active, setActive] = React.useState(1);
 


  const dispatch=useDispatch()
  const token = useSelector((state) => state.myReducer.token);
  React.useEffect(() => {
    dispatch(viewall_Leads_api({accessToken:token.access,pages:active}))
  }, [])
  
  const disp =(page)=>{
    dispatch(viewall_Leads_api({accessToken:token.access,pages:page}))
  }

  const BL_view_data = useSelector((state) => state.view_all_leadsReducer.Bl_data);


  const next = () => {
    dispatch(viewall_Leads_api({accessToken:token.access,pages:active+1}))
    if (active === BL_view_data.pagecount) return;
    setActive(active + 1);
    
  };
 
  const prev = () => {
    dispatch(viewall_Leads_api({accessToken:token.access,pages:active-1}))
    if (active === 1) return;
    setActive(active - 1);
  };


  
  
  return (
    <>
    <br/>
    <div className='p-4 bg-[#F2F2F2] rounded-lg'>
    <Table table_Row={BL_view_data.data}/>
    <div className='grid grid-cols-3 gap-4 mt-4'>
      <div></div>
      <div></div>
      <div>
    <div className="flex items-center gap-8 float-right">
      <Index.IconButton
        size="sm"
        className='bg-[#67B037]'
        onClick={prev}
        disabled={active === 1}
      >
        <Index.ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-white" />
      </Index.IconButton>
      <Index.Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{active}</strong> of{" "}
        <strong className="text-gray-900">{BL_view_data.pagecount}</strong>
      </Index.Typography>
      <Index.IconButton
        size="sm"
        className='bg-[#67B037]'
        onClick={next}
        disabled={active === BL_view_data.pagecount}
      >
        <Index.ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-white" />
      </Index.IconButton>
    </div>
      </div>
    </div>
    
    </div>
    </>
  )
}
