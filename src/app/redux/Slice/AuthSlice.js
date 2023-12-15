import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";


export const resetState = createAction('myReducer/resetState');

export const AuthpostApiData = createAsyncThunk('myReducer/AuthpostApiData', async (data) => {
    try {
      const response = await API_Service.post(API.Auth.login,data)
      return response.data
    } catch (error) {
      throw error.response.data;
    }
  });
  


  // Create a slice to manage the state
  const myReducer = createSlice({
    name: 'myReducer',
    initialState: {
      data: null,
      error: null,
      loading: 'idle', // Redux Toolkit will manage loading state for you
      user_type: null,
      user_link:null,
      token:null,
    },
    reducers: {
      resetState: (state) => {
        // Reset the state to its initial values
        return {
          ...state,
          data: null,
          error: null,
          loading: 'idle',
          user_type: null,
          user_link:null,
          token:null,
        };
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(AuthpostApiData.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(AuthpostApiData.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.user_link=action.payload.data.user_links
          state.token=action.payload.data.token
          state.data = action.payload?.data?.user_details?.user || null;
        })
        .addCase(AuthpostApiData.rejected, (state, action) => {
          state.loading = 'rejected';
          state.error = action.error.message;
          console.log(action.error.message, 'action');
        });
    },
  });
  
  export default myReducer.reducer;