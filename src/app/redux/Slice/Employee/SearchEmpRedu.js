import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { headers } from "../../../../../next.config";


export const Search_UserResetState = createAction('Search_EmpReducer/Search_UserResetState');

export const Search_user_api = createAsyncThunk('Search_EmpReducer/Search_user_api', async({accessToken,userId}) => {
    try {
      const response = await API_Service.get(`${API.Employee.Search_user}/${userId}`,{
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
  const Search_EmpReducer = createSlice({
    name: 'Search_EmpReducer',
    initialState: {
      error: null,
      loading: 'idle',
      data:null,
    },
    reducers: {
        Search_UserResetState: (state) => {
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
        .addCase(Search_user_api.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(Search_user_api.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data

        })
        .addCase(Search_user_api.rejected, (state, action) => {
          state.loading = 'rejected';

        });
    },
  });
  
  export default Search_EmpReducer.reducer;