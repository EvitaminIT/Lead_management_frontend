import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";



export const ResetGetArchiveUsers = createAction('GetArchiveUsersReducer/resetState');

export const GetArchiveUsersAPI = createAsyncThunk('GetArchiveUsersReducer/AuthpostApiData', async({accessToken,Page}) => {
    // console.log(table,lead_id,"in slice")
    try {
      const response = await API_Service.get(`${API.Account.ArchiveUser.GetArchiveUser}/${Page}`,{
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
  const GetArchiveUsersReducer = createSlice({
    name: 'view_all_leadsReducer',
    initialState: {
      error: null,
      loading: 'idle',
      data:null,
    },
    reducers: {
        ResetGetArchiveUsers: (state) => {
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
        .addCase(GetArchiveUsersAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(GetArchiveUsersAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
          console.log(action.payload,"ggg")
        })
        .addCase(GetArchiveUsersAPI.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
  export default GetArchiveUsersReducer.reducer;