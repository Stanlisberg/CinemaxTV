import { createSlice } from "@reduxjs/toolkit";


interface IconInter {
    value: boolean | null
}

const initialState: IconInter = {
    value: true
}

const changeIconSlice = createSlice({
    name: 'icon',
    initialState,
    reducers: {
        showMenu: (state) => {
            state.value = false
        },    
        removeMenu: (state) => {
            state.value = true
        }
    }
})


export const { showMenu, removeMenu } = changeIconSlice.actions
export default changeIconSlice.reducer