import React from "react";
import Index from "@/material_component/client_component";
import { Edit_form_filds } from "./SSRcomponent";

export function Edit_User() {
  const [open, setOpen] = React.useState(0);
  const [ isEdit, setEdit ] = React.useState(false);
  const [isActive, setActive] = React.useState(false);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="px-10" >
        <div className="grid grid-cols-2 gap-4 py-4">
          <Index.Typography className="text-2xl font-semibold">Admin Management</Index.Typography>
          <div>
            <div className="float-right">
              <div className="flex gap-4">
                <p>{isEdit ? "Edit On" : "Edit Off"}</p>
              <Index.Switch
                checked={isEdit} onChange={()=>setEdit(!isEdit)}
                id="custom-switch-component"
                ripple={false}
                className="h-full w-full checked:bg-[#312B2B]"
                containerProps={{
                  className: "w-11 h-6",
                }}
                circleProps={{
                  className: "before:hidden left-0.5 border-none bg-[#67B037]",
                }}
              />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">

          {Edit_form_filds.map((form_filed) => {

            return <>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center p-3 px-10">
                  <Index.Typography>{form_filed.title}</Index.Typography>
                </div>
                <div className="">
                  {form_filed.title === "Department" || form_filed.title === "Designation" || form_filed.title === "Product" || form_filed.title === "User Role" ?
                    <div className="">
                      <Index.Select className='px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10  border-solid border-2 border-[#777777] bg-white'
                      labelProps={{
                        className: "hidden",
                      }}
                      disabled={isEdit ? false : true}
                      containerProps={{ className: "min-w-[100px]" }}>
                        <Index.Option>Material Tailwind HTML</Index.Option>
                        <Index.Option>Material Tailwind React</Index.Option>
                        <Index.Option>Material Tailwind Vue</Index.Option>
                        <Index.Option>Material Tailwind Angular</Index.Option>
                        <Index.Option>Material Tailwind Svelte</Index.Option>
                      </Index.Select>
                    </div>
                    :
                    
                    form_filed.title === "Employee Status" ?
                    <div className="h-full flex items-center">
                    <div className="grid grid-cols-2 gap-4 w-full"> 
                       <Index.Switch disabled={isEdit ? false : true} color="green" checked={isActive} onChange={()=>setActive(!isActive)}  />
                      <div>
                       <Index.Chip className="text-center" color={isActive?"green":"red"} value={isActive ? "Active" : "In-Active"} />
                      </div>
                    </div>
                    </div>
                    :
                    <Index.Input
                      size="sm"
                      type={form_filed.title === "Email id" ? "email" : "text"}
                      disabled={isEdit ? false : true}
                      className='px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10  border-solid border-2 border-[#777777] bg-white'
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }} />
                  }
                </div>
              </div>
            </>

          })}

        </div>
        <div className="text-center mt-20">
          <Index.Button size="md" color="green">Submit</Index.Button>
        </div>
      </div>
    </>
  );
}