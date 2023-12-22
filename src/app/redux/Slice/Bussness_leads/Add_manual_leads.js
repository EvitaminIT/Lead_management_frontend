import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";




export const resetState = createAction('Add_manual_leadsReducer/resetState');

export const Add_manual_Leads_api = createAsyncThunk('Add_manual_leadsReducer/AuthpostApiData', async({accessToken,data}) => {
    try {
      const response = await API_Service.post(API.Business_leads.add_manual_leads,data,{
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }
      })
      console.log(response,"inslice")
      return response.data
    } catch (error) {
      console.log(error,"inslice")
      throw error.response.data;
    }
  });
  
  

  // Create a slice to manage the state
  const Add_manual_leadsReducer = createSlice({
    name: 'Add_manual_leadsReducer',
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
        .addCase(Add_manual_Leads_api.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(Add_manual_Leads_api.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
          toast.success('Lead Add Successfully', {
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
        .addCase(Add_manual_Leads_api.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
 

  export default Add_manual_leadsReducer.reducer;