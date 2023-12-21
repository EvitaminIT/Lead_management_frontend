import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";



export const resetState_viewll_led_BL = createAction('GetTableDropRedu/resetState');

export const Get_table_drop_api = createAsyncThunk('GetTableDropRedu/get_table_drop_api', async({accessToken,table}) => {
    try {
      const response = await API_Service.get(`${API.Dropdown.table_drop}/${table}`,{
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
  const GetTableDropRedu = createSlice({
    name: 'view_all_leadsReducer',
    initialState: {
      error: null,
      loading: 'idle',
      data:null,
    },
    reducers: {
        resetState_viewll_led_BL: (state) => {
        // Reset the state to its initial values
        return {
          ...state,
          error: null,
          loading: 'idle',
          data:null,
        };
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(Get_table_drop_api.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(Get_table_drop_api.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data;
        })
        .addCase(Get_table_drop_api.rejected, (state, action) => {
          state.BL_view_loading = 'rejected';
        });
    },
  });
  
  export default GetTableDropRedu.reducer;