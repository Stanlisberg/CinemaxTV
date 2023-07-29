import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface PopularInter{
  popularData: any
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
export const fetchPopular = createAsyncThunk('popular/fetchPopular', async () => {
 try {
    const allMovies = [];
    const totalPages = 5;
    
    for(let page= 1; page <= totalPages; page++) {
        const response = await fetch(`https://api.themoviedb.org/3/person/popular?page=${page}`, options)
        const data = await response.json()
        const { results } = data

        allMovies.push(...results)
    }

    const movies = allMovies.slice(0, 100)
    return  movies;

} catch (error) {
    console.log(error)
}
 
});

const initialState: PopularInter = {
  popularData: [],
};

const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchPopular.fulfilled, (state, action) => {
      state.popularData = action.payload
    })
  },
  
});

export default popularSlice.reducer;