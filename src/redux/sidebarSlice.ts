import { createSlice } from '@reduxjs/toolkit';

interface SideInter {
    value: boolean
}

const initialState: SideInter = {
    value: false
}

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        sideEnter: (state) => {
            state.value = true
        },
        sideLeave: (state) => {
            state.value = false
        } 
    },
})

export const { sideEnter, sideLeave } = sidebarSlice.actions
export default sidebarSlice.reducer