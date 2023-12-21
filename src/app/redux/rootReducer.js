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



const rootReducer = combineReducers({
  myReducer: myReducer,
  view_all_leadsReducer:view_all_leadsReducer,
  GetInd_leadsReducer:GetInd_leadsReducer,
  Add_manual_leadsReducer:Add_manual_leadsReducer,
  add_and_view_new_service_Reducer:add_and_view_new_service_Reducer,
  upload_file_bl_Reducer:upload_file_bl_Reducer,
  GetTableDropRedu:GetTableDropRedu,
  Delete_lead_for_approvelRedu:Delete_lead_for_approvelRedu,
});

export default rootReducer;
