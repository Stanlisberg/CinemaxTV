import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MovieInter {
  homeData: any
  loading: boolean
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

export const fetchDiscover = createAsyncThunk(
  "home/fetchDiscover",
  async () => {
    try {
      const allMovies = [];
      const totalPages = 20;

      // Fetch data from each page and concatenate the results into 'allMovies'
      for (let page = 1; page <= totalPages; page++) {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?page=${page}`,
          options
        );
        const data = await response.json();
        const { results } = data;

        allMovies.push(...results);
      }

      // Slice 'allMovies' to get the first 100 movies
      const movies = allMovies.slice(0, 400);
      // console.log(movies);
      return movies;

    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
    }
  }
);

const initialState: MovieInter = {
  homeData: [],
  loading: false
  // error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiscover.pending, (state) => { 
        state.loading = true
      })
      .addCase(fetchDiscover.fulfilled, (state, action) => {
        state.homeData = action.payload;
        state.loading = false
      });
    // .addCase(fetchDiscover.rejected, (state, action) => {
    //   state.status = 'failed'
    //   state.error = action.payload;
    // })
  },
});

export default homeSlice.reducer;
