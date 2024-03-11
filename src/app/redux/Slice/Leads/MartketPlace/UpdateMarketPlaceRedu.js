import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";





export const resetStateUpdateMarketpalce = createAction('UpdateMarketPlaceReducer/resetStateUpdateMarketpalce');

export const UpdateMarketPlaceAPI = createAsyncThunk('UpdateMarketPlaceReducer/UpdateMarketPlaceAPI', async({accessToken,MarketID,data}) => {
    const id = toast.loading("Please wait...")
    try {
      const response = await API_Service.put(`${API.Leads.MarketPlace.UpdateMarketPlace}/${MarketID}`,data,{
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }
      })
      toast.update(id, { render: response.data.message, type: "success", isLoading: false, autoClose:5000,hideProgressBar: true, });
      return response.data;
    } catch (error) {
      toast.update(id, { render: error.response.data.message, type: "error", isLoading: false, autoClose:5000,hideProgressBar: true, });
      throw error.response.data;
    }
  });
  
  

  // Create a slice to manage the state
  const UpdateMarketPlaceReducer = createSlice({
    name: 'UpdateMarketPlaceReducer',
    initialState: {
      error: null,
      loading: 'idle',
      data:null,
    },
    reducers: {
      resetStateUpdateMarketpalce: (state) => {
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
        .addCase(UpdateMarketPlaceAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(UpdateMarketPlaceAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
         
        })
        .addCase(UpdateMarketPlaceAPI.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
 

  export default UpdateMarketPlaceReducer.reducer;