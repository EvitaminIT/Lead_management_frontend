import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";



export const resetState_upload_file_resent = createAction('upload_file_bl_Reducer/resetState');

export const Upload_File_BL_api = createAsyncThunk('upload_file_bl_Reducer/Upload_file_api', async({accessToken,fileup}) => {
    console.log(fileup,"test file")
    try {
      const response = await API_Service.post(API.Business_leads.upload_file_bl,fileup,{
        headers:{
            "Authorization":`Bearer ${accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response,"in slice")
      return response.data
    } catch (error) {
      throw error.response.data;
    }
  });
  


  // Create a slice to manage the state
  const upload_file_bl_Reducer = createSlice({
    name: 'upload_file_bl_Reducer',
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
        .addCase(Upload_File_BL_api.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(Upload_File_BL_api.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
          toast.success('Lead file Add Successfully', {
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
        .addCase(Upload_File_BL_api.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
  export default upload_file_bl_Reducer.reducer;