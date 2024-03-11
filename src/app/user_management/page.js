"use client"
import React from 'react';
import Index from '@/material_component/client_component';
import AllUserTable from './AllUserTable';
import ArchiveUserTable from './ArchiveUserTable';
import Diloge from './diloge';
import { useSelector, useDispatch } from 'react-redux';
import { ViewAllEmpAPI } from '../redux/Slice/Employee/ViewAllEmployeeRedu';
import { SearchUserAPI, SearchUserResetState } from '../redux/Slice/Employee/SearchEmpRedu';
import { ToastContainer,Flip, } from 'react-toastify';
import { GetArchiveUsersAPI } from '../redux/Slice/Account/ArchiveUsers/GetArchiveUserRedu';
import { SearchArchiveUsersAPI } from '../redux/Slice/Account/ArchiveUsers/SearchArchiveUserRedu';


export default function Page() {
  const dispatch = useDispatch()
  const [SelSearchby, setSearchby] = React.useState("employee_id");
  const [activeTab, setActiveTab] = React.useState("AllUsers");
  const [TBLData, setTBLdata] = React.useState([])
  const [Search, SetSearch] = React.useState()
  const [goInput, setgoInput] = React.useState();
  const table_coll = useSelector((state) => state.ViewAllEmpReducer.data);
  const token = useSelector((state) => state.myReducer.token);
  const [active, setActive] = React.useState(1);
  const [ ArchiveActive,setArchiveActive ]=React.useState(1);
  const delete_status = useSelector((state) => state.DeleteUserReducer.data);
  const add_user_status = useSelector((state) => state.AddUserReducer.data);
  const update_user_status = useSelector((state) => state.UpdateUserReducer.data);
  const ArchivetableData = useSelector((state) => state.GetArchiveUsersReducer.data);



  const data = [
    {
      label: "All Users",
      value: "AllUsers",
      desc:<AllUserTable />,
    },
    {
      label: "Archive Users",
      value: "archiveUsers",
      desc:<ArchiveUserTable />,
    },
  ];


  React.useEffect(() => {
    dispatch(ViewAllEmpAPI({ accessToken: token.access, page: active }))
  }, [active,delete_status,add_user_status,update_user_status,token])

  React.useEffect(() => {
    setTBLdata(table_coll)
  }, [table_coll])


  const onChange = (e) => {
    SetSearch(e.target.value)
  }

  const next = () => {
    dispatch(ViewAllEmpAPI({ accessToken: token.access, page: active + 1 }))
    if (active === table_coll.total_pages) return;
    setActive(active + 1);
    SetSearch("")
    // dispatch(SearchUserResetState())
  };

  const Archivenext = () => {
    dispatch(GetArchiveUsersAPI({ accessToken: token.access, page: ArchiveActive + 1 }))
    if (ArchiveActive === ArchivetableData.total_pages) return;
    setArchiveActive(ArchiveActive + 1);
    SetSearch("")
    // dispatch(SearchUserResetState())
  };

  const prev = () => {
    dispatch(ViewAllEmpAPI({ accessToken: token.access, page: active - 1 }))
    if (active === 1) return;
    setActive(active - 1);
    SetSearch("") 
    // dispatch(SearchUserResetState())
  };

  const Archiveprev = () => {
    dispatch(GetArchiveUsersAPI({ accessToken: token.access, page: ArchiveActive - 1 }))
    if (ArchiveActive === 1) return;
    setArchiveActive(ArchiveActive - 1);
    SetSearch("") 
    // dispatch(SearchUserResetState())
  };

  const go_search = () => {
    SetSearch("")
    activeTab==="AllUsers"? dispatch(ViewAllEmpAPI({ accessToken: token.access, page: goInput })):dispatch(GetArchiveUsersAPI({ accessToken: token.access, Page: goInput }))
  }

  const onchange = (e) => {
    setgoInput(e.target.value)
    // dispatch(Search_by_leadResetState())
  }

  if (!Search) {
    dispatch(SearchUserResetState())
  }

  const onchangeTab=(value)=>{
    setActiveTab(value)
    value==="archiveUsers"?dispatch(GetArchiveUsersAPI({ accessToken: token.access, Page: 1 })): dispatch(ViewAllEmpAPI({ accessToken: token.access, page: active }));
    // SetSearch("")
  }


  const current_page = TBLData ? TBLData.current_page : 1
  const ArchiveCurrentPage=ArchivetableData ? ArchivetableData.current_page:1;

  if (active !== current_page) {
    setActive(current_page)
  }

  if(ArchiveActive!==ArchiveCurrentPage){
    setArchiveActive(ArchiveCurrentPage)
  }

  const dispatch_search = () => {
    activeTab==="AllUsers"? dispatch(SearchUserAPI({ accessToken: token.access, searchby:SelSearchby, element: Search })):dispatch(SearchArchiveUsersAPI({ accessToken: token.access, searchby:SelSearchby, element: Search }))

  }

  React.useEffect(()=>{
    if(goInput>TBLData.total_pages){
      setgoInput("")
    }

    if(goInput<1){
      setgoInput("")
    }
  },[goInput])

  return (
    <>
     <ToastContainer
     position="top-center"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop
     closeOnClick
     rtl={false}
     pauseOnFocusLoss={false}
     draggable={false}
     pauseOnHover
     theme="light" 
     transition={Flip} 
    />
     <Index.Tabs value={activeTab}>
      <div className='p-6 px-32 h-[80vh]'>
        <div className="grid grid-cols-2 gap-4">
          <div>
        <div className='w-80'>
              <Index.TabsHeader className=''
                indicatorProps={{
                  className:
                    "bg-[#67B037] !text-gray-900",
                }}
              >
                {data.map(({ label, value }) => (
                  <Index.Tab onClick={()=>onchangeTab(value)} className={`${activeTab === value ? "text-white" : ""} font-semibold px-4`} key={value} value={value}>
                    {label}
                  </Index.Tab>
                ))}
              </Index.TabsHeader>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-0">
            <div></div>
            <div className="col-span-3 px-8">
              <div className="text-gray-600 flex items-center">
                <Index.Input
                  type="search"
                  name="search"
                  value={Search}
                  onChange={onChange}
                  placeholder="Search..."
                  className="h-10 px-5 pr-1 rounded-l-full text-sm focus:outline-none !border !border-gray-300 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 !bg-[#2F3642] text-white"
                  labelProps={{
                    className: "hidden",
                  }}
                />
                <span className='flex'>
                  <div className="">
                    <Index.Select value={SelSearchby} onChange={(value)=>setSearchby(value)} size='md' className='text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-none text-xs' 
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "!min-w-[90px]" }}
                    >
                      <Index.Option value='employee_id' className='text-xs'>Emp ID</Index.Option>
                      <Index.Option value='name' className='text-xs'>Name</Index.Option>
                    </Index.Select>
                  </div>
                  <Index.Button onClick={dispatch_search} type="submit" className="rounded-r-full bg-[#67B037] py-[11px]">
                    Search
                  </Index.Button>
                </span>
              </div>
              <div></div>
            </div>
            <div className='col-span-1'>
              <Diloge btn={"Create"} />
            </div>
          </div>
        </div>
        <br />
        <div className='p-4 bg-[#F2F2F2] rounded-lg'>
          {/* <Table /> */}
          <Index.TabsBody>
              {data.map(({ value, desc }) => (
                <Index.TabPanel key={value} value={value}>
                  {desc}
                </Index.TabPanel>
              ))}
            </Index.TabsBody>
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
                  value={goInput}
                  placeholder={activeTab==="AllUsers" ?active:ArchiveActive}
                  className='!w-16 py-2 text-sm px-1 focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md'
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }} />
                <Index.Typography>of</Index.Typography>
                <Index.Typography>{activeTab==="AllUsers"? TBLData ? TBLData.total_pages : "":ArchivetableData?ArchivetableData.total_pages:""}</Index.Typography>
                <Index.Button size='md' onClick={go_search}>Go</Index.Button>
              </div>
            </div>
            <div></div>
            <div>

              <div className="flex items-center gap-8 float-right">
                <Index.IconButton
                  size="sm"
                  className='bg-[#67B037]'
                  onClick={activeTab==="AllUsers" ?prev:Archiveprev}
                  disabled={activeTab==="AllUsers" ? active === 1 : ArchiveActive===1}
                >
                  <Index.ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-white" />
                </Index.IconButton>
                <Index.Typography color="gray" className="font-normal">
                  Page <strong className="text-gray-900">{activeTab==="AllUsers" ? active:ArchiveActive}</strong> of{" "}
                  <strong className="text-gray-900">{activeTab==="AllUsers"? TBLData ? TBLData.total_pages : "":ArchivetableData?ArchivetableData.total_pages:""}</strong>
                </Index.Typography>
                <Index.IconButton
                  size="sm"
                  className='bg-[#67B037]'
                  onClick={activeTab==="AllUsers" ? next:Archivenext}
                  disabled={activeTab==="AllUsers"? TBLData ? active === TBLData.total_pages : "":ArchivetableData?ArchiveActive===ArchivetableData.total_pages:""}
                >
                  <Index.ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-white" />
                </Index.IconButton>
              </div>
            </div>
          </div>
        </div>

      </div>
     </Index.Tabs>
    </>
  )
}
