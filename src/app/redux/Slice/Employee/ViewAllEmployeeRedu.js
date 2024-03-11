import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";




export const resetState = createAction('ViewAllEmpReducer/resetState');

export const ViewAllEmpAPI = createAsyncThunk('ViewAllEmpReducer/ViewAllEmpAPI', async({accessToken,page}) => {
    try {
      const response = await API_Service.get(`${API.Account.view_allUser}/${page}`,{
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
  const ViewAllEmpReducer = createSlice({
    name: 'ViewAllEmpReducer',
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
        .addCase(ViewAllEmpAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(ViewAllEmpAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
        })
        .addCase(ViewAllEmpAPI.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
 

  export default ViewAllEmpReducer.reducer;