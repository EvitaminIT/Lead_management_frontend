import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";



export const resetState_add_view_leads = createAction('add_and_view_new_service_Reducer/resetState_add_view_leads');

export const view_country_api = createAsyncThunk('add_and_view_new_service_Reducer/view_country_api', async(accessToken) => {
    try {
      const response = await API_Service.get(API.Business_leads.add_and_view_new_service,{
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }
      })
      return response.data
    } catch (error) {
      throw error.response.data;
    }
  });
  

  export const view_Marketpalce_api = createAsyncThunk('add_and_view_new_service_Reducer/view_Marketpalce_api', async({accessToken,country}) => {
    try {
      const response = await API_Service.get(`${API.Business_leads.add_and_view_new_service}/${country}`,{
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }
      })
      return response.data
    } catch (error) {
      throw error.response.data;
    }
  });


  export const view_Service_api = createAsyncThunk('add_and_view_new_service_Reducer/view_Service_api', async({accessToken,country,marketplace}) => {
    try {
      const response = await API_Service.get(`${API.Business_leads.add_and_view_new_service}/${country}/${marketplace}`,{
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }
      })
      return response.data
    } catch (error) {
      throw error.response.data;
    }
  });


  // Create a slice to manage the state
  const add_and_view_new_service_Reducer = createSlice({
    name: 'add_and_view_new_service_Reducer',
    initialState: {
      error_country: null,
      loading_country: 'idle',
      data_country:null,
      error_market:null,
      loading_market:'idle',
      data_market:null,      
      error_Service:null,
      loading_Service:'idle',
      data_Service:null,   
    },
    reducers: {
      resetState_add_view_leads: (state) => {
        // Reset the state to its initial values
        return {
          ...state,
          error_country: null,
          loading_country: 'idle',
          error_market:null,
          loading_market:'idle',
          data_market:null,    
          error_Service:null,
          loading_Service:'idle',
          data_Service:null,   
        };
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(view_country_api.pending, (state) => {
          state.loading_country = 'pending';
        })
        .addCase(view_country_api.fulfilled, (state, action) => {
          state.loading_country = 'fulfilled';
          state.data_country=action.payload.data
    
        })
        .addCase(view_country_api.rejected, (state, action) => {
          state.loading_market = 'rejected';
          state.error_market=action.payload.data
        })
        .addCase(view_Marketpalce_api.pending, (state,action) => {
            state.loading_market = 'pending';
        })
        .addCase(view_Marketpalce_api.fulfilled,(state,action)=>{
         state.loading_market = 'fulfilled';
         state.data_market=action.payload.data
        })
        .addCase(view_Service_api.rejected,(state,action)=>{
           state.loading_Service='rejected';
           state.error_Service=action.payload.data
        })
        .addCase(view_Service_api.pending,(state,action)=>{
           state.loading_Service="pending";
        })
        .addCase(view_Service_api.fulfilled,(state,action)=>{
           state.loading_Service="fulfilled";
           state.data_Service=action.payload.data;
        })
    },
  });
  
  export default add_and_view_new_service_Reducer.reducer;