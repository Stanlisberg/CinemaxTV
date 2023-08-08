import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MovieInfoInter {
  info: any
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
