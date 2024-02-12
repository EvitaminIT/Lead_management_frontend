import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";




export const resetState = createAction('ViewAllCommericalReducer/resetState');

export const ViewAllCommericalAPI = createAsyncThunk('ViewAllCommericalReducer/ViewAllCommericalAPI', async({accessToken,ServiceID}) => {
    try {
      const response = await API_Service.get(`${API.Leads.commercial.ViewAllCommercial}/${ServiceID}`,{
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
  const ViewAllCommericalReducer = createSlice({
    name: 'ViewAllCommericalReducer',
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
        .addCase(ViewAllCommericalAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(ViewAllCommericalAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
        })
        .addCase(ViewAllCommericalAPI.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
 

  export default ViewAllCommericalReducer.reducer;