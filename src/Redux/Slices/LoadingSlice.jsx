/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false
}

const LoadingSlice = createSlice({
    name: "LoadingSlice",
    initialState,
    reducers: {
        display_loading: (state, action) => {
            // console.log("display_loading");
            return { ...state, isLoading: true }
        },
        hide_loading: (state, action) => {
            return { ...state, isLoading: false }
        }

    }
});

export const { display_loading, hide_loading } = LoadingSlice.actions

export default LoadingSlice.reducer