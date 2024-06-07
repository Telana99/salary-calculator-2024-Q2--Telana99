
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBasicSalary, addEarning, addDeduction } from '../redux/salarySlice';

const SalaryCalculator = () => {
    const dispatch = useDispatch();
    const basicSalary = useSelector((state) => state.salary.basicSalary);

    const handleBasicSalaryChange = (e) => {
        dispatch(setBasicSalary(Number(e.target.value)));
    };

    // Implement similar functions for adding earnings and deductions

    return (
        <div>
            <h2>Calculate Your Salary</h2>
            <input 
                type="number" 
                value={basicSalary} 
                onChange={handleBasicSalaryChange} 
            />
            {/*have to add UI for Earnings and Deductions */}
        </div>
    );
};

export default SalaryCalculator;
