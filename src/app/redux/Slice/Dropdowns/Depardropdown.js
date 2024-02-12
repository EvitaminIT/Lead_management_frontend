import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { Dropdown } from "react-day-picker";



export const resetState_viewll_led_BL = createAction('GetTableDropRedu/resetState');

export const getDepartment_Droupdown_API = createAsyncThunk('GetTableDropRedu/getDepartment_Droupdown_API', async({accessToken}) => {
    try {
      const response = await API_Service.get(`${API.Dropdown.Department}`,{
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
        .addCase(getDepartment_Droupdown_API.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(getDepartment_Droupdown_API.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data;
        })
        .addCase(getDepartment_Droupdown_API.rejected, (state, action) => {
          state.error = 'rejected';
        })

    },
  });
  
  export default GetTableDropRedu.reducer;