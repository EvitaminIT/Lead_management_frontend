import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";



export const resetStateGetArchiveSearch = createAction('SearchArchiveUsersReducer/resetState');

export const SearchArchiveUsersAPI = createAsyncThunk('SearchArchiveUsersReducer/AuthpostApiData', async({accessToken,searchby,element}) => {
    // console.log(table,lead_id,"in slice")
    try {
      const response = await API_Service.get(`${API.Account.ArchiveUser.SearchArchiveUser}/${searchby}/${element}`,{
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
  const SearchArchiveUsersReducer = createSlice({
    name: 'view_all_leadsReducer',
    initialState: {
      error: null,
      loading: 'idle',
      data:null,
    },
    reducers: {
        resetStateGetArchiveSearch: (state) => {
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
        .addCase(SearchArchiveUsersAPI.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(SearchArchiveUsersAPI.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data
        })
        .addCase(SearchArchiveUsersAPI.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
  export default SearchArchiveUsersReducer.reducer;