// src/reducers/index.js
import { combineReducers } from 'redux';
import myReducer from './Slice/AuthSlice'
import view_all_leadsReducer from './Slice/Bussness_leads/view_all_LedSlice'
import GetInd_leadsReducer from './Slice/Bussness_leads/Get_ind_leads'
import Add_manual_leadsReducer from './Slice/Bussness_leads/Add_manual_leads'
import add_and_view_new_service_Reducer from './Slice/Bussness_leads/add_view_new_ser'
import upload_file_bl_Reducer from './Slice/Bussness_leads/upload_file_blreducer'
import GetTableDropRedu from './Slice/Dropdowns/tabledropdown'
import Delete_lead_for_approvelRedu from './Slice/Bussness_leads/delete_lead_for_approvl'
import Search_by_leadReducer from './Slice/Bussness_leads/Search_by_leads'
import View_all_Emp_Reducer from './Slice/Employee/ViewAllEmployeeRedu'
import Delete_Emp_Reducer from './Slice/Employee/Delete_Emp'
import Search_EmpReducer from './Slice/Employee/SearchEmpRedu'
import View_all_Service_Reducer from './Slice/Evitamin/Veiw_all_serviceRedu'


const rootReducer = combineReducers({
  myReducer: myReducer,
  view_all_leadsReducer:view_all_leadsReducer,
  GetInd_leadsReducer:GetInd_leadsReducer,
  Add_manual_leadsReducer:Add_manual_leadsReducer,
  add_and_view_new_service_Reducer:add_and_view_new_service_Reducer,
  upload_file_bl_Reducer:upload_file_bl_Reducer,
  GetTableDropRedu:GetTableDropRedu,
  Delete_lead_for_approvelRedu:Delete_lead_for_approvelRedu,
  Search_by_leadReducer:Search_by_leadReducer,
  View_all_Emp_Reducer:View_all_Emp_Reducer,
  Delete_Emp_Reducer:Delete_Emp_Reducer,
  Search_EmpReducer:Search_EmpReducer,
  View_all_Service_Reducer:View_all_Service_Reducer,
});

export default rootReducer;
