export const API = {
    Auth: {
        login: "/account/login",
    },
    Account: {
        User_register: "/account/register",
        view_allUser: "/account/view_users",
        user_Update: "/account/user_update",
        Delete_user: "/account/user_delete",
        ArchiveUser:{
            GetArchiveUser:"/account/view_user_archive",
            SearchArchiveUser:"/account/view_user_search",
        }
    },
    token: {
        verify: "",
    },
    Leads: {
        Service: {
            viewAllService: "/leads/view_service",
            updateService:"/leads/update_service",
            DeleteService:"/leads/delete_service",
            CreateService:"/leads/create_service",
            SearchService:"/leads/search_service",
        },
        MarketPlace: {
            viewAllMarketPlace: "/leads/view_marketplace",
            CreateMarketPlace:"/leads/create_marketplace",
            UpdateMarketPlace:"/leads/update_marketplace",
            DeleteMarketPlace:"/leads/delete_marketplace",
            SearchMarketPlace:"/leads/search_marketplace",
        },
        commercial:{
            ViewAllCommercial:"/leads/view_commercials",
            DeleteCommercial:"/leads/delete_commercials"
        },
        Status:{
            EmpStatusList:"/leads/dropdown_employee_status",
        }
    },
    Dropdown: {
        Department: "/leads/dropdown_department",
        Designation: "/leads/dropdown_designation",
        Product: "/leads/dropdown_product",
    },
}