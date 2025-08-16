import { createSlice } from "@reduxjs/toolkit";

const variableSlice = createSlice({
    name: 'variable',
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
})

export const { toggleMenu } = variableSlice.actions;
export default variableSlice.reducer;