"use client"
import React from 'react'
import Index from '@/material_component/client_component'
import Table from './Table'
import Diloge from './diloge'
import { useDispatch, useSelector } from 'react-redux'
import { View_all_Service_API } from '../redux/Slice/Evitamin/Veiw_all_serviceRedu'
import { Search_service_API,resetSearchService } from '../redux/Slice/Evitamin/SearchServiceRedu'


export default function Page() {
  const dispatch = useDispatch()
  const [Search, SetSearch] = React.useState()
  const [active, setActive] = React.useState(1);
  const [goInput, setgoInput] = React.useState();
  const table_coll = useSelector((state) => state.View_all_Service_Reducer.data);
  const token = useSelector((state) => state.myReducer.token);

  const onChangeSearch = (e) => {
    SetSearch(e.target.value)
  }

  const next = () => {
    dispatch(View_all_Service_API({ accessToken: token.access, page: active + 1 }))
    if (active === table_coll.total_pages) return;
    setActive(active + 1);
    SetSearch("")
    dispatch(resetSearchService())
  };
  const prev = () => {
    dispatch(View_all_Service_API({ accessToken: token.access, page: active - 1 }))
    if (active === 1) return;
    setActive(active - 1);
    SetSearch("")
    dispatch(resetSearchService())
  };
  const go_search = () => {
    SetSearch("")
    dispatch(View_all_Service_API({ accessToken: token.access, page: goInput }))
    dispatch(resetSearchService())
  }

  const onchange = (e) => {
    setgoInput(e.target.value)
    // dispatch(Search_by_leadResetState())
  }

  if (!Search) {
    dispatch(resetSearchService())
  }

  if (table_coll){
  if (active !== table_coll.current_page) {
    setActive(table_coll.current_page)
  }
};

  const dispatch_search = () => {
    dispatch(Search_service_API({ accessToken: token.access, service_ID: Search }))
  }

  return (
    <>
      <div className='p-6 px-32 h-[80vh]'>
        <div className="grid grid-cols-2 gap-4">
          <div>
            {/* <Index.Typography className="text-[#2F3642] text-2xl">Create User</Index.Typography> */}
          </div>
          <div className="grid grid-cols-5 gap-0">
            <div></div>
            <div className="col-span-2 pr-[0.4rem]">
              <div className="text-gray-600 flex items-center">
                <Index.Input
                  type="search"
                  name="search"
                  onChange={onChangeSearch}
                  value={Search}
                  placeholder="Search..."
                  className="h-10 px-5 pr-1 rounded-l-full text-sm focus:outline-none !border !border-gray-300 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 !bg-[#2F3642] text-white"
                  labelProps={{
                    className: "hidden",
                  }}
                />
                <span>
                  <Index.Button onClick={dispatch_search} type="submit" className="rounded-r-full bg-[#67B037] py-[11px]">
                    Search
                  </Index.Button>
                </span>
              </div>
              <div></div>
            </div>
            <div className='col-span-2'>
              <Diloge btn={"Create"} />
            </div>
          </div>
        </div>
        <br />
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
              <Index.Typography>{table_coll ? table_coll.total_pages : ""}</Index.Typography>
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
                <strong className="text-gray-900">{table_coll ? table_coll.total_pages : ""}</strong>
              </Index.Typography>
              <Index.IconButton
                size="sm"
                className='bg-[#67B037]'
                onClick={next}
                disabled={table_coll ? active === table_coll.total_pages : ""}
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
