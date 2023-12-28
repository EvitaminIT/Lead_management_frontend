export const API ={
    Auth:{
        login:"/account/login",
    },
    token:{
         verify:"",
    },
    Business_leads:{
        view_all_leads:"/business_leads/view_all_leads",
        get_lead:"/business_leads/view_lead",
        add_manual_leads:"/business_leads/create_lead_manual",
        add_and_view_new_service:"/business_leads/field_add_new_service",
        upload_file_bl:"/business_leads/upload",
        delete_for_app:"/business_leads/add_lead_delete_approval",
        lead_id_search:"/business_leads/view_lead_search"
    },
    Dropdown:{
        table_drop:"/dropdown/options"
    },
    Employee:{
        viewAllEmp:"/employees/view_all_user",
        Delete_Emp:"/employees/add_user_delete_approval",
        Search_user:"/employees/view_user_search",
    }

}