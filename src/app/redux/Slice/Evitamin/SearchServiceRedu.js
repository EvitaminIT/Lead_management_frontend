import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";




export const resetSearchService = createAction('SearchService_Reducer/resetSearchService');

export const Search_service_API = createAsyncThunk('SearchService_Reducer/Search_service_API', async({accessToken,service_ID}) => {
    try {
      const response = await API_Service.get(`${API.Evits.Serch_Service}/${service_ID}`,{
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
  const SearchService_Reducer = createSlice({
    name: 'SearchService_Reducer',
    initialState: {
      error: null,
      loading: 'idle',
      data:null,
    },
    reducers: {
      resetSearchService: (state) => {
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
        .addCase(Search_service_API.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(Search_service_API.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
        })
        .addCase(Search_service_API.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
 

  export default SearchService_Reducer.reducer;