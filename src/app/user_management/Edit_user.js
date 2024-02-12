import React from "react";
import Index from "@/material_component/client_component";
import { Edit_form_filds } from "./SSRcomponent";
import { useSelector,useDispatch } from "react-redux";
import { getDepartment_Droupdown_API } from "../redux/Slice/Dropdowns/Depardropdown";
import { DesigDroup_API } from "../redux/Slice/Dropdowns/Designationdroup";
import { removeUnderscores } from "../commen/commen_fun";
import { GetProductDroupdownAPI } from "../redux/Slice/Dropdowns/Productdropdown";
import { UpdateUserAPI } from "../redux/Slice/Account/UpdateUserRedu";
import { ToastContainer,Flip, } from 'react-toastify';


export function Edit_User({
  Emp_id,
  Email_id,
  Designation,
  Name,
  Department,
  Product,
  Employee_Status
}) {
  const dispatch= useDispatch()
  const [ DispatchData, setDispatchData ]=React.useState();
  const [ employID,setemployID ]=React.useState();
  const [ emailID,setemailID ]=React.useState();
  const [ SelDesigNation,setSelDesignation ]=React.useState();
  const [ name,setname ]=React.useState();
  const [ SelDepart,setSeldepart ] =React.useState()
  const [ Pro,setPro ]=React.useState();
  const [open, setOpen] = React.useState(0);
  const [ isEdit, setEdit ] = React.useState(false);
  const [isActive, setActive] = React.useState(false);
  const [ DepartDroup,setDepartDroup ]= React.useState([]);
  const [ DesigDroup,setDesigDroup ]= React.useState([]);
  const [ ProductDroup,setProductDroup ]= React.useState([]);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const department_data = useSelector((state) => state.GetTableDropRedu.data);
  const designation_data = useSelector((state) => state.GetDesignationDroupRedu.data);
  const Product_data = useSelector((state) => state.GetProductDroupRedu.data);
  const token = useSelector((state) => state.myReducer.token);
  const data = useSelector((state) => state.myReducer.data);
  
  
  React.useEffect(()=>{
    dispatch(getDepartment_Droupdown_API({accessToken:token.access}))
  },[token])

  React.useEffect(()=>{
    setDepartDroup(department_data)
  },[department_data])

  React.useEffect(()=>{
   setemployID(Emp_id)
  },[Emp_id])

  React.useEffect(()=>{
    setemailID(Email_id)
   },[Email_id])

   React.useEffect(()=>{
    setSelDesignation(parseInt(Designation.designation_id))
    Designation.designation_id!==""?dispatch(GetProductDroupdownAPI({accessToken:token.access,Degi_id:parseInt(Designation.designation_id)})):""
   },[Designation])
  


   React.useEffect(()=>{
    setname(Name)
   },[Name])

   React.useEffect(()=>{
    dispatch(DesigDroup_API({accessToken:token.access,Dep_id:parseInt(Department.department_id)}))
    setSeldepart(Department.department_id)
   },[Department])

   React.useEffect(()=>{
    // setPro(Product)
    
   },[Product])



   React.useEffect(()=>{
    setActive(Employee_Status)
   },[Employee_Status])

  React.useEffect(()=>{
    setDesigDroup(designation_data)
  },[designation_data])

  const onChange_depatment=(val)=>{
    setSeldepart(val)
    setSelDesignation("")
    dispatch(DesigDroup_API({accessToken:token.access,Dep_id:val}))
  }

  const onChange_designaton=(val)=>{
    setSelDesignation(val)
  }
  
  const onchange_dispatch=()=>{
    const dispatch_data={"name":name,"department":SelDepart,"designation":SelDesigNation,"employee_status":isActive}
    dispatch(UpdateUserAPI({accessToken:token.access,Employee_id:employID,data:dispatch_data}))
  }


  

  const SelectFiled=({optionList,title,name})=>{
    const lis=optionList?optionList:[];
    return(
      <>
      <Index.Select name={name} value={title==="Department"? SelDepart:title==="Designation"?SelDesigNation:""} onChange={(value)=>title==="Department"?onChange_depatment(value):title==="Designation"?onChange_designaton(value):""} className="h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-lg bg-white capitalize" label="Select Version"
       labelProps={{
        className: "hidden",
      }}
      disabled={isEdit ? false : true}
      containerProps={{ className: "min-w-[100px]" }}>
        {lis.map((Opdata,index)=>{
          return(
            <Index.Option className="capitalize" value={parseInt(title==="Department"? Opdata.department_id:title==="Designation"?Opdata.designation_id:"")} key={index}>{removeUnderscores(title==="Department"? Opdata.department_name:title==="Designation"?Opdata.designation_name:"")}</Index.Option>
          )
        })}
      </Index.Select>
      </>
    )
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
              <div className={`grid grid-cols-2 gap-4  ${data.department==="admin"? form_filed.title === "Product" ? "hidden":"":""}`}>
                <div className="flex items-center p-3 px-10">
                  <Index.Typography>{form_filed.title}</Index.Typography>
                </div>
                <div className={``}>
                  {form_filed.title === "Department" || form_filed.title === "Designation" || form_filed.title === "Product" ?
                  <div className="">
                    <SelectFiled title={form_filed.title} name={form_filed.name} optionList={form_filed.title === "Department" ?DepartDroup:form_filed.title === "Designation"?DesigDroup:""}/>
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
                      name={form_filed.name}
                      size="sm"
                      onChange={(value)=>form_filed.title === "Employee id"? setemployID(value.target.value) : form_filed.title === "Name" ? setname(value.target.value): form_filed.title === "Email id" ? setemailID(value.target.value):""}
                      value={form_filed.title === "Employee id"? employID : form_filed.title === "Name" ? name: form_filed.title === "Email id" ? emailID:"" }
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
          <Index.Button size="md" onClick={onchange_dispatch} disabled={isEdit ? false : true}  color="green">Submit</Index.Button>
        </div>
      </div>
    </>
  );
}