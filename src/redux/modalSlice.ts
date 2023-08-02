import { createSlice } from '@reduxjs/toolkit';

interface ModalInter {
    value: boolean
}

const initialState: ModalInter = {
    value: false
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        modalShow: (state) => {
            state.value = true
        },
        modalHide: (state ) => {
            state.value = false
        }
    },
})

export const { modalShow, modalHide } = modalSlice.actions
export default modalSlice.reducer