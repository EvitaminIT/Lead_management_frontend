import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";




export const resetState = createAction('View_all_Emp_Reducer/resetState');

export const View_all_Emp_API = createAsyncThunk('View_all_Emp_Reducer/View_all_Emp_API', async({accessToken,page}) => {
    try {
      const response = await API_Service.get(`${API.Employee.viewAllEmp}/${page}`,{
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
  const View_all_Emp_Reducer = createSlice({
    name: 'View_all_Emp_Reducer',
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
        .addCase(View_all_Emp_API.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(View_all_Emp_API.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
        })
        .addCase(View_all_Emp_API.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
 

  export default View_all_Emp_Reducer.reducer;