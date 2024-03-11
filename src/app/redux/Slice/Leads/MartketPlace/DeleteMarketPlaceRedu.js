import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";


export const resetStateDeleteMarketpalce = createAction('DeleteMarketPlaceReducer/resetStateDeleteMarketpalce');

export const DeleteMarketPlaceAPI = createAsyncThunk('DeleteMarketPlaceReducer/DeleteMarketPlaceAPI', async({accessToken,MarketID}) => {
    try {
      const response = await API_Service.delete(`${API.Leads.MarketPlace.DeleteMarketPlace}/${MarketID}`,{
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
  const DeleteMarketPlaceReducer = createSlice({
    name: 'DeleteMarketPlaceReducer',
    initialState: {
      error: null,
      loading: 'idle',
      data:null,
    },
    reducers: {
      resetStateDeleteMarketpalce: (state) => {
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
        .addCase(DeleteMarketPlaceAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(DeleteMarketPlaceAPI.fulfilled, (state, action) => {
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
        .addCase(DeleteMarketPlaceAPI.rejected, (state, action) => {
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
  
 

  export default DeleteMarketPlaceReducer.reducer;