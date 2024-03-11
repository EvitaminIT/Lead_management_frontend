
import React from "react";
import Index from "@/material_component/client_component";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { LogoutSpeedDi } from "./Logout_speed_dailer";
import dynamic from 'next/dynamic'
import { useSelector } from "react-redux";
import { AdminTabs } from "./SSRcomponent";

export function NavbarWithMegaMenu({
}) {
  const [Tab_list, setTab_list] = React.useState([])
  const [usertype, setUserType] = React.useState()
  const [openNav, setOpenNav] = React.useState(false);
  const pathname = usePathname();
  const data = useSelector((state) => state.myReducer.data);




  React.useEffect(() => {
    data ? setUserType(data.department) : ""
  }, [data])

  React.useEffect(()=>{
    if (usertype === "admin") {
      setTab_list(AdminTabs)
    }
  },[usertype])



  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {Tab_list ? 
          <Index.Navbar  className="max-w-screen-xl px-4 py-2 shadow-none">
            <div className="flex items-center justify-between text-blue-gray-900">
                    <div className="hidden lg:block">
                <Index.List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
                  {Tab_list.map((data, index) => {
                    return (

                        <Link key={index} href={String(data.navigation)}>

                          <Index.ListItem className={`flex items-center gap-2 py-2 pr-4 capitalize ${pathname === data.navigation ? "!bg-[#2F3642] !text-white" : ""}`}>
                            {data.title}
                          </Index.ListItem>

                        </Link>

                    )
                  })}
                </Index.List>
              </div>
              </div>
          </Index.Navbar>
          : ""}
        <div className="grid grid-cols-7 gap-4">
          <div className="flex items-center col-span-6 justify-end">
            <div>
              <div className="hidden lg:flex gap-6">
                <div className="relative text-gray-600">
                  <Index.Input
                    type="search"
                    name="search"
                    placeholder="Search..."
                    className="h-10 px-5 pr-10 rounded-full text-sm focus:outline-none !border !border-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 !bg-[#2F3642]"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                  <button type="submit" className="absolute right-0 top-[1px]">
                    <div className="p-[11px] bg-[#2F3642] rounded-full ... w-[121%] text-white flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.293 13.293a1 1 0 01-1.414 1.414l-3.147-3.146a6 6 0 111.414-1.414l3.146 3.146zM6 10a4 4 0 100-8 4 4 0 000 8z"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="pl-10">
                  <Index.IconButton className="rounded-full bg-[#2F3642]"><Index.NotificationsOutlinedIcon /></Index.IconButton>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <LogoutSpeedDi />
          </div>
        </div>
      </div>
    </>
  );
}


export default dynamic(() => Promise.resolve(NavbarWithMegaMenu), { ssr: false })
