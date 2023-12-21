import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";



export const resetState_del = createAction('Delete_lead_for_approvelRedu/resetState_del');

export const Delete_lead_for_app_api = createAsyncThunk('Delete_lead_for_approvelRedu/Dele_lead_for_app', async ({ accessToken, lead_id }) => {
    try {
      const response = await API_Service.post(
        `${API.Business_leads.delete_for_app}/${lead_id}`,
        // Pass headers as the third argument, not within the payload object
        null,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  });




  // Create a slice to manage the state
  const Delete_lead_for_approvelRedu = createSlice({
    name: 'Delete_lead_for_approvelRedu',
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
        .addCase(Delete_lead_for_app_api.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(Delete_lead_for_app_api.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data.data_type
          toast.success('Deleted waiting for approval', {
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
        .addCase(Delete_lead_for_app_api.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
  export default Delete_lead_for_approvelRedu.reducer;