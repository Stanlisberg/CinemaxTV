import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MovieInfoInter {
  info: any
}

// Async thunk to fetch customers from the API
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "process.env.REACT_APP_CINEMAX_API_KEY",
  },
};

export const fetchDetail = createAsyncThunk(
  "movieInfo/fetchDetail",
  async (url:string) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        
        return data;

    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
    }
  }
);

const initialState: MovieInfoInter = {
  info: ''
};

const movieDetailSlice = createSlice({
  name: "movieInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.info = action.payload;
      });
  },
});

export default movieDetailSlice.reducer;
