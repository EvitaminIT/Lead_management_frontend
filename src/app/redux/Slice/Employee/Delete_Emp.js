import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { toast } from "react-toastify";




export const resetState = createAction('Delete_Emp_Reducer/resetState');

export const Delete_Emp_API = createAsyncThunk('Delete_Emp_Reducer/Delete_Emp_API', async({accessToken,Emp_ID}) => {
    try {
      const response = await API_Service.delete(`${API.Employee.Delete_Emp}/${Emp_ID}`,{
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
  const Delete_Emp_Reducer = createSlice({
    name: 'Delete_Emp_Reducer',
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
        .addCase(Delete_Emp_API.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(Delete_Emp_API.fulfilled, (state, action) => {
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
        .addCase(Delete_Emp_API.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
 

  export default Delete_Emp_Reducer.reducer;