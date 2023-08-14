import { createSlice } from "@reduxjs/toolkit";

interface MobileInter {
    value: boolean | null
}

const initialState: MobileInter = {
    value: null
}

const mobileSlice = createSlice({
    name: 'mobile',
    initialState,
    reducers: {
        mobileEnter: (state) => {
            state.value = true
        },
        mobileLeave: (state) => {
            state.value = false
        }

    } 
})

export const {mobileEnter, mobileLeave} = mobileSlice.actions
export default mobileSlice.reducer