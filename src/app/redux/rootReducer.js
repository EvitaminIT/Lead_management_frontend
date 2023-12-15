// src/reducers/index.js
import { combineReducers } from 'redux';
import myReducer from './Slice/AuthSlice'
import view_all_leadsReducer from './Slice/Bussness_leads/view_all_LedSlice'

const rootReducer = combineReducers({
  myReducer: myReducer,
  view_all_leadsReducer:view_all_leadsReducer,
});

export default rootReducer;
