import React from 'react';
import { Create_user_manuinput,Admin_Create_user_manuinput } from './SSRcomponent';
import Index from '@/material_component/client_component';
import { useDispatch,useSelector } from 'react-redux';
import { GetDepartmentDroupdownAPI } from '../redux/Slice/Dropdowns/Depardropdown';
import { removeUnderscores } from '../commen/commen_fun';
import { DesigDroupAPI } from '../redux/Slice/Dropdowns/Designationdroup';
import { AddUserAPI } from '../redux/Slice/Account/RegisterUserRedu';
import { ToastContainer,Flip, toast } from 'react-toastify';
import { ViewAllEmpAPI } from '../redux/Slice/Employee/ViewAllEmployeeRedu';





export default function Create_user() {
    const [CreateUserDetails,setCreateUserDetails]= React.useState({});
    const [ depatDroup,setdepatDroup ]=React.useState([]);
    const [ DesignationDroup,setDesignationDroup ]=React.useState([]);
    const [ userInputs,setUserInputs ]= React.useState([]);
    const [Seldepartment, setdepartment] = React.useState("");
    const [SelDesignation, setDesignation] = React.useState("");
    const dispatch=useDispatch();
    const token = useSelector((state) => state.myReducer.token);
    const department_data = useSelector((state) => state.GetTableDropRedu.data);
    const designation_data = useSelector((state) => state.GetDesignationDroupRedu.data);
    const data = useSelector((state) => state.myReducer.data);
    const loading = useSelector((state) => state.AddUserReducer.loading);

    
    React.useEffect(() => {
      dispatch(GetDepartmentDroupdownAPI({accessToken:token.access}))
    }, [])

    React.useEffect(()=>{
      setDesignationDroup(designation_data)
    },[designation_data])

    React.useEffect(()=>{
      setdepatDroup(department_data)
    },[department_data])

    React.useEffect(()=>{     
      if(data.department==="admin"){
        setUserInputs(Admin_Create_user_manuinput)
      }
    },[data])

   const dispatch_details=()=>{
    dispatch(AddUserAPI({accessToken:token.access,data:CreateUserDetails}))
   }    

   const onchange=(e)=>{
      setCreateUserDetails({...CreateUserDetails,[e.target.name]:e.target.value})
   }

   
  const setDepartment=(value)=>{
    setdepartment(value)
    setCreateUserDetails({...CreateUserDetails,"department":value})
    dispatch(DesigDroupAPI({accessToken:token.access,Dep_id:value}))
  }

  const setdesignation=(value)=>{
    setDesignation(value)
    setCreateUserDetails({...CreateUserDetails,"designation":value})
  }


  const SelectFiled=({optionList,title,name})=>{
    const lis=optionList?optionList:[];
    return(
      <>
      <Index.Select name={name} value={title==="Department"? Seldepartment:title==="Designation"?SelDesignation:""} onChange={(value)=>title==="Department"?setDepartment(value):title==="Designation"?setdesignation(value):""} className="h-10 px-5 pr-10 text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full" 
       labelProps={{
        className: "hidden",
      }}
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


  const user_rol=data?data.user_role:"";
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
    
    <div className='grid grid-cols-3 gap-4 p-6 h-full'>
       { userInputs.map((data,index)=>{
         return(
            <>
       {data.title==="Department" || data.title === "Designation" || data.title === "Admin Role" ? 
        <>
         <div key={index} className='flex items-center'>
        <Index.Typography className='text-xl'>{data.title}:</Index.Typography>
       </div>
       <div key={index} className='col-span-2'>
       <SelectFiled  optionList={data.title==="Department"?depatDroup:data.title === "Designation"?DesignationDroup:""} title={data.title}/>
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
    <Index.Button disabled={data.department==="admin"? !CreateUserDetails.department || !CreateUserDetails.designation || !CreateUserDetails.name || !CreateUserDetails.employee_id || !CreateUserDetails.email || !CreateUserDetails.name ? true: loading==="pending"? true:false:""} onClick={dispatch_details}  className='bg-[#67B037]'>
    <div className='flex justify-center w-[5.5rem]'>
     Add User {loading==="pending"?  <Index.Spinner className="ml-2 h-4 w-4" />:"" }
      </div>  
    </Index.Button>
    </div>
    </div>
    </>
  )
};
