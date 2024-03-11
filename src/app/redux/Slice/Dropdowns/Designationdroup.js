import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { Dropdown } from "react-day-picker";



export const ResetDesigDroupdown = createAction('GetDesignationDroupRedu/resetState');

export const DesigDroupAPI = createAsyncThunk('GetDesignationDroupRedu/DesigDroupAPI', async({accessToken,Dep_id}) => {
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
        ResetDesigDroupdown: (state) => {
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
        .addCase(DesigDroupAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(DesigDroupAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data;
        })
        .addCase(DesigDroupAPI.rejected, (state, action) => {
          state.error = 'rejected';
        })

    },
  });
  
  export default GetDesignationDroupRedu.reducer;