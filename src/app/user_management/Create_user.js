import React from 'react'
import { Create_user_manuinput } from './SSRcomponent'
import Index from '@/material_component/client_component'
import { useDispatch,useSelector } from 'react-redux'
import { get_regular_Dropdown_api,get_OneDependend_Dropdown_api,get_TwoDependend_Dropdown_api } from '../redux/Slice/Dropdowns/tabledropdown'
import { removeUnderscores } from '../commen/commen_fun'

export default function Create_user() {
    const [CreateUserDetails,setCreateUserDetails]= React.useState({})
    const [Seldepartment, setdepartment] = React.useState("");
    const [SelDesignation, setDesignation] = React.useState("");
    const [SelRole, setRole] = React.useState("");
    const dispatch=useDispatch()
    const token = useSelector((state) => state.myReducer.token);
    const department_data = useSelector((state) => state.GetTableDropRedu.reg_drop_data);
    const designation_data = useSelector((state) => state.GetTableDropRedu.dep_one_data);
    const user_rol_data = useSelector((state) => state.GetTableDropRedu.dep_two_data);
    const data = useSelector((state) => state.myReducer.data);

    React.useEffect(() => {
        dispatch(get_regular_Dropdown_api({accessToken:token.access,Dropdown:"ev_department"}))
    }, [])

   const onchange=(e)=>{
      setCreateUserDetails({...CreateUserDetails,[e.target.name]:e.target.value})
   }

   
  const setDepartment=(value)=>{
    setdepartment(value)
    setCreateUserDetails({...CreateUserDetails,"department":value})
    dispatch(get_OneDependend_Dropdown_api({accessToken:token.access,Dropdown:"ev_designation",data1:value}))
  }

  const setdesignation=(value)=>{
    setDesignation(value)
    setCreateUserDetails({...CreateUserDetails,"designation":value})
    dispatch(get_TwoDependend_Dropdown_api({accessToken:token.access,Dropdown:"user_role_list",data1:Seldepartment,data2:value}))
  }

  const setUser_Role=(value)=>{
    setCreateUserDetails({...CreateUserDetails,"user_role":value})
  } 

  const user_rol=data?data.user_role:"";
  return (
    <div className='grid grid-cols-3 gap-4 p-6'>
       { Create_user_manuinput.map((data)=>{
         return(
            <>
       {data.title==="Department" || data.title === "Designation" || data.title === "Admin Role" ? 
        <>
         <div className='flex items-center'>
        <Index.Typography className='text-xl'>{data.title}:</Index.Typography>
       </div>
       <div className='col-span-2'>
       <Index.Select placeholder={data.title} value={Seldepartment} disabled={data.title === "Designation"? Seldepartment? false : true:data.title === "Admin Role"?SelDesignation? false :true : ""} onChange={(value) => data.title==="Department" ? setDepartment(value): data.title==="Designation"? setdesignation(value):data.title === "Admin Role"? setUser_Role(value):""}  variant="outlined" className='h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
           labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }} label="Select Version">
        {data.title==="Department" && department_data && department_data.title? 
        department_data.title.map((depart_data,index)=>{
            return(
            <Index.Option className='capitalize'  value={depart_data} id={index+1} key={index}>{removeUnderscores(depart_data)}</Index.Option>  
            )
        })
        : 
        data.title==="Designation" && designation_data && designation_data.title ? 
        designation_data.title.map((desig_data,index)=>{
          return(
            <Index.Option className='capitalize'  value={desig_data} id={index+1} key={index}>{removeUnderscores(desig_data)}</Index.Option> 
          )
        }):
        data.title==="Admin Role" && user_rol_data && user_rol_data.title?
        user_rol_data.title.map((role_list,index)=>{
          return(
            <Index.Option className='capitalize'  value={role_list} id={index+1} key={index}>{removeUnderscores(role_list)}</Index.Option> 
          )
        }):""
        }
  
      </Index.Select>
       </div>
        </>
       :
       <>
       <div className={`flex items-center  ${user_rol==="admin"? `${data.title==="Password"||data.title==="Confirm Password"?"hidden":""}`:""}`}>
        <Index.Typography className='text-xl'>{data.title}</Index.Typography>
       </div>
       <div className={`col-span-2 ${user_rol==="admin"? `${data.title==="Password"||data.title==="Confirm Password"?"hidden":""}`:""}`}>
          <Index.Input
          onChange={onchange}
          name={data.name}
          type={data.title==="Email ID"?"email":data.title==="Password"?"password":data.title==="Confirm Password"?"password":"text"}
          placeholder={data.title}
          value={data.title==="Name" ? CreateUserDetails.name : data.title==="Employee I.D."? CreateUserDetails.emp_id :data.title==="Email ID"?CreateUserDetails.email:data.title==="User Name"?CreateUserDetails.user_name:data.title==="Password"?CreateUserDetails.password:data.title==="Confirm Password"?CreateUserDetails.confirm_password:""}
          className={`h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full `}
           labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}/>
       </div>
       </>
      }
            </>
         )
      })}
    <div className='col-span-3 text-center mt-4'>
    <Index.Button disabled={!CreateUserDetails.department || !CreateUserDetails.designation || !CreateUserDetails.user_role || !CreateUserDetails.name || !CreateUserDetails.emp_id || !CreateUserDetails.email || !CreateUserDetails.user_name || !CreateUserDetails.password ||!CreateUserDetails.confirm_password ? true:false}  className='bg-[#67B037]'>Add User</Index.Button>
    </div>
    </div>
  )
}
