export const API = {
    Auth: {
        login: "/account/login",
    },
    Account: {
        User_register: "/account/register",
        view_allUser: "/account/view_users",
        user_Update: "/account/user_update",
        Delete_user: "/account/user_delete",
    },
    token: {
        verify: "",
    },
    Leads: {
        Service: {
            viewAllService: "/leads/view_service",
            updateService:"/leads/update_service",
        },
        MarketPlace: {
            viewAllMarketPlace: "/leads/view_marketplace",
        },
        commercial:{
            ViewAllCommercial:"/leads/view_commercials",
            DeleteCommercial:"/leads/delete_commercials"
        }
    },
    Business_leads: {
        view_all_leads: "/business_leads/view_all_leads",
        get_lead: "/business_leads/view_lead",
        add_manual_leads: "/business_leads/create_lead_manual",
        add_and_view_new_service: "/business_leads/field_add_new_service",
        upload_file_bl: "/business_leads/upload",
        delete_for_app: "/business_leads/add_lead_delete_approval",
        lead_id_search: "/business_leads/view_lead_search"
    },
    Dropdown: {
        Department: "/leads/dropdown_department",
        Designation: "/leads/dropdown_designation",
        Product: "/leads/dropdown_product",
    },
    Employee: {
        viewAllEmp: "/employees/view_all_user",
        Delete_Emp: "/employees/add_user_delete_approval",
        Search_user: "/account/view_user_search",
    },
    Evits: {
        viewAllService: "/evitamin/view_all_services",
        Serch_Service: "/evitamin/view_services_search"
    }

}