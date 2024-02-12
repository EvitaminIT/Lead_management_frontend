"use client"
import React from 'react';
import Index from '@/material_component/client_component';
import Table from './Table';
import Diloge from './diloge';
import { useSelector, useDispatch } from 'react-redux';
import { View_all_Emp_API } from '../redux/Slice/Employee/ViewAllEmployeeRedu';
import { Search_user_api, Search_UserResetState } from '../redux/Slice/Employee/SearchEmpRedu';
import { ToastContainer,Flip, } from 'react-toastify';
import { data } from '../lead_management/SSRcomponent';

export default function Page() {
  const dispatch = useDispatch()
  const [SelSearchby, setSearchby] = React.useState("employee_id");
  const [TBLData, setTBLdata] = React.useState([])
  const [Search, SetSearch] = React.useState()
  const [goInput, setgoInput] = React.useState();
  const table_coll = useSelector((state) => state.View_all_Emp_Reducer.data);
  const token = useSelector((state) => state.myReducer.token);
  const [active, setActive] = React.useState(1);
  const delete_status = useSelector((state) => state.DeleteUserReducer.data);
  const add_user_status = useSelector((state) => state.AddUserReducer.data);
  const update_user_status = useSelector((state) => state.UpdateUserReducer.data);


  React.useEffect(() => {
    dispatch(View_all_Emp_API({ accessToken: token.access, page: active }))
  }, [active,delete_status,add_user_status,update_user_status])

  React.useEffect(() => {
    setTBLdata(table_coll)
  }, [table_coll])


  const onChange = (e) => {
    SetSearch(e.target.value)
  }

  const next = () => {
    dispatch(View_all_Emp_API({ accessToken: token.access, page: active + 1 }))
    if (active === table_coll.total_pages) return;
    setActive(active + 1);
    SetSearch("")
    // dispatch(Search_UserResetState())
  };
  const prev = () => {
    dispatch(View_all_Emp_API({ accessToken: token.access, page: active - 1 }))
    if (active === 1) return;
    setActive(active - 1);
    SetSearch("")
    // dispatch(Search_UserResetState())
  };
  const go_search = () => {
    SetSearch("")
    dispatch(View_all_Emp_API({ accessToken: token.access, page: goInput }))
  }

  const onchange = (e) => {
    setgoInput(e.target.value)
    // dispatch(Search_by_leadResetState())
  }

  if (!Search) {
    dispatch(Search_UserResetState())
  }



  const current_page = TBLData ? TBLData.current_page : 1

  if (active !== current_page) {
    setActive(current_page)
  }

  const dispatch_search = () => {
    dispatch(Search_user_api({ accessToken: token.access, searchby:SelSearchby, element: Search }))
  }



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
      <div className='p-6 px-32 h-[80vh]'>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Index.Typography className="text-[#2F3642] text-2xl">Create User</Index.Typography>
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
          <Table />
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
                  containerProps={{ className: "min-w-[100px]" }} />
                <Index.Typography>of</Index.Typography>
                <Index.Typography>{TBLData ? TBLData.total_pages : ""}</Index.Typography>
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
                  <strong className="text-gray-900">{TBLData ? TBLData.total_pages : ""}</strong>
                </Index.Typography>
                <Index.IconButton
                  size="sm"
                  className='bg-[#67B037]'
                  onClick={next}
                  disabled={TBLData ? active === TBLData.total_pages : ""}
                >
                  <Index.ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-white" />
                </Index.IconButton>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
