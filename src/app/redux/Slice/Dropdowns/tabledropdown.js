import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { Dropdown } from "react-day-picker";



export const resetState_viewll_led_BL = createAction('GetTableDropRedu/resetState');

export const get_regular_Dropdown_api = createAsyncThunk('GetTableDropRedu/get_regular_Dropdown_api', async({accessToken,Dropdown}) => {
    try {
      const response = await API_Service.get(`${API.Dropdown.table_drop}/${Dropdown}`,{
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }
      })
      return response.data
    } catch (error) {
      throw error.response.data;
    }
  });


  export const get_OneDependend_Dropdown_api = createAsyncThunk('GetTableDropRedu/get_OneDependend_Dropdown_api', async({accessToken,Dropdown,data1}) => {
    try {
      const response = await API_Service.get(`${API.Dropdown.table_drop}/${Dropdown}/${data1}`,{
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }
      })
      return response.data
    } catch (error) {
      throw error.response.data;
    }
  });



  export const get_TwoDependend_Dropdown_api = createAsyncThunk('GetTableDropRedu/get_TwoDependend_Dropdown_api', async({accessToken,Dropdown,data1,data2}) => {
    try {
      const response = await API_Service.get(`${API.Dropdown.table_drop}/${Dropdown}/${data1}/${data2}`,{
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
  const GetTableDropRedu = createSlice({
    name: 'view_all_leadsReducer',
    initialState: {
      reg_drop_error: null,
      reg_drop_loading: 'idle',
      reg_drop_data:null,

      dep_one_error: null,
      dep_one_loading: 'idle',
      dep_one_data:null,

      dep_two_error: null,
      dep_two_loading: 'idle',
      dep_two_data:null,
    },
    reducers: {
        resetState_viewll_led_BL: (state) => {
        // Reset the state to its initial values
        return {
          ...state,
          reg_drop_error: null,
          reg_drop_loading: 'idle',
          reg_drop_data:null,

          dep_one_error: null,
          dep_one_loading: 'idle',
          dep_one_data:null,

          dep_two_error: null,
          dep_two_loading: 'idle',
          dep_two_data:null,
        };
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(get_regular_Dropdown_api.pending, (state) => {
          state.reg_drop_loading = 'pending';
        })
        .addCase(get_regular_Dropdown_api.fulfilled, (state, action) => {
          state.reg_drop_loading = 'fulfilled';
          state.reg_drop_data=action.payload.data;
        })
        .addCase(get_regular_Dropdown_api.rejected, (state, action) => {
          state.reg_drop_error = 'rejected';
        })
           
        // dependent one builder
        .addCase(get_OneDependend_Dropdown_api.pending, (state) => {
          state.dep_one_loading = 'pending';
        })
        .addCase(get_OneDependend_Dropdown_api.fulfilled, (state, action) => {
          state.dep_one_loading = 'fulfilled';
          state.dep_one_data=action.payload.data;
        })
        .addCase(get_OneDependend_Dropdown_api.rejected, (state, action) => {
          state.dep_one_error = 'rejected';
        })

        // dependent two builder
        .addCase(get_TwoDependend_Dropdown_api.pending, (state) => {
          state.dep_two_loading = 'pending';
        })
        .addCase(get_TwoDependend_Dropdown_api.fulfilled, (state, action) => {
          state.dep_two_loading = 'fulfilled';
          state.dep_two_data=action.payload.data;
        })
        .addCase(get_TwoDependend_Dropdown_api.rejected, (state, action) => {
          state.dep_two_error = 'rejected';
        });

    },
  });
  
  export default GetTableDropRedu.reducer;