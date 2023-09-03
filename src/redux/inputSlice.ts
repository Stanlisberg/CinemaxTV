import { createSlice } from "@reduxjs/toolkit";


const inputSlice = createSlice({
    name: 'input',
    initialState: { inputData: '' },
    reducers: {
      setInputData: (state, action) => {
        state.inputData = action.payload;
      },
    },
  });
  
  export const { setInputData } = inputSlice.actions;
  
  export default inputSlice.reducer;