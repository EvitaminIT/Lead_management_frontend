  import React from "react";
  import Index from "@/material_component/client_component";
  import { useDispatch,useSelector } from "react-redux";
  import { resetState } from "../redux/Slice/AuthSlice";
  import { useRouter } from "next/navigation";

   
  export function LogoutSpeedDi() {    
    const dispatch=useDispatch()
    const router = useRouter()
    const loading = useSelector((state) => state.myReducer.loading);
    React.useEffect(()=>{
      if(loading!=="fulfilled"){
        router.push("/")     
      }
    },[loading])
    const Logout =()=>{
      dispatch(resetState())
    }
    return (
      <div className="">
         <Index.Popover placement="bottom">
      <Index.PopoverHandler>
      <Index.Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" withBorder={true} color="green" alt="avatar" size="lg" />
      </Index.PopoverHandler>
      <Index.PopoverContent className="">
        <div className="flex gap-2 items-center">
          <Index.Typography>Log Out</Index.Typography>
          <Index.IconButton onClick={Logout} className="bg-[#67B037]">
            <Index.PowerSettingsNewOutlinedIcon/>
            </Index.IconButton>
        </div>
      </Index.PopoverContent>
    </Index.Popover>
      </div>
    );
  }

  
