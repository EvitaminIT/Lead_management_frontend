import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { headers } from "../../../../../next.config";


export const resetState_viewll_led_BL = createAction('view_all_leadsReducer/resetState');

export const viewall_Leads_api = createAsyncThunk('view_all_leadsReducer/AuthpostApiData', async({accessToken,pages}) => {
    try {
      const response = await API_Service.get(`${API.Business_leads.view_all_leads}/${pages}`,{
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
  const view_all_leadsReducer = createSlice({
    name: 'view_all_leadsReducer',
    initialState: {
      error: null,
      loading: 'idle',
      Bl_data:null,
    },
    reducers: {
        resetState_viewll_led_BL: (state) => {
        // Reset the state to its initial values
        return {
          ...state,
          error: null,
          loading: 'idle',
          Bl_data:null,
        };
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(viewall_Leads_api.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(viewall_Leads_api.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.Bl_data=action.payload.data
        //   state.Bl_count=action.payload.pagecount
        //   state.user_link=action.payload.data.user_links
        //   state.token=action.payload.data.token
        //   state.data = action.payload?.data?.user_details?.user || null;
        })
        .addCase(viewall_Leads_api.rejected, (state, action) => {
          state.loading = 'rejected';
        //   state.error = action.error.message;
        //   console.log(action.error.message, 'action');
        });
    },
  });
  
  export default view_all_leadsReducer.reducer;