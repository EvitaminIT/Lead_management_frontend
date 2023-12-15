"use client"
import Index from "@/material_component/client_component"
import Image from "next/image"
import evits_logo from '../Image/Evits_logo.svg'
import React from "react"
import { AuthpostApiData } from "./redux/Slice/AuthSlice"
import { useDispatch,useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { auth_routs } from "./Routs/Auth_Routs"
import logcss from '../CSS/Login_autofill.css'

export default function Login() {
   const [Authdetails,setAuthdetails]= React.useState()
   const dispatch=useDispatch();
   const router = useRouter()
   const data = useSelector((state) => state.myReducer.data);
   const error = useSelector((state) => state.myReducer.error);
   const loading = useSelector((state) => state.myReducer.loading);
   const onchange=(e)=>{
      setAuthdetails({...Authdetails,[e.target.name]:e.target.value})
   }
  const LoginDispatch =()=>{
    dispatch(AuthpostApiData(Authdetails))
  }  

  auth_routs(router,loading)


  return (
    <div className="flex justify-center bg-[#2F3642] h-[100vh]">
    <div>
    <Index.Card className="mt-40" color="transparent" shadow={false}>
      <Index.CardHeader className="text-center" color="transparent" shadow={false}>
      <div className="flex justify-center">
      <div className="bg-[#D9D9D9] w-fit rounded-full px-[11px] py-[20px]">
      <Image className="rounded-full" src={evits_logo}/>
      </div>
      </div>
      <Index.Typography variant="h4" className="text-[#FFFFFF] mt-4">Welcome to EVITS</Index.Typography>
      </Index.CardHeader>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        
        <div className="mb-1 flex flex-col gap-6">
            <div className="flex items-end gap-4">
          <Index.PersonOutlineOutlinedIcon className="!text-3xl text-white mb-1"/>
          <Index.Input
            color={error ? "red":"green"}
            size="lg"
            className="border-[#777777] bg-none! text-white"
            variant="standard" 
            label="email" 
            name="email"
            onChange={onchange}
          />
            </div>
            <div className="flex items-end gap-4">
          <Index.HttpsOutlinedIcon className="!text-3xl text-white mb-1"/>
          <Index.Input
            type="password"
            color={error ? "red":"green"}
            size="lg"
            className="border-[#777777] text-white"
            variant="standard" 
            label="password" 
            name="password"
            onChange={onchange}
          />
            </div>
        </div>
       { error ? 
        <div className="text-center py-2">
        <Index.Typography color="red">
          {error}
      </Index.Typography>
        </div> : ""
      }
        <div className="flex justify-between mt-6">
        <Index.Checkbox
          label={
            <Index.Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Remember Me
            </Index.Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Index.Button onClick={LoginDispatch} size="sm" className="bg-[#7FBA31]">
        {loading == "pending" ? <div className="mx-[8.5px]"> <Index.Spinner color="white" /> </div>  : " Log In" }
        </Index.Button>
        </div>
        <Index.Typography color="gray" className="mt-4 text-center font-normal">
          <a href="#" className="font-medium text-[#777777]">
          Forgot Password
          </a>
        </Index.Typography>
      </form>
    </Index.Card>
    </div>
    </div>
  )
}
