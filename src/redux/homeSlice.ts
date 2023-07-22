import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface MovieInter{
  homeData: []
  // status: 'idle' | 'loading' | 'succeeded' | 'failed';
  // error: any
}

// Async thunk to fetch customers from the API
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGQyNDQ2ZTg1ZmQ2Mzc3NGM5ZjNhODY2N2U1MmI3ZiIsInN1YiI6IjYxMDNhNWQ0NDI4NGVhMDA1ZDE5OTc2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FG38CkW-ijLIMRLiOIeoPLJeQV_0O2bSIK5vymhKKNE",
  },
};
export const fetchDiscover = createAsyncThunk('home/fetchDiscover', async () => {
  const response = await fetch('https://api.themoviedb.org/3/discover/movie', options)
  const data = await response.json()
  const { results } = data
  return results
 
});

const initialState: MovieInter= {
  homeData: [],
  // status: 'idle',
  // error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // .addCase(fetchDiscover.pending, (state) => {
    //   state.status = 'loading'
    // })
    .addCase(fetchDiscover.fulfilled, (state, action) => {
      state.homeData = action.payload
      // state.status = 'succeeded'
    })
    // .addCase(fetchDiscover.rejected, (state, action) => {
    //   state.status = 'failed'
    //   state.error = action.payload;
    // })
  },
  
});

export default homeSlice.reducer;
