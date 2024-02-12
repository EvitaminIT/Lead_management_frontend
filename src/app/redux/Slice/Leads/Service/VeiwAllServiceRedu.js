import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";




export const resetState = createAction('ViewAllServiceReducer/resetState');

export const ViewAllServiceAPI = createAsyncThunk('ViewAllServiceReducer/ViewAllServiceAPI', async({accessToken,page}) => {
    try {
      const response = await API_Service.get(`${API.Leads.Service.viewAllService}/${page}`,{
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
  const ViewAllServiceReducer = createSlice({
    name: 'ViewAllServiceReducer',
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
        .addCase(ViewAllServiceAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(ViewAllServiceAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
        })
        .addCase(ViewAllServiceAPI.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
 

  export default ViewAllServiceReducer.reducer;