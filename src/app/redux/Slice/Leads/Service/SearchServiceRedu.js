import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";





export const resetState_SearchService = createAction('SearchServiceReducer/resetState');

export const SearchServiceAPI = createAsyncThunk('SearchServiceReducer/SearchServiceAPI', async({accessToken,SearchType,data}) => {
    try {
      const response = await API_Service.get(`${API.Leads.Service.SearchService}/${SearchType}/${data}`,{
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
  const SearchServiceReducer = createSlice({
    name: 'SearchServiceReducer',
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
        .addCase(SearchServiceAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(SearchServiceAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
         
        })
        .addCase(SearchServiceAPI.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
 

  export default SearchServiceReducer.reducer;