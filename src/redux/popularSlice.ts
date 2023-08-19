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
    "process.env.REACT_APP_KRYPTOFOLIO_URL",
  },
};
export const fetchPopular = createAsyncThunk('popular/fetchPopular', async () => {
 try {
    const allMovies = [];
    const totalPages = 20;
    
    for(let page= 1; page <= totalPages; page++) {
        const response = await fetch(`https://api.themoviedb.org/3/person/popular?page=${page}`, options)
        const data = await response.json()
        const { results } = data

        allMovies.push(...results)
    }

    const movies = allMovies.slice(0, 400)
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