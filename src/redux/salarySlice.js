// src/redux/salarySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basicSalary: 0,
    earnings: [],
    deductions: [],
    // Other state variables if needed
};

const salarySlice = createSlice({
    name: 'salary',
    initialState,
    reducers: {
        setBasicSalary: (state, action) => {
            state.basicSalary = action.payload;
        },
        addEarning: (state, action) => {
            state.earnings.push(action.payload);
        },
        addDeduction: (state, action) => {
            state.deductions.push(action.payload);
        },
        // Add more reducers as needed
    },
});

export const { setBasicSalary, addEarning, addDeduction } = salarySlice.actions;
export default salarySlice.reducer;
