
export const calculateSalary = (basicSalary, earnings, deductions) => {
    const totalEarnings = basicSalary + earnings.reduce((acc, earning) => acc + earning.amount, 0);
    const totalEarningsForEPF = basicSalary + earnings.filter(earning => earning.isEPFApplicable).reduce((acc, earning) => acc + earning.amount, 0);
    const grossDeduction = deductions.reduce((acc, deduction) => acc + deduction.amount, 0);
    const grossEarnings = totalEarnings - grossDeduction;
    const grossSalaryForEPF = totalEarningsForEPF - grossDeduction;
    
    const employeeEPF = grossSalaryForEPF * 0.08;
    const employerEPF = grossSalaryForEPF * 0.12;
    const employerETF = grossSalaryForEPF * 0.03;

    // Assuming a tax percentage and constant value for APIT calculation (replace these values as per your requirements)
    const taxPercentage = 0.18;
    const taxConstant = 25500;
    const APIT = (grossEarnings * taxPercentage) - taxConstant;

    const netSalary = grossEarnings - employeeEPF - APIT;
    const costToCompany = grossEarnings + employerEPF + employerETF;

    return {
        totalEarnings,
        totalEarningsForEPF,
        grossDeduction,
        grossEarnings,
        grossSalaryForEPF,
        employeeEPF,
        employerEPF,
        employerETF,
        APIT,
        netSalary,
        costToCompany,
    };
};
