import { createSlice } from "@reduxjs/toolkit";


interface DarkInter {
    value: boolean
}

const initialState: DarkInter = {
    value: false
}

const darkModeSlice = createSlice ({
    name: 'CgDarkMode',
    initialState, 
    reducers: {
        onDark : (state) => {
            state.value = true;
        },
        offDark : (state) => {
            state.value = false;;
        }

    }
})

export const { onDark, offDark } = darkModeSlice.actions
export default darkModeSlice.reducer