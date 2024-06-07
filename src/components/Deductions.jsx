
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDeduction, deleteDeduction } from '../redux/salarySlice';

const Deductions = () => {
    const [deductionName, setDeductionName] = useState('');
    const [deductionAmount, setDeductionAmount] = useState(0);
    const deductions = useSelector((state) => state.salary.deductions);
    const dispatch = useDispatch();

    const handleAddDeduction = () => {
        dispatch(addDeduction({ name: deductionName, amount: deductionAmount }));
        setDeductionName('');
        setDeductionAmount(0);
    };

    const handleDeleteDeduction = (index) => {
        dispatch(deleteDeduction(index));
    };

    return (
        <div>
            <h3>Deductions</h3>
            <input
                type="text"
                placeholder="Deduction Name"
                value={deductionName}
                onChange={(e) => setDeductionName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Deduction Amount"
                value={deductionAmount}
                onChange={(e) => setDeductionAmount(Number(e.target.value))}
            />
            <button onClick={handleAddDeduction}>Add Deduction</button>
            <ul>
                {deductions.map((deduction, index) => (
                    <li key={index}>
                        {deduction.name}: {deduction.amount}
                        <button onClick={() => handleDeleteDeduction(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Deductions;
