import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";




export const resetState = createAction('AddUserReducer/resetState');

export const AddUserAPI = createAsyncThunk('AddUserReducer/AuthpostApiData', async({accessToken,data}) => {
    try {
      const response = await API_Service.post(API.Account.User_register,data,{
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
  const AddUserReducer = createSlice({
    name: 'AddUserReducer',
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
        .addCase(AddUserAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(AddUserAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
          toast.success(action.payload.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        })
        .addCase(AddUserAPI.rejected, (state, action) => {
          state.loading = 'rejected';
          toast.error(action.error.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        });
    },
  });
  
 

  export default AddUserReducer.reducer;