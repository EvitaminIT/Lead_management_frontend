"use client"
import index from "@/material_component/client_component"
import Image from "next/image"
import evits_logo from '../Image/Evits_logo.svg'

export default function Login() {
  return (
    <div className="flex justify-center bg-[#2F3642] h-[100vh]">
    <div>
    <index.Card className="mt-40" color="transparent" shadow={false}>
      <index.CardHeader className="text-center" color="transparent" shadow={false}>
      <div className="flex justify-center">
      <div className="bg-[#D9D9D9] w-fit rounded-full px-[11px] py-[20px]">
      <Image className="rounded-full" src={evits_logo}/>
      </div>
      </div>
      <index.Typography variant="h4" className="text-[#FFFFFF] mt-4">Welcome to EVITS</index.Typography>
      </index.CardHeader>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        
        <div className="mb-1 flex flex-col gap-6">
            <div className="flex items-end gap-4">
          <index.PersonOutlineOutlinedIcon className="!text-3xl text-white mb-1"/>
          <index.Input
            color="green"
            size="lg"
            className="border-[#777777]"
            variant="standard" 
            label="email" 
          />
            </div>
            <div className="flex items-end gap-4">
          <index.HttpsOutlinedIcon className="!text-3xl text-white mb-1"/>
          <index.Input
            type="password"
            color="green"
            size="lg"
            className="border-[#777777]"
            variant="standard" 
            label="password" 
          />
            </div>
        </div>
        <div className="flex justify-between mt-6">
        <index.Checkbox
          label={
            <index.Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Remember Me
            </index.Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <index.Button size="sm" className="bg-[#7FBA31]">
          Log In
        </index.Button>
        </div>
        <index.Typography color="gray" className="mt-4 text-center font-normal">
          <a href="#" className="font-medium text-[#777777]">
          Forgot Password
          </a>
        </index.Typography>
      </form>
    </index.Card>
    </div>
    </div>
  )
}
