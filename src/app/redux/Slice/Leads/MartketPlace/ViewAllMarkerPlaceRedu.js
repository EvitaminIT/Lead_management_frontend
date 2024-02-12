import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";




export const resetState = createAction('ViewAllMarketReducer/resetState');

export const ViewAllMarketPlaceAPI = createAsyncThunk('ViewAllMarketReducer/ViewAllMarketPlaceAPI', async({accessToken}) => {
    try {
      const response = await API_Service.get(`${API.Leads.MarketPlace.viewAllMarketPlace}`,{
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
  const ViewAllMarketReducer = createSlice({
    name: 'ViewAllMarketReducer',
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
        .addCase(ViewAllMarketPlaceAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(ViewAllMarketPlaceAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
        })
        .addCase(ViewAllMarketPlaceAPI.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
 

  export default ViewAllMarketReducer.reducer;