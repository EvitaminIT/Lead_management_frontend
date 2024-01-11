import React from 'react'
import { Create_user_manuinput } from './SSRcomponent'
import Index from '@/material_component/client_component'
import { removeUnderscores } from '../commen/commen_fun'


const TABLE_HEAD = ["Price", "Commission", "Price for mou"];
 


export default function Create_user() {
  const [ Commercials_ROWS,setCommercials_ROW]=React.useState([])
  const[isPrice,setPrice]=React.useState()
  const[isCommisson,setCommisson]=React.useState()


  const appendToCommercialsRows = () => {
    const new_row={
      Price:isPrice,
      Commission:isCommisson,
    }
    setCommercials_ROW((prevRows) => [...prevRows, new_row]);;
  };
  
  const handleRemoveRowClick = (index) => {
    setCommercials_ROW((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows.splice(index, 1);
      return updatedRows;
    });
  };

  React.useEffect(() => {
    if(isPrice<1){
      setPrice("")
    }
}, [isPrice])


React.useEffect(() => {
  if(isCommisson<1){
    setCommisson("")
  }
}, [isCommisson])
 

  return (
    <div className='p-6'>
     <Index.Typography className='font-semibold'>Create Service</Index.Typography>
     <div className='grid grid-cols-3 gap-4'>
      <div className='flex items-center justify-around'>
        <Index.Typography>Market Place</Index.Typography>
      </div>
      <div className='col-span-2 flex'>
      <Index.Select className='h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
           labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }} >
        <Index.Option>Material Tailwind HTML</Index.Option>
        <Index.Option>Material Tailwind React</Index.Option>
        <Index.Option>Material Tailwind Vue</Index.Option>
        <Index.Option>Material Tailwind Angular</Index.Option>
        <Index.Option>Material Tailwind Svelte</Index.Option>
      </Index.Select>
    
      <div>
      <Index.Popover  animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: -25 },
      }} placement="bottom">
      <Index.PopoverHandler>
        <Index.IconButton className='bg-transparent shadow-none hover:shadow-none'> <Index.AddCircleOutlineOutlinedIcon className='text-black'/> </Index.IconButton>
      </Index.PopoverHandler>
      <Index.PopoverContent className="!z-[10000]"> 
        
        <div className="flex">
          <Index.Input
            size="lg"
            placeholder="name@mail.com"
            className="h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-none rounded-l-[22px]"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          <Index.Button color='green' variant="gradient" className="flex-shrink-0 rounded-none rounded-r-[22px]">
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
        <Index.Input className='h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
           labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}/>
      </div>
     </div>
     <br/>
     <br/>
     <div>
     <Index.Typography className='font-semibold'>Add Commercials</Index.Typography>
     <div>
      <div className='h-full w-full'>
 
          <tr className='flex gap-0'>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className={`border-b border-blue-gray-100 bg-blue-gray-50 p-4  ${head==="Price"?"w-60":head==="Commission"?"w-60":"w-full"}`}
              >
                <Index.Typography
                  variant="small"
                  color="blue-gray"
                  className={`font-normal leading-none opacity-70  ${head==="Price"?"w-fit":""}`}
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
                <div className='px-2'>
                  <Index.Input value={isPrice} onChange={(e)=>setPrice(e.target.value)} className='!w-20 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10' 
                  type='number'
                  labelProps={{
                    className: "hidden",
                  }}
                    containerProps={{ className: "!min-w-[0px] !w-20" }}/>
                </div>
            
                </td>
                <td className={`w-32`}>
                <div className='px-2 flex items-center gap-2'>
                  <Index.Input type='number' value={isCommisson} onChange={(e)=>setCommisson(e.target.value)} className='!w-20 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10' 
                  labelProps={{
                    className: "hidden",
                  }}
                    containerProps={{ className: "!min-w-[0px]" }}/>
                    <Index.Typography>%</Index.Typography>
                </div>
                </td>
                <td className={`p-4 text-center`}>
                <div className='flex justify-center items-center'>
                <Index.Typography>Higher of (INR 3000 or 2% of sales)</Index.Typography>
                <Index.IconButton disabled={isPrice? false : true} onClick={appendToCommercialsRows} className='bg-transparent shadow-none hover:shadow-none'> <Index.AddCircleOutlineOutlinedIcon className='text-black'/> </Index.IconButton>
                </div>
                </td>
              </tr>
          {Commercials_ROWS.map(({ Price, Commission }, index) => {
            const isLast = index === Commercials_ROWS.length - 1;
            const classes = "p-4 py-0";
 
            return (
              <tr key={Price}>
                <td className={`${classes} w-40`}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Price}
                  </Index.Typography>
                </td>
                <td className={` ${classes} w-32`}>
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Commission?
                    `${Commission} %`
                    :""}
                  </Index.Typography>
                </td>
                <td className={`${classes} text-center`}>
                  <div className='flex justify-center items-center'>
                  <Index.Typography>
                   {Commission?
                   `Higher of (INR ${Price} or ${Commission}% of sales)`
                   :`INR ${Price}`}
                  </Index.Typography>
                  <Index.IconButton onClick={()=>handleRemoveRowClick(index)} className='bg-transparent shadow-none hover:shadow-none'> <Index.RemoveCircleOutlineOutlinedIcon className='text-black'/> </Index.IconButton>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Index.Card>
     </div>
     </div>
     <div className='text-center mt-2'>
      <Index.Button color='green' className='rounded-full'>Create Service</Index.Button>
     </div>
    </div>
  )
}
