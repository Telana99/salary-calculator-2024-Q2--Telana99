
import React from 'react';
import { useSelector } from 'react-redux';

const SalarySummary = () => {
    const { basicSalary, earnings, deductions } = useSelector((state) => state.salary);

    // Calculate Net Salary and other details

    return (
        <div>
            <h2>Your Salary</h2>
            {/* Display the calculated salary details */}
        </div>
    );
};

export default SalarySummary;
