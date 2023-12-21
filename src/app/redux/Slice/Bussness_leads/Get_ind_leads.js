import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";



export const resetState_viewll_led_BL = createAction('GetInd_leadsReducer/resetState');

export const getInd_Leads_api = createAsyncThunk('GetInd_leadsReducer/AuthpostApiData', async({accessToken,table,lead_id}) => {
    // console.log(table,lead_id,"in slice")
    try {
      const response = await API_Service.get(`${API.Business_leads.get_lead}/${table}/${lead_id}`,{
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
  const GetInd_leadsReducer = createSlice({
    name: 'view_all_leadsReducer',
    initialState: {
      error_getLedIn: null,
      loading: 'idle',
      Ind_led_data:null,
    },
    reducers: {
        resetState_viewll_led_BL: (state) => {
        // Reset the state to its initial values
        return {
          ...state,
          error_getLedIn: null,
          BL_view_loading: 'idle',
          Ind_led_data:null,
        };
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getInd_Leads_api.pending, (state) => {
          state.BL_view_loading = 'pending';
        })
        .addCase(getInd_Leads_api.fulfilled, (state, action) => {
          state.BL_view_loading = 'fulfilled';
          state.Ind_led_data=action.payload.data.data_type
          console.log(action.payload.data,"testt")
        })
        .addCase(getInd_Leads_api.rejected, (state, action) => {
          state.BL_view_loading = 'rejected';
        });
    },
  });
  
  export default GetInd_leadsReducer.reducer;