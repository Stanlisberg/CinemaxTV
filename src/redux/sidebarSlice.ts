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
        handleEnter: (state) => {
            state.value = true
        }
    },
})

export const { handleEnter } = sidebarSlice.actions
export default sidebarSlice