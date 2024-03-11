"use client"
import React from 'react'
import Table from './Table'
import { useDispatch,useSelector } from 'react-redux';
// import { viewall_Leads_api } from '../redux/Slice/Bussness_leads/view_all_LedSlice';
import Index from '@/material_component/client_component';
// import { Search_by_leadResetState } from '../redux/Slice/Bussness_leads/Search_by_leads';

const pagecount=5

export default function Body() {  
  const [bl_data,setbl_data]=React.useState([])
  // const BL_view_data = useSelector((state) => state.view_all_leadsReducer.Bl_data);
  const page_bl=bl_data? bl_data.current_page:""
  const [active, setActive] = React.useState(1);
  const [goInput, setgoInput] = React.useState();
  const dispatch=useDispatch()
  const token = useSelector((state) => state.myReducer.token);
  

  React.useEffect(() => {
    // dispatch(viewall_Leads_api({accessToken:token.access,pages:1}))
  }, [])

  // React.useEffect(() => {
  //    setbl_data(BL_view_data)
  // }, [BL_view_data])

  const next = () => {
    // dispatch(viewall_Leads_api({accessToken:token.access,pages:active+1}))
    if (active === BL_view_data.total_pages) return;
    setActive(active + 1); 
    // dispatch(Search_by_leadResetState())
  };
  const prev = () => {
    // dispatch(viewall_Leads_api({accessToken:token.access,pages:active-1}))
    if (active === 1) return;
    setActive(active - 1);
    // dispatch(Search_by_leadResetState())
  };

  const onchange=(e)=>{
    setgoInput(e.target.value)
 }

 const go_search=()=>{
  // dispatch(viewall_Leads_api({accessToken:token.access,pages:goInput}))
  // dispatch(Search_by_leadResetState())
 } 


if(active!==page_bl){
  setActive(page_bl)
}


  
  return (
    <>
    <br/>
    <div className='p-4 bg-[#F2F2F2] rounded-lg'>

    <Table table_Row={bl_data? bl_data.data:[]}/>
    <div className='grid grid-cols-3 gap-4 mt-4'>
      <div>
      <div className='flex items-center gap-2'>
        <Index.Typography>Page</Index.Typography>
        <div>
          
        </div>
        <input
          type='number'
          name="gopage"
          onChange={onchange}
          // value={active}
          placeholder={active}
          className='!w-16 py-2 text-sm px-1 focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md'
           labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}/>
          <Index.Typography>of</Index.Typography>
          <Index.Typography>{bl_data? bl_data.total_pages:""}</Index.Typography>
          <Index.Button size='md' onClick={go_search}>Go</Index.Button>
      </div>
      </div>
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
        <strong className="text-gray-900">{bl_data? bl_data.total_pages:""}</strong>
      </Index.Typography>
      <Index.IconButton
        size="sm"
        className='bg-[#67B037]'
        onClick={next}
        disabled={bl_data? active === bl_data.total_pages:""}
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
