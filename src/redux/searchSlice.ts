import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface SearchInter {
    searchData : any;
    searchLoading : boolean | null;
}

// Async thunk to fetch searched movies from the API
const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_CINEMAX_API_KEY,
    },
  };

  export const fetchSearch = createAsyncThunk(
    "search/fetchSearch",
    async () => {
      try {
        const allSearch = [];
        const totalPages = 20;
  
        // Fetch data from each page and concatenate the results into 'allMovies'
        for (let page = 1; page <= totalPages; page++) {
          const storedData = localStorage.getItem('myData');
          console.log(storedData)

          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${storedData}&include_adult=false&language=en-US&page=${page}`,
            options
          );
          const data = await response.json()
          console.log(data)
          const { results } = data;
          allSearch.push(...results);
        }
  
        // Slice 'allMovies' to get the first 100 movies
        const movies = allSearch.slice(0, 400);
        // console.log(movies);
        return movies;
      } catch (error) {
        // console.error("Error fetching movies:", error);
        // throw error;
      }
    }
  );

  const initialState: SearchInter = {
    searchData: [],
    searchLoading: null,
  };
  
  const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSearch.pending, (state) => {
          state.searchLoading = true;
        })
        .addCase(fetchSearch.fulfilled, (state, action) => {
          state.searchData = action.payload;
          state.searchLoading = false;
        });
    },
  });
  
  export default searchSlice.reducer;
  