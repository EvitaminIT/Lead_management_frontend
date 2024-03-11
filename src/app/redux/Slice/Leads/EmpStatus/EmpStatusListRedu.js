import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";




export const resetState = createAction('ViewAllEmpStatusReducer/resetState');

export const ViewAllEmpStatusAPI = createAsyncThunk('ViewAllEmpStatusReducer/ViewAllEmpStatusAPI', async({accessToken}) => {
    try {
      const response = await API_Service.get(`${API.Leads.Status.EmpStatusList}`,{
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
  const ViewAllEmpStatusReducer = createSlice({
    name: 'ViewAllEmpStatusReducer',
    initialState: {
      error: null,
      loading: 'idle',
      data:null,
    },
    reducers: {
      resetState: (state) => {
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
        .addCase(ViewAllEmpStatusAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(ViewAllEmpStatusAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
        })
        .addCase(ViewAllEmpStatusAPI.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
 

  export default ViewAllEmpStatusReducer.reducer;