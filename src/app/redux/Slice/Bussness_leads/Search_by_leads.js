import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "@/Apis/Base_API";
import { API } from "@/Apis/API";
import { headers } from "../../../../../next.config";


export const Search_by_leadResetState = createAction('Search_by_leadReducer/Search_by_leadResetState');

export const Search_by_lead_api = createAsyncThunk('Search_by_leadReducer/Search_by_lead_api', async({accessToken,Lead_id}) => {
    try {
      const response = await API_Service.get(`${API.Business_leads.lead_id_search}/${Lead_id}`,{
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }
      })
      console.log(response,"in Slice")
      return response.data
    } catch (error) {
      throw error.response.data;
    }
  });
  


  // Create a slice to manage the state
  const Search_by_leadReducer = createSlice({
    name: 'Search_by_leadReducer',
    initialState: {
      error: null,
      loading: 'idle',
      data:null,
    },
    reducers: {
        Search_by_leadResetState: (state) => {
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
        .addCase(Search_by_lead_api.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(Search_by_lead_api.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data=action.payload.data

        })
        .addCase(Search_by_lead_api.rejected, (state, action) => {
          state.loading = 'rejected';

        });
    },
  });
  
  export default Search_by_leadReducer.reducer;