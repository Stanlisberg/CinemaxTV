import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface TrendInter {
  trendingData: any;
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
export const fetchTrending = createAsyncThunk(
  "trending/fetchTrending",
  async () => {
    try {
      const allMovies = [];
      const totalPages = 20;

      for (let page = 1; page <= totalPages; page++) {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?page=${page}`,
          options
        );
        const data = await response.json();
        const { results } = data;

        allMovies.push(...results);
      }

      const movies = allMovies.slice(0, 400);
      return movies;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState: TrendInter = {
  trendingData: [],
};

const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      state.trendingData = action.payload;
    });
  },
});

export default trendingSlice.reducer;
