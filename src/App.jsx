// src/App.jsx
import React from 'react';
import SalaryCalculator from './components/SalaryCalculator';
import SalarySummary from './components/SalarySummary';
import Earnings from './components/Earnings';
import Deductions from './components/Deductions';
import { Container } from './styles';

const App = () => {
    return (
        <Container>
            <SalaryCalculator />
            <Earnings />
            <Deductions />
            <SalarySummary />
        </Container>
    );
};

export default App;
