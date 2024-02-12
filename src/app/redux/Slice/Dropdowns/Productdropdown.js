import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";



export const resetState_viewll_led_BL = createAction('GetProductDroupRedu/resetState');

export const GetProductDroupdownAPI = createAsyncThunk('GetProductDroupRedu/GetProductDroupdownAPI', async({accessToken,Degi_id}) => {
    try {
      const response = await API_Service.get(`${API.Dropdown.Product}/${Degi_id}`,{
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
  const GetProductDroupRedu = createSlice({
    name: 'GetProductDroupRedu',
    initialState: {
      error: null,
      loading: 'idle',
      data:null,
    },
    reducers: {
        resetState_viewll_led_BL: (state) => {
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
        .addCase(GetProductDroupdownAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(GetProductDroupdownAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data;
        })
        .addCase(GetProductDroupdownAPI.rejected, (state, action) => {
          state.error = 'rejected';
        })

    },
  });
  
  export default GetProductDroupRedu.reducer;