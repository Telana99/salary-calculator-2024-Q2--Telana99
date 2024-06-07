// src/redux/salarySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basicSalary: 0,
    earnings: [],
    deductions: [],
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
        updateEarning: (state, action) => {
            const { index, newEarning } = action.payload;
            state.earnings[index] = newEarning;
        },
        deleteEarning: (state, action) => {
            state.earnings.splice(action.payload, 1);
        },
        addDeduction: (state, action) => {
            state.deductions.push(action.payload);
        },
        deleteDeduction: (state, action) => {
            state.deductions.splice(action.payload, 1);
        },
    },
});

export const { setBasicSalary, addEarning, updateEarning, deleteEarning, addDeduction, deleteDeduction } = salarySlice.actions;
export default salarySlice.reducer;
