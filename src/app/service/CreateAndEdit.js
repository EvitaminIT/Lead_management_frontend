import React from 'react';
import { Create_user_manuinput } from './SSRcomponent';
import Index from '@/material_component/client_component';
import { removeUnderscores } from '../commen/commen_fun';
import { ViewAllCommericalAPI } from '../redux/Slice/Leads/commercial/ViewAllCommericalRedu';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { UpdateServiceAPI } from '../redux/Slice/Leads/Service/UpdateServiceRedu';
import { ToastContainer, Flip, toast } from 'react-toastify';
import { DeleteCommericalAPI } from '../redux/Slice/Leads/commercial/DeleteCommericalRedu';
import { ViewAllMarketPlaceAPI } from '../redux/Slice/Leads/MartketPlace/ViewAllMarkerPlaceRedu';
import { ViewAllServiceAPI } from '../redux/Slice/Leads/Service/VeiwAllServiceRedu';
import { CreateServiceAPI } from '../redux/Slice/Leads/Service/CreateServiceRedu';
import { CreateMarketPlaceAPI,resetState_CreateMarketpalce } from '../redux/Slice/Leads/MartketPlace/CreatMarketPlaceRedu';


const TABLE_HEAD = ["Price", "Commission", "Price for mou"];



export default function Create_user({
  type,
  PageNo,
  MarPlaceName,
  MarPlaceID,
  SerName,
  SerID,
}) {
  const [openPopover, setOpenPopover] = React.useState([]);
  const dispatch = useDispatch();
  const [updateData, setupdateData] = React.useState({});
  const [Commercials_ROWS, setCommercials_ROW] = React.useState([]);
  const [preCommercialsRow,setPreCommercialRow]=React.useState([]);
  const [AddedCommercials,setAddedCommercials ]=React.useState([]);
  const [isPrice, setPrice] = React.useState();
  const [isCommisson, setCommisson] = React.useState();
  const [MOU, setMOU] = React.useState();
  const [MarketDroup, setMarketDroup] = React.useState([]);
  const [ openPopoverMarkert,setopenPopoverMarkert ]=React.useState(false);
  const [SelMarket, setSelMarket] = React.useState();
  const [ServiceName, setServiceName] = React.useState("");
  const [ AddMarketPlace,setAddMarketPlace ] = React.useState("");
  const token = useSelector((state) => state.myReducer.token);
  const CommercialsData = useSelector((state) => state.ViewAllCommericalReducer.data);
  const CommerLoading = useSelector((state) => state.ViewAllCommericalReducer.loading);
  const MarkerplaceTable = useSelector((state) => state.ViewAllMarketReducer.data);
  const DeleteRowLoading= useSelector((state)=>state.DeleteCommericalReducer.loading);
  const AddmarketLoading= useSelector((state)=>state.CreateMarketPlaceReducer.loading);



  const removeElementAddcomm = (element) => {
    const newArray = AddedCommercials.filter(item => item !== element);
    setAddedCommercials(newArray);
  };
  
  React.useEffect(()=>{
    if(AddmarketLoading==="fulfilled"){
      dispatch(resetState_CreateMarketpalce())
      dispatch(ViewAllMarketPlaceAPI({ accessToken: token.access}))
      setAddMarketPlace("")
      setopenPopoverMarkert(false)
    }
  },[AddmarketLoading])

  React.useEffect(()=>{
    DeleteRowLoading==="fulfilled"?dispatch(ViewAllCommericalAPI({ accessToken: token.access, ServiceID: SerID })):"";
  },[DeleteRowLoading])

  React.useEffect(() => {
    const new_row = {
      marketplace_id: parseInt(SelMarket),
      service_id: parseInt(SerID),
      service_name: ServiceName,
      commercials: Commercials_ROWS,
    }
    setupdateData(new_row)
  }, [SelMarket, ServiceName, Commercials_ROWS])


  

  React.useEffect(()=>{
    if (openPopover.length === 0) {
    for (let i = 0; i < Commercials_ROWS.length; i++) {
      const row=false;
      setOpenPopover((prevRows) => [...prevRows, row]);
    }}
  },[Commercials_ROWS,openPopover])


  React.useEffect(() => {
    MarkerplaceTable ?  setMarketDroup(MarkerplaceTable.marketplace):"";
  }, [MarkerplaceTable])

  React.useEffect(() => {
    setServiceName(SerName)
  }, [SerName])

  React.useEffect(() => {
    dispatch(ViewAllCommericalAPI({ accessToken: token.access, ServiceID: SerID }))
  }, [SerID])

  React.useEffect(() => {
    setSelMarket(parseInt(MarPlaceID))
  }, [MarPlaceID])




  React.useEffect(() => {
    // type === "Servicetable_edit" ? setCommercials_ROW(CommercialsData) : ""
      type === "Servicetable_edit" ? setPreCommercialRow(CommercialsData) : ""
      dispatch(ViewAllMarketPlaceAPI({ accessToken: token.access}))
  }, [CommercialsData])


  React.useEffect(()=>{
    if (preCommercialsRow) {
      setCommercials_ROW([...preCommercialsRow, ...AddedCommercials]);
  } else {
      setCommercials_ROW([...AddedCommercials]);
  }
  },[preCommercialsRow,AddedCommercials])



  const appendToCommercialsRows = () => {
    
    const new_row = type === "Servicetable_edit"? {
      commercial_id: null,
      commission: parseInt(isCommisson),
      price: parseInt(isPrice),
      price_for_mou: MOU,
    }:{
      commission: parseInt(isCommisson),
      price: parseInt(isPrice),
      price_for_mou: MOU,
    }
    setAddedCommercials((prevRows) => [...prevRows, new_row]);
    const row=false;
    setOpenPopover((prevRows) => [...prevRows, row]);
    setCommisson("")
    setPrice("")
    setMOU("")
  };



  React.useEffect(() => {
    if (isPrice < 1) {
      setPrice("")
    }
  }, [isPrice])


  React.useEffect(() => {
    if (isCommisson < 1) {
      setCommisson("")
    }
  }, [isCommisson])


  const handlePriceChange = (index, newPrice) => {

    setCommercials_ROW(prevData => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], price: newPrice };
      return newData;
    });
  };

  const handleCommisonChange = (index, newCommission) => {

    setCommercials_ROW(prevData => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], commission: newCommission };
      return newData;
    });
  };

  const OpenAndClosePop = (index,value) => {

    const updatedItems = [...openPopover];
    updatedItems[index] = value;
    setOpenPopover(updatedItems);
  };

  const handleMouChange = (index, MOU) => {

    setCommercials_ROW(prevData => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], price_for_mou: MOU };
      return newData;
    });
  };


  const SelectFiled = ({ optionList }) => {
    const lis = optionList ? optionList : [];
    return (
      <>
        <Index.Select value={SelMarket}
          disabled={type === "Servicetable_edit" ? true : false}
          onChange={(e) => setSelMarket(e)}
          className='bg-white h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }} >
          {lis.map((mar, index) => {
            return (
              <Index.Option key={index} value={parseInt(mar.id)}>{mar.marketplace}</Index.Option>
            )
          })}
        </Index.Select>
      </>
    )
  }



  const removeCommercail = (index, com_id) => {
    // handleRemoveRowClick(index)
    if(Commercials_ROWS[index].commercial_id===null){
      removeElementAddcomm(Commercials_ROWS[index])
    }else{
      dispatch(DeleteCommericalAPI({ accessToken: token.access, serviceID: SerID, commercialID: com_id }))
    }
    setOpenPopover((prRows)=>{
      const newRows=[...prRows];
      newRows.splice(index,1)
      return newRows
    })
  };


  const dispatchUpdate=()=>{
    dispatch(UpdateServiceAPI({ accessToken: token.access, data: updateData }))
    dispatch(ViewAllServiceAPI({ accessToken: token.access, page:PageNo}))
  };

  const dispatchCreate=()=>{
    const data={
      marketplace_id:SelMarket,
      service_name:ServiceName,
      commercials:AddedCommercials,
    }
    dispatch(CreateServiceAPI({ accessToken: token.access, data: data }))
  };

  const dispatchAddMarketPlace=()=>{
    const data={
      marketplace:AddMarketPlace
    }
    dispatch(CreateMarketPlaceAPI({ accessToken: token.access, data: data }))
  };

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
      <div className='p-6 bg-blue-gray-50 h-full'>
        <Index.Typography className='font-semibold'>{type === "Servicetable_edit" ? "Edit Service" : "Create Service"}</Index.Typography>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex items-center justify-around'>
            <Index.Typography>Market Place</Index.Typography>
          </div>
          <div className='col-span-2 flex'>
            <SelectFiled optionList={MarketDroup} />

            <div className={`${type === "Servicetable_edit" ? "hidden" : ""}`}>
              <Index.Popover open={openPopoverMarkert} handler={setopenPopoverMarkert} animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: -25 },
              }} placement="bottom">
                <Index.PopoverHandler>
                  <Index.IconButton className='bg-transparent shadow-none hover:shadow-none'> <Index.AddCircleOutlineOutlinedIcon className='text-black' /> </Index.IconButton>
                </Index.PopoverHandler>
                <Index.PopoverContent className="!z-[10000]">

                  <div className="flex">
                    <Index.Input
                      size="lg"
                      onChange={(e)=>setAddMarketPlace(e.target.value)}
                      value={AddMarketPlace}
                      // placeholder="name@mail.com"
                      className="h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-none rounded-l-[22px]"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                    <Index.Button disabled={AddMarketPlace?false:true} color='green' variant="gradient" onClick={dispatchAddMarketPlace} className="flex-shrink-0 rounded-none rounded-r-[22px]">
                      Save
                    </Index.Button>
                  </div>
                </Index.PopoverContent>
              </Index.Popover>
            </div>

          </div>
          <div className='flex items-center justify-around'>
            <Index.Typography>Service Name</Index.Typography>
          </div>
          <div className='col-span-2'>
            <Index.Input value={ServiceName}
              onChange={(e) => setServiceName(e.target.value)} className='bg-white h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }} />
          </div>
        </div>
        <br />
        <br />
        <div>
          <Index.Typography className='font-semibold'>Add Commercials</Index.Typography>
          <div>
            <div className='h-full w-full'>

              <tr className='flex gap-0'>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className={`border-b border-blue-gray-100 bg-blue-gray-50 p-4  ${head === "Price" ? "w-60" : head === "Commission" ? "w-60" : "w-full"} p-4 py-0 w-40`}
                  >
                    <Index.Typography
                      variant="small"
                      color="blue-gray"
                      className={`font-normal leading-none opacity-70  ${head === "Price" ? "w-fit" : ""}`}
                    >
                      {head}
                    </Index.Typography>
                  </th>
                ))}
              </tr>

            </div>
            <Index.Card className="shadow-none h-full w-full overflow-auto h-[29vh] scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg scrollbar-w-lg">
              <table className="w-full min-w-max table-auto text-left">
                <tbody className=''>
                  <tr >
                    <td className={`w-40`}>
                      <div className='px-4'>
                        <Index.Input value={isPrice} onChange={(e) => setPrice(e.target.value)} className='!w-20 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
                          type='number'
                          labelProps={{
                            className: "hidden",
                          }}
                          containerProps={{ className: "!min-w-[0px] !w-20" }} />
                      </div>

                    </td>
                    <td className={`w-32 px-4`}>
                      <div className='px-2 flex items-center gap-2'>
                        <Index.Input type='number' value={isCommisson} onChange={(e) => setCommisson(e.target.value)} className='!w-20 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
                          labelProps={{
                            className: "hidden",
                          }}
                          containerProps={{ className: "!min-w-[0px]" }} />
                        <Index.Typography>%</Index.Typography>
                      </div>
                    </td>
                    <td className={`p-4 text-center`}>
                      <div className='flex justify-center items-center'>
                        <Index.Input value={MOU} onChange={(e) => setMOU(e.target.value)} type='text' className=' text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
                          labelProps={{
                            className: "hidden",
                          }}
                          containerProps={{ className: "!min-w-[0px]" }} />
                        {/* <Index.Typography>Higher of (INR 3000 or 2% of sales)</Index.Typography> */}
                        <Index.IconButton disabled={isPrice ? false : true} onClick={appendToCommercialsRows} className='bg-transparent shadow-none hover:shadow-none'> <Index.AddCircleOutlineOutlinedIcon className='text-black' /> </Index.IconButton>
                      </div>
                    </td>
                  </tr>
                  {Commercials_ROWS ?
                    Commercials_ROWS.map(({ price, commission, price_for_mou, commercial_id }, index) => {
                      // const isLast = index === Commercials_ROWS.length - 1;
                      const classes = "p-4 py-2";

                      return (
                        <tr className=''>
                          <td className={`${classes} w-40`}>
                            {type === "Servicetable_edit" ?
                              <>
                                {CommerLoading === "pending" ? <Skeleton /> :
                                  <Index.Input value={price} className='!w-20 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
                                    type='number'
                                    onChange={(e) => handlePriceChange(index, parseInt(e.target.value))}
                                    labelProps={{
                                      className: "hidden",
                                    }}
                                    containerProps={{ className: "!min-w-[0px] !w-20" }} />
                                }
                              </>
                              :
                              <Index.Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal px-4"
                              >
                                {price}
                              </Index.Typography>
                            }
                          </td>
                          <td className={` ${classes} w-32`}>
                            {type === "Servicetable_edit" ?
                              <>
                                {CommerLoading === "pending" ? <Skeleton /> :
                                  <div className='px-2 flex items-center gap-2'>
                                    <Index.Input type='number' value={commission} className='!w-20 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
                                      onChange={(e) => handleCommisonChange(index, parseInt(e.target.value))}
                                      labelProps={{
                                        className: "hidden",
                                      }}
                                      containerProps={{ className: "!min-w-[0px]" }} />
                                    <Index.Typography>%</Index.Typography>
                                  </div>
                                }
                              </>
                              :
                              <Index.Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal px-6"
                              >
                                {commission ?
                                  `${commission}%`
                                  : ""}
                              </Index.Typography>
                            }
                          </td>
                          <td className={`${classes} text-center`}>
                            {CommerLoading === "pending" ? <Skeleton /> :
                              <div className={`flex items-center ${type === "Servicetable_edit" ?"justify-center":"justify-between"}`}>
                                {type === "Servicetable_edit" ?
                                  <>
                                    <Index.Input type='text' value={type === "Servicetable_edit" ? price_for_mou : ""} onChange={(e) => type === "Servicetable_edit" ? handleMouChange(index, e.target.value) : ""} className=' text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
                                      labelProps={{
                                        className: "hidden",
                                      }}
                                      containerProps={{ className: "!min-w-[0px]" }} />
                                    <Index.Popover open={openPopover[index]} handler={()=>OpenAndClosePop(index,true)}
                                      animate={{
                                        mount: { scale: 1, y: 0 },
                                        unmount: { scale: 0, y: -25 },
                                      }} placement="bottom">
                                      <Index.PopoverHandler>
                                        <Index.IconButton
                                          //  onClick={() => handleRemoveRowClick(index)}
                                          className='bg-transparent shadow-none hover:shadow-none'> <Index.RemoveCircleOutlineOutlinedIcon className='text-black' /> </Index.IconButton>
                                      </Index.PopoverHandler>
                                      <Index.PopoverContent className="!z-[10000]">
                                        <div className="">
                                          <Index.Typography>are you sure you want to remove?</Index.Typography>
                                          <div className='flex justify-center gap-2'>
                                            <Index.Button onClick={() => removeCommercail(index, commercial_id)} color='green' size='sm'>Yes</Index.Button>
                                            <Index.Button onClick={() => OpenAndClosePop(index,false)} color='red' size='sm'>No</Index.Button>
                                          </div>
                                        </div>
                                      </Index.PopoverContent>

                                    </Index.Popover>

                                  </>
                                  :
                                  <>
                                    <Index.Typography className='pl-4'>{price_for_mou}</Index.Typography>
                                    <Index.IconButton
                                      onClick={() => removeCommercail(index)}
                                      className='bg-transparent shadow-none hover:shadow-none'> <Index.RemoveCircleOutlineOutlinedIcon className='text-black' /> </Index.IconButton>
                                  </>
                                }
                              </div>
                            }
                          </td>

                        </tr>
                      );
                    })
                    : ""}
                </tbody>
              </table>
            </Index.Card>
          </div>
        </div>
        <div className='text-center mt-6'>
          <Index.Button color='green' onClick={() => type === "Servicetable_edit" ? dispatchUpdate() : dispatchCreate()} className='rounded-full'>{`${type === "Servicetable_edit" ? 'Update Service' : 'Create Service'}`}</Index.Button>
        </div>
      </div>
    </>
  )
}

