"use client"
import React from 'react';
import Index from '@/material_component/client_component';
import Table from './Table';
import Diloge from './diloge';
import { useDispatch, useSelector } from 'react-redux';
import { ViewAllServiceAPI } from '../redux/Slice/Leads/Service/VeiwAllServiceRedu';
import { ViewAllMarketPlaceAPI } from '../redux/Slice/Leads/MartketPlace/ViewAllMarkerPlaceRedu';
import { motion } from 'framer-motion';
import { SearchServiceAPI,resetState_SearchService } from '../redux/Slice/Leads/Service/SearchServiceRedu';
import { addUnderscores } from '../commen/commen_fun';
import { SearchMarketPlaceAPI,resetStateSearchMarketpalce } from '../redux/Slice/Leads/MartketPlace/SearchMarketPlaceRedu';

export default function Page() {
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = React.useState("services");
  const [TBLdata, setTBLdata] = React.useState([])
  const [Search, SetSearch] = React.useState()
  const [active, setActive] = React.useState(1);
  const [goInput, setgoInput] = React.useState();
  const [ searchType,setSearchType ]= React.useState("service");
  const [isVisible, setIsVisible] = React.useState(false);
  const table_coll = useSelector((state) => state.ViewAllServiceReducer.data);
  const token = useSelector((state) => state.myReducer.token);
  const ServiceTableCall = useSelector((state) => state.ViewAllServiceReducer.data);
  const MarkerplaceTableCall = useSelector((state) => state.ViewAllMarketReducer.data);
  const serviceTBLData=ServiceTableCall?ServiceTableCall.data:[];
  const marketplaceTBLData=MarkerplaceTableCall?MarkerplaceTableCall.marketplace:[];



  const data = [
    {
      label: "Services",
      value: "services",
      desc: <Table pageNo={active} TableType={"Service"} TableData={serviceTBLData} />,
    },
    {
      label: "Marketplace",
      value: "marketplace",
      desc: <Table pageNo={active} TableType={"Markerplace"} TableData={marketplaceTBLData} />,
    },
  ];



  React.useEffect(() => {
    activeTab == "services" ? dispatch(ViewAllServiceAPI({ accessToken: token.access, page: active })) : dispatch(ViewAllMarketPlaceAPI({ accessToken: token.access }));
  }, [activeTab])



  const next = () => {
    dispatch(ViewAllServiceAPI({ accessToken: token.access, page: active + 1 }))
    if (active === table_coll.total_pages) return;
    setActive(active + 1);
    SetSearch("")
    dispatch(resetState_SearchService())
  };
  const prev = () => {
    dispatch(ViewAllServiceAPI({ accessToken: token.access, page: active - 1 }))
    if (active === 1) return;
    setActive(active - 1);
    SetSearch("")
    dispatch(resetState_SearchService())
  };
  const go_search = () => {
    SetSearch("")
    dispatch(ViewAllServiceAPI({ accessToken: token.access, page: goInput }))
    dispatch(resetState_SearchService())
  }

  const onchange = (e) => {
    setgoInput(e.target.value)
    // dispatch(Search_by_leadResetState())
  }

  if (!Search) {
    activeTab==="services"? dispatch(resetState_SearchService()):
    dispatch(resetStateSearchMarketpalce());
  }

  if (table_coll) {
    if (active !== table_coll.current_page) {
      setActive(table_coll.current_page);
    }
  };

  const dispatch_search = () => {
    activeTab==="services"?dispatch(SearchServiceAPI({ accessToken: token.access, SearchType: searchType,data:addUnderscores(Search) })):
    dispatch(SearchMarketPlaceAPI({ accessToken: token.access,data:addUnderscores(Search) }))
  }

  
  React.useEffect(() => {
    setTBLdata(table_coll)
  }, [table_coll])

   
  
  React.useEffect(()=>{
    activeTab === "services" ? setIsVisible(true):setIsVisible(false);
  },[activeTab])


  const onchangeTab=(value)=>{
    setActiveTab(value)
    SetSearch("")
  }

  React.useEffect(()=>{
    if(goInput>TBLdata.total_pages){
      setgoInput("")
    }

    if(goInput<1){
      setgoInput("")
    }
  },[goInput])


  return (
    <>
      <Index.Tabs value={activeTab}
      >
        <div className='p-6 px-32 h-[80vh]'>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Index.TabsHeader className='w-fit'
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
            <div className="grid grid-cols-5 gap-0">
              <div className={`col-span-4 px-8`}>
                <div className="text-gray-600 flex items-center float-right">
                  <Index.Input
                    type="search"
                    name="search"
                    onChange={(e)=>SetSearch(e.target.value)}
                    value={Search}
                    placeholder="Search..."
                    className="h-10 px-5 pr-1 rounded-l-full text-sm focus:outline-none !border !border-gray-300 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 !bg-[#2F3642] text-white"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{
                      className:""
                    }}
                  />

                  <span className={`flex`}>

                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: isVisible ? 1 : 0, width: isVisible ? 'auto' : 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ direction: "rtl" }}
                        className={`${isVisible?'':"overflow-hidden"}`}
                    >

                      <Index.Select size='md' value={searchType} onChange={(value)=>setSearchType(value)} className={`!border-l-0 text-sm focus:outline-none border border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-none text-xs`}
                        labelProps={{
                          className: "hidden",
                        }}
                        containerProps={{ className: `!min-w-[106px]` }}
                      >
                        <Index.Option value='service' className='text-xs float-left'>Service</Index.Option>
                        <Index.Option value='marketplace' className='text-xs float-left'>Marketplace</Index.Option>
                      </Index.Select>

                    </motion.div>

                    <Index.Button onClick={dispatch_search} type="submit" className="rounded-r-full bg-[#67B037] py-[11px]">
                      Search
                    </Index.Button>
                  </span>
                </div>
              </div>
              <div className=''>
                <Diloge btn={"Create"} togel={activeTab} />
              </div>
            </div>
          </div>
          <br />
          <div className='p-4 bg-[#F2F2F2] rounded-lg'
          >
            <Index.TabsBody>
              {data.map(({ value, desc }) => (
                <Index.TabPanel key={value} value={value}>
                  {desc}
                </Index.TabPanel>
              ))}
            </Index.TabsBody>
            <div className={`grid grid-cols-3 gap-4 mt-4 ${activeTab === "marketplace" ? "invisible" : ""}`}>
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
                    placeholder={active}
                    className='!w-16 py-2 text-sm px-1 focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md'
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }} />
                  <Index.Typography>of</Index.Typography>
                  <Index.Typography>{TBLdata ? TBLdata.total_pages : ""}</Index.Typography>
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
                    <strong className="text-gray-900">{TBLdata ? TBLdata.total_pages : ""}</strong>
                  </Index.Typography>
                  <Index.IconButton
                    size="sm"
                    className='bg-[#67B037]'
                    onClick={next}
                    disabled={TBLdata ? active === TBLdata.total_pages : ""}
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
