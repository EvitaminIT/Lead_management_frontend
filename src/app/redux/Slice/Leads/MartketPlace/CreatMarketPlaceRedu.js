import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";





export const resetState_CreateMarketpalce = createAction('CreateMarketPlaceReducer/resetState');

export const CreateMarketPlaceAPI = createAsyncThunk('CreateMarketPlaceReducer/CreateMarketPlaceAPI', async({accessToken,data}) => {
    const id = toast.loading("Please wait...")
    try {
      const response = await API_Service.post(`${API.Leads.MarketPlace.CreateMarketPlace}`,data,{
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }
      })
      toast.update(id, { render: response.data.message, type: "success", isLoading: false, autoClose:5000 });
      return response.data;
    } catch (error) {
      toast.update(id, { render: error.response.data.message, type: "error", isLoading: false, autoClose:5000 });
      throw error.response.data;
    }
  });
  
  

  // Create a slice to manage the state
  const CreateMarketPlaceReducer = createSlice({
    name: 'CreateMarketPlaceReducer',
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
        .addCase(CreateMarketPlaceAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(CreateMarketPlaceAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
         
        })
        .addCase(CreateMarketPlaceAPI.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
 

  export default CreateMarketPlaceReducer.reducer;