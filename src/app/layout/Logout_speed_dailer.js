  import React from "react";
  import Index from "@/material_component/client_component";
  import { useDispatch,useSelector } from "react-redux";
  import { resetState } from "../redux/Slice/AuthSlice";
  import { resetState_viewll_led_BL } from "../redux/Slice/Bussness_leads/view_all_LedSlice";
  import { useRouter } from "next/navigation";
  import { auth_Logout } from "../Routs/Auth_Routs";

   
  export function LogoutSpeed_Di() {    
    const dispatch=useDispatch()
    const router = useRouter()
    const loading = useSelector((state) => state.myReducer.loading);
    // auth_Logout(router,loading)
    React.useEffect(()=>{
      if(loading!=="fulfilled"){
        router.push("/")     
      }
    },[loading])
    const Logout =()=>{
      dispatch(resetState())
      dispatch(resetState_viewll_led_BL())
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

  
