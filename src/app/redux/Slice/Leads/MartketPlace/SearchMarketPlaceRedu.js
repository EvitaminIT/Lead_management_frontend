import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";





export const resetState_SearchMarketpalce = createAction('SearchMarketPlaceReducer/resetState');

export const SearchMarketPlaceAPI = createAsyncThunk('SearchMarketPlaceReducer/SearchMarketPlaceAPI', async({accessToken,data}) => {
    try {
      const response = await API_Service.get(`${API.Leads.MarketPlace.SearchMarketPlace}/${data}`,{
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }
      })
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  });
  
  

  // Create a slice to manage the state
  const SearchMarketPlaceReducer = createSlice({
    name: 'SearchMarketPlaceReducer',
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
        .addCase(SearchMarketPlaceAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(SearchMarketPlaceAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
         
        })
        .addCase(SearchMarketPlaceAPI.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
 

  export default SearchMarketPlaceReducer.reducer;