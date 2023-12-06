import { Nav_component } from "./SSRcomponet";
import React from "react";
import index from "@/material_component/client_component";
import { usePathname } from 'next/navigation';

 
export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const pathname = usePathname();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <index.Navbar className="mx-auto max-w-screen-xl px-4 py-2 shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:block">
          <index.List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">

         { Nav_component.map((data)=>{
            return(
                <>              
          <index.Typography
        as="a"
        href="#"
        variant="text"
        className="font-medium"
      >
        <index.ListItem className={`flex items-center gap-2 py-2 pr-4  ${pathname===data.Navigation ? "bg-[#2F3642] text-white":""}`}>
          {data.title}
        </index.ListItem>
      </index.Typography>
                </>
            )
         }) }
          </index.List>
        </div>
        <div className="hidden lg:flex gap-6 items-center">
        <div className="relative text-gray-600">
      <index.Input
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
        <index.IconButton className="rounded-full bg-[#2F3642]"><index.NotificationsOutlinedIcon/></index.IconButton>
    </div>
    <div>
    <index.Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" withBorder={true} color="green" alt="avatar" size="lg" />
    </div>
        </div>
        <index.IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <index.XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <index.Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </index.IconButton>
      </div>
      {/* <index.Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <index.Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </index.Button>
          <index.Button variant="gradient" size="sm" fullWidth>
            Sign In
          </index.Button>
        </div>
      </index.Collapse> */}
    </index.Navbar>
  );
}