/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
    videoLink: ""
}

const QuanLyModalSlice = createSlice({
    name: "QuanLyModalSlice",
    initialState,
    reducers: {
        openModal: (state, action) => {
            return { ...state, isOpen: true }
        },
        closeModal: (state, action) => {
            return { ...state, isOpen: false }
        },
        openModalWithVideoLink: (state, action) => {
            return { ...state, isOpen: true, videoLink: action.payload }
        }
    }
});

export const { openModal, closeModal, openModalWithVideoLink } = QuanLyModalSlice.actions

export default QuanLyModalSlice.reducer