"use client"
import React from 'react'
import Index from '@/material_component/client_component'
import { Add_lead_manuinput } from './SSRcomponent'
import { useSelector, useDispatch } from "react-redux";
import { Add_manual_Leads_api } from '../redux/Slice/Bussness_leads/Add_manual_leads';
import { view_country_api, view_Marketpalce_api, view_Service_api } from '../redux/Slice/Bussness_leads/add_view_new_ser';
import { Flip } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetState_add_view_leads } from '../redux/Slice/Bussness_leads/add_view_new_ser';
import { viewall_Leads_api } from '../redux/Slice/Bussness_leads/view_all_LedSlice';
import { useCountries } from 'use-react-countries';
import { MenuCustomList } from './test';


const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};


function Icon({ id, open }) {
  return (

    <Index.IconButton className={`${id === open ? "rotate-45" : ""} h-5 w-5 transition-transform bg-transparent shadow-none hover:shadow-none`} > <Index.AddCircleOutlineOutlinedIcon className={`text-black text-xl`} /> </Index.IconButton>
  );
}


export default function Add_lead_manuall() {
  const { countries } = useCountries();
  const [Country, setCountry] = React.useState(221);
  const [AltCountry, setAltCountry] = React.useState(221);
  const [countryCode, setCountryCode] = React.useState("+91");
  const [AltcountryCode, setAltCountryCode] = React.useState("+91");
  const [Selcountry, setSelCountry] = React.useState("");
  const [SelMarketplace, setMarketplace] = React.useState("");
  const [SelService, setSelServive] = React.useState("");
  const dispatch = useDispatch()
  const [ManulLeaddetails, setManulLeaddetails] = React.useState({})
  const token = useSelector((state) => state.myReducer.token);
  const [open, setOpen] = React.useState(false);
  const [Emlopen, setEmlOpen] = React.useState(false);

  const AlthandleCountryCodeChange = (event) => {
    const inputCountryCode = event.target.value;
    setAltCountryCode(inputCountryCode);

    // Find the country that matches the input country code
    const AltmatchingCountryIndex = countries.findIndex(
      (c) => c.countryCallingCode === inputCountryCode
    );

    if (AltmatchingCountryIndex !== -1) {
      setAltCountry(AltmatchingCountryIndex);
    }
  };


  const handleCountryCodeChange = (event) => {
    const inputCountryCode = event.target.value;
    setCountryCode(inputCountryCode);

    // Find the country that matches the input country code
    const matchingCountryIndex = countries.findIndex(
      (c) => c.countryCallingCode === inputCountryCode
    );

    if (matchingCountryIndex !== -1) {
      setCountry(matchingCountryIndex);
    }
  };

  const { name, flags, countryCallingCode } = countries[Country];


  React.useEffect(() => {
    if (countryCallingCode != countryCode) {
      setCountryCode(countryCallingCode)
    }
  }, [countryCallingCode])

  React.useEffect(() => {
    if (countries[AltCountry].countryCallingCode != AltCountry) {
      setAltCountryCode(countries[AltCountry].countryCallingCode)
    }
  }, [countries[AltCountry].countryCallingCode])



  const onchange = (e) => {
    setManulLeaddetails({ ...ManulLeaddetails, [e.target.name]: e.target.value })
  }

  React.useEffect(() => {
    dispatch(view_country_api(token.access))
  }, [])
  const submint_Lodeing = useSelector((state) => state.Add_manual_leadsReducer.loading);
  const country_call = useSelector((state) => state.add_and_view_new_service_Reducer.data_country);
  const country = country_call ? country_call : []
  const Marketplace_state = useSelector((state) => state.add_and_view_new_service_Reducer.data_market);
  const Service_state = useSelector((state) => state.add_and_view_new_service_Reducer.data_Service);
  const [Altemlopen, setAltemOpen] = React.useState(0);
  const [isActive, setActive] = React.useState(false);

  const Marketplace = Marketplace_state ? Marketplace_state : [];
  const Service = Service_state ? Service_state : [];

  const add_data = () => {
    dispatch(Add_manual_Leads_api({ accessToken: token.access, data: ManulLeaddetails }))
    dispatch(resetState_add_view_leads())
    setSelCountry("")
    setMarketplace("")
    setSelServive("")
    setManulLeaddetails({ "requester_name": "", "phone_number": "", "email_id": "" })
    dispatch(viewall_Leads_api({ accessToken: token.access, pages: 1 }))
  }

  const SetSelCountry = (value) => {
    setSelCountry(value)
    setManulLeaddetails({ ...ManulLeaddetails, "service_country": value })
    dispatch(view_Marketpalce_api({ accessToken: token.access, country: value }))
  }

  const setmarket = (value) => {
    setMarketplace(value)
    setManulLeaddetails({ ...ManulLeaddetails, "marketplace": value })
    dispatch(view_Service_api({ accessToken: token.access, country: Selcountry, marketplace: value }))
  }

  const setSvervice = (value) => {
    setSelServive(value)
    setManulLeaddetails({ ...ManulLeaddetails, "service_category": value })
  }

  // submint_Lodeing==="fulfilled" ?  dispatch(resetState_add_view_leads()) : "";


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
      <div className='py-6'>
      <div className='grid grid-cols-3 gap-2 p-6 py-0 overflow-scroll h-[43vh] scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg scrollbar-w-lg'>
        <div className='flex items-center'>
          <Index.Typography className='text-xl'>Lead id:</Index.Typography>
        </div>
        <div className='col-span-2'>
          <Index.Input className='!w-[92%] h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }} />
        </div>

     

        <div className='flex items-center'>
          <Index.Typography className='text-xl'>Hot Lead (urgent Service)</Index.Typography>
        </div>
        <div className='col-span-2'>
          <div className='grid grid-cols-3 gap-2'>
            <div className='flex'>
          <Index.Switch color="green" checked={isActive} onChange={()=>setActive(!isActive)} />
            </div>
            <div className='col-span-2 flex justify-start'>
            <Index.Chip size='sm' className={isActive?"":"invisible"} variant="ghost" value={<div className='flex justify-center items-center'> &#128293; <Index.Typography>
              Hot Lead
            </Index.Typography></div>
            }/>
          
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <Index.Typography className='text-xl'>Client name:</Index.Typography>
          <Index.Typography className='text-xl font-bold' color='red'>*</Index.Typography>
        </div>
        <div className='col-span-2'>
          <Index.Input className='!w-[92%] h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }} />
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <Index.Typography className='text-xl'>Phone number:</Index.Typography>
            <Index.Typography className='text-xl font-bold' color='red'>*</Index.Typography>
          </div>
         
        </div>
        <div className='col-span-2 flex'>

          <div className="relative flex w-full">
            <Index.Menu placement="bottom-start">
              <Index.MenuHandler>
                <Index.Button
                  ripple={false}
                  variant="text"
                  color="blue-gray"
                  className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3 rounded-l-full"
                >
                  <img
                    src={flags.svg}
                    alt={name}
                    className="h-4 w-4 rounded-full object-cover"
                  />
                </Index.Button>
              </Index.MenuHandler>
              <Index.MenuList className="max-h-[20rem] max-w-[18rem] z-[10000]">
                {countries.map(({ name, flags, countryCallingCode }, index) => (
                  <Index.MenuItem
                    key={name}
                    value={name}
                    className="flex items-center gap-2"
                    onClick={() => setCountry(index)}
                  >
                    <img
                      src={flags.svg}
                      alt={name}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    {name} <span className="ml-auto">{countryCallingCode}</span>
                  </Index.MenuItem>
                ))}
              </Index.MenuList>
            </Index.Menu>
            <Index.Input
              type="tel"
              placeholder="Country Code"
              value={countryCode}
              onChange={handleCountryCodeChange}
              className="!w-[97%] rounded-l-none rounded-r-full !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
            />
          </div>


          <Index.Tooltip className="z-[10000]" content={`${open? "Remove" : "Add"} Alternate Phone number`}>
          <Index.IconButton  onClick={() => setOpen((cur) => !cur)} className={`bg-transparent shadow-none hover:shadow-none ${open ? "rotate-45" : ""}`}> <Index.AddCircleOutlineOutlinedIcon className={`text-black `}/> </Index.IconButton>
          </Index.Tooltip>
        </div>
          
       
        <div className='col-span-3'>
        <Index.Collapse className='grid grid-cols-3 gap-2' open={open}>
        <div className='text-xl'>
       <Index.Typography className='text-xl'>Alternate Phone number:</Index.Typography>
       </div>
        <div className="col-span-2 relative flex w-full">
                    <Index.Menu placement="bottom-start">
                      <Index.MenuHandler>
                        <Index.Button
                          ripple={false}
                          variant="text"
                          color="blue-gray"
                          className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3 rounded-l-full"
                        >
                          <img
                            src={countries[AltCountry].flags.svg}
                            alt={countries[AltCountry].name}
                            className="h-4 w-4 rounded-full object-cover"
                          />
                        </Index.Button>
                      </Index.MenuHandler>
                      <Index.MenuList className="max-h-[20rem] max-w-[18rem] z-[10000]">
                        {countries.map(({ name, flags, countryCallingCode }, index) => (
                          <Index.MenuItem
                            key={name}
                            value={name}
                            className="flex items-center gap-2"
                            onClick={() => setAltCountry(index)}
                          >
                            <img
                              src={flags.svg}
                              alt={name}
                              className="h-5 w-5 rounded-full object-cover"
                            />
                            {name} <span className="ml-auto">{countryCallingCode}</span>
                          </Index.MenuItem>
                        ))}
                      </Index.MenuList>
                    </Index.Menu>
                    <Index.Input
                      type="tel"
                      placeholder="Country Code"
                      value={AltcountryCode}
                      onChange={AlthandleCountryCodeChange}
                      className="!w-[91%] rounded-l-none rounded-r-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      containerProps={{
                        className: "min-w-0",
                      }}
                    />
                  </div>
      </Index.Collapse>
        </div>

        <div>
          <div className='flex items-center'>
            <Index.Typography className='text-xl'>Email id:</Index.Typography>
          </div>
        </div>
        <div className='col-span-2 flex'>
          <Index.Input type='email' className='!w-[97%] h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }} />
             <Index.Tooltip className="z-[10000]" content={`${Emlopen? "Remove" : "Add"} Alternate Email id`}>
          <Index.IconButton  onClick={() => setEmlOpen((cur) => !cur)} className={`bg-transparent shadow-none hover:shadow-none ${Emlopen ? "rotate-45" : ""}`}> <Index.AddCircleOutlineOutlinedIcon className={`text-black `}/> </Index.IconButton>
          </Index.Tooltip>
        </div>

        <div className='col-span-3'>
        <Index.Collapse className='grid grid-cols-3 gap-2' open={Emlopen}>
        <div className='text-xl'>
       <Index.Typography className='text-xl'>Alternate Email id:</Index.Typography>
       </div>
        <div className="col-span-2 relative flex w-full">
        <Index.Input type='email' className='!w-[92%] h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }} />  
          </div>
      </Index.Collapse>
        </div>

        <div className='flex items-center justify-between items-baseline'>
          <Index.Typography className='text-xl'>Service Category:</Index.Typography>
          <Index.Typography className='text-xl font-bold' color='red'>*</Index.Typography>
        </div>
  
        <div className='col-span-2'>
          <div className='grid'>
          <Index.Checkbox color="green"  label="Account Management" />
          <Index.Checkbox color="green"  label="Advertising Optimization" />
          <Index.Checkbox color="green"  label="Cateloging" />
          </div>
        </div>
      

        <div className='flex items-center justify-between items-baseline'>
          <Index.Typography className='text-xl'>Business Name</Index.Typography>
          <Index.Typography className='text-xl font-bold' color='red'>*</Index.Typography>
        </div>
        <div className='col-span-2'>
          <Index.Input className='!w-[92%] h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }} />
        </div>

        <div className='flex items-center justify-between'>
          <Index.Typography className='text-xl'>Business Category:</Index.Typography>
          {/* <Index.Typography className='text-xl font-bold' color='red'>*</Index.Typography> */}
        </div>
        <div className='col-span-2'>
          <div className='w-[92%] '>
          <Index.Select className='h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}>
            <Index.Option>Apparels</Index.Option>
            <Index.Option>Electronics</Index.Option>
            <Index.Option>Home & Personal Care</Index.Option>
          </Index.Select>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <Index.Typography className='text-xl'>Client Turnover:</Index.Typography>
          {/* <Index.Typography className='text-xl font-bold' color='red'>*</Index.Typography> */}
        </div>
        <div className='col-span-2'>
          <div className='w-[92%] '>
          <Index.Select className='h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}>
            <Index.Option>Diamond (turnover 50 Lacs +)</Index.Option>
            <Index.Option>Premium (turnover 25  -  50 Lacs)</Index.Option>
            <Index.Option>Gold (turnover 5 - 25 Lacs)</Index.Option>
            <Index.Option>Silver (turnover 1 - 5 Lacs)</Index.Option>
            <Index.Option>Bronze (turnover less than 1 Lac)</Index.Option>
          </Index.Select>
          </div>
        </div>

       
     
      </div>
      </div>
        <div className='text-center'>
          <Index.Button onClick={add_data} disabled={submint_Lodeing === "pending" ? true : false} className='rounded-full bg-[#67B037]'>
            <div className={submint_Lodeing === "pending" ? "px-4" : ""}>
              {submint_Lodeing === "pending" ? <Index.Spinner className="h-4 w-4" color='white' /> : "Submit"}
            </div>
          </Index.Button>
        {/* <MenuCustomList/> */}
        </div>
    </>
  )
};
