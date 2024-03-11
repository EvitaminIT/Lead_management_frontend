import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { headers } from "../../../../../next.config";


export const SearchUserResetState = createAction('SearchEmpReducer/SearchUserResetState');

export const SearchUserAPI = createAsyncThunk('SearchEmpReducer/SearchUserAPI', async({accessToken,searchby,element}) => {
    try {
      const response = await API_Service.get(`${API.Employee.Search_user}/${searchby}/${element}`,{
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
  const SearchEmpReducer = createSlice({
    name: 'SearchEmpReducer',
    initialState: {
      error: null,
      loading: 'idle',
      data:null,
    },
    reducers: {
        SearchUserResetState: (state) => {
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
        .addCase(SearchUserAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(SearchUserAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data

        })
        .addCase(SearchUserAPI.rejected, (state, action) => {
          state.loading = 'rejected';

        });
    },
  });
  
  export default SearchEmpReducer.reducer;