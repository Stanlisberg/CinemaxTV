import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface TvInter{
  tvData: any
  tvLoading: boolean | null;
}

// Async thunk to fetch customers from the API
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_CINEMAX_API_KEY
  },
};
export const fetchTv = createAsyncThunk('tv/fetchTv', async () => {
 try {
    const allMovies = [];
    const totalPages = 20;
    
    // https://api.themoviedb.org/3/person/popular
    for(let page= 1; page <= totalPages; page++) {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?page=${page}`, options)
        const data = await response.json()
        const { results } = data

        allMovies.push(...results)
        // console.log(allMovies)
    }

    const movies = allMovies.slice(0, 400)
    return  movies;

} catch (error) {
    console.log(error)
}
 
});

const initialState: TvInter = {
  tvData: [],
  tvLoading: null
};

const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchTv.pending, (state) => {
      state.tvLoading = true
    })
    .addCase(fetchTv.fulfilled, (state, action) => {
      state.tvData = action.payload
      state.tvLoading = false
    })
  },
  
});

export default tvSlice.reducer;