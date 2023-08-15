import { createSlice } from "@reduxjs/toolkit";


interface ToggleInter {
    value: boolean | null
}

const initialState: ToggleInter = {
    value: null
}

const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggleEnter: (state) => {
            state.value = true;
        },
        toggleLeave: (state) => {
            state.value = false;
        }
    }
})

export const {toggleEnter, toggleLeave} = toggleSlice.actions
export default toggleSlice.reducer