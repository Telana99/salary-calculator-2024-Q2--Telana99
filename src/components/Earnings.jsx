
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEarning, updateEarning, deleteEarning } from '../redux/salarySlice';

const Earnings = () => {
    const [earningName, setEarningName] = useState('');
    const [earningAmount, setEarningAmount] = useState(0);
    const [isEPFApplicable, setIsEPFApplicable] = useState(false);
    const earnings = useSelector((state) => state.salary.earnings);
    const dispatch = useDispatch();

    const handleAddEarning = () => {
        dispatch(addEarning({ name: earningName, amount: earningAmount, isEPFApplicable }));
        setEarningName('');
        setEarningAmount(0);
        setIsEPFApplicable(false);
    };

    const handleDeleteEarning = (index) => {
        dispatch(deleteEarning(index));
    };

    return (
        <div>
            <h3>Earnings</h3>
            <input
                type="text"
                placeholder="Earning Name"
                value={earningName}
                onChange={(e) => setEarningName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Earning Amount"
                value={earningAmount}
                onChange={(e) => setEarningAmount(Number(e.target.value))}
            />
            <label>
                <input
                    type="checkbox"
                    checked={isEPFApplicable}
                    onChange={(e) => setIsEPFApplicable(e.target.checked)}
                />
                EPF Applicable
            </label>
            <button onClick={handleAddEarning}>Add Earning</button>
            <ul>
                {earnings.map((earning, index) => (
                    <li key={index}>
                        {earning.name}: {earning.amount} {earning.isEPFApplicable ? "(EPF Applicable)" : ""}
                        <button onClick={() => handleDeleteEarning(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Earnings;
