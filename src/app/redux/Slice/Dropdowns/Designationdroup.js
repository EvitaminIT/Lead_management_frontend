import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { Dropdown } from "react-day-picker";



export const resetState_viewll_led_BL = createAction('GetDesignationDroupRedu/resetState');

export const DesigDroup_API = createAsyncThunk('GetDesignationDroupRedu/DesigDroup_API', async({accessToken,Dep_id}) => {
    try {
      const response = await API_Service.get(`${API.Dropdown.Designation}/${Dep_id}`,{
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
  const GetDesignationDroupRedu = createSlice({
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
        .addCase(DesigDroup_API.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(DesigDroup_API.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data;
        })
        .addCase(DesigDroup_API.rejected, (state, action) => {
          state.error = 'rejected';
        })

    },
  });
  
  export default GetDesignationDroupRedu.reducer;