// src/reducers/index.js
import { combineReducers } from 'redux';
import myReducer from './Slice/AuthSlice';
import GetTableDropRedu from './Slice/Dropdowns/Depardropdown';
import ViewAllEmpReducer from './Slice/Employee/ViewAllEmployeeRedu';
import SearchEmpReducer from './Slice/Employee/SearchEmpRedu';
import GetDesignationDroupRedu from './Slice/Dropdowns/Designationdroup';
import AddUserReducer from './Slice/Account/RegisterUserRedu';
import GetProductDroupRedu from './Slice/Dropdowns/Productdropdown';
import UpdateUserReducer from './Slice/Account/UpdateUserRedu';
import DeleteUserReducer from './Slice/Account/DeleteUserRedu';
import ViewAllServiceReducer from './Slice/Leads/Service/VeiwAllServiceRedu';
import ViewAllMarketReducer from './Slice/Leads/MartketPlace/ViewAllMarkerPlaceRedu';
import ViewAllCommericalReducer from './Slice/Leads/commercial/ViewAllCommericalRedu';
import UpdateServiceReducer from './Slice/Leads/Service/UpdateServiceRedu';
import DeleteCommericalReducer from './Slice/Leads/commercial/DeleteCommericalRedu';
import CreateServiceReducer  from './Slice/Leads/Service/CreateServiceRedu';
import CreateMarketPlaceReducer from './Slice/Leads/MartketPlace/CreatMarketPlaceRedu';
import UpdateMarketPlaceReducer from './Slice/Leads/MartketPlace/UpdateMarketPlaceRedu';
import DeleteMarketPlaceReducer from './Slice/Leads/MartketPlace/DeleteMarketPlaceRedu';
import SearchMarketPlaceReducer from './Slice/Leads/MartketPlace/SearchMarketPlaceRedu';
import SearchServiceReducer from './Slice/Leads/Service/SearchServiceRedu';
import ViewAllEmpStatusReducer from './Slice/Leads/EmpStatus/EmpStatusListRedu';
import GetArchiveUsersReducer from './Slice/Account/ArchiveUsers/GetArchiveUserRedu';
import SearchArchiveUsersReducer from './Slice/Account/ArchiveUsers/SearchArchiveUserRedu';



const rootReducer = combineReducers({
  myReducer: myReducer,
  GetTableDropRedu:GetTableDropRedu,
  ViewAllEmpReducer:ViewAllEmpReducer,
  SearchEmpReducer:SearchEmpReducer,
  GetDesignationDroupRedu:GetDesignationDroupRedu,
  AddUserReducer:AddUserReducer,
  GetProductDroupRedu:GetProductDroupRedu,
  UpdateUserReducer:UpdateUserReducer,
  DeleteUserReducer:DeleteUserReducer,
  ViewAllServiceReducer:ViewAllServiceReducer,
  ViewAllMarketReducer:ViewAllMarketReducer,
  ViewAllCommericalReducer:ViewAllCommericalReducer,
  UpdateServiceReducer:UpdateServiceReducer,
  DeleteCommericalReducer:DeleteCommericalReducer,
  CreateServiceReducer:CreateServiceReducer,
  CreateMarketPlaceReducer:CreateMarketPlaceReducer,
  UpdateMarketPlaceReducer:UpdateMarketPlaceReducer,
  DeleteMarketPlaceReducer:DeleteMarketPlaceReducer,
  SearchMarketPlaceReducer:SearchMarketPlaceReducer,
  SearchServiceReducer:SearchServiceReducer,
  ViewAllEmpStatusReducer:ViewAllEmpStatusReducer,
  GetArchiveUsersReducer:GetArchiveUsersReducer,
  SearchArchiveUsersReducer:SearchArchiveUsersReducer,
});

export default rootReducer;
