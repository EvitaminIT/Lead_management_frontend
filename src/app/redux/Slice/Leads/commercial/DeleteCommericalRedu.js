import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";




export const resetState = createAction('DeleteCommericalReducer/resetState');

export const DeleteCommericalAPI = createAsyncThunk('DeleteCommericalReducer/DeleteCommericalAPI', async({accessToken,serviceID,commercialID}) => {
    try {
      const response = await API_Service.delete(`${API.Leads.commercial.DeleteCommercial}/${serviceID}/${commercialID}`,{
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
  const DeleteCommericalReducer = createSlice({
    name: 'DeleteCommericalReducer',
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
        .addCase(DeleteCommericalAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(DeleteCommericalAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
        })
        .addCase(DeleteCommericalAPI.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
 

  export default DeleteCommericalReducer.reducer;