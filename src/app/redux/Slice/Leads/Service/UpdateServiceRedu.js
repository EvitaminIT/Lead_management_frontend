import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";




export const resetState = createAction('UpdateServiceReducer/resetState');

export const UpdateServiceAPI = createAsyncThunk('UpdateServiceReducer/UpdateServiceAPI', async({accessToken,data}) => {
    try {
      const response = await API_Service.put(`${API.Leads.Service.updateService}`,data,{
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
  const UpdateServiceReducer = createSlice({
    name: 'UpdateServiceReducer',
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
        .addCase(UpdateServiceAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(UpdateServiceAPI.fulfilled, (state, action) => {
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
        .addCase(UpdateServiceAPI.rejected, (state, action) => {
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
  
 

  export default UpdateServiceReducer.reducer;