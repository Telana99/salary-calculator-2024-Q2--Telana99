import BasicSalary from "./BasicSalary";
import Earnings from "./Earnings";
import Deductions from "./Deductions";
import SalaryDetails from "./SalarySummary";
import { useState } from "react";
import resetIcon from "../assets/reset.png"

const App = () => {
  const [basicSalary, setBasicSalary] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalEarningsEPFTrue, setTotalEarningsEPFTrue] = useState(0);
  const [totalEarningsEPFFalse, setTotalEarningsEPFFalse] = useState(0);
  const [totalDeduction, setTotalDeduction] = useState(0);

  return (
    <div className="container">
      <div className="calculator">
        <div className="header-content">
          <h4>Calculate Your Salary</h4>
          <a
            href="#"
            className="reset-link"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
           
            
            <img src={resetIcon} alt="Reset Icon" style={{ width: '50px', height: '50px' }}  />

          </a>
        </div>
        <BasicSalary
          basicSalary={basicSalary}
          setBasicSalary={setBasicSalary}
        />
        <Earnings
          setTotalEarnings={setTotalEarnings}
          setTotalEarningsEPFTrue={setTotalEarningsEPFTrue}
          setTotalEarningsEPFFalse={setTotalEarningsEPFFalse}
        />
        <Deductions onTotalDeductionChange={setTotalDeduction} />{" "}
       
      </div>
      <SalaryDetails
        basicSalary={basicSalary}
        total={totalEarnings}
        totalDeduction={totalDeduction}
        totalEarningsEPFTrue={totalEarningsEPFTrue}
        totalEarningsEPFFalse={totalEarningsEPFFalse}
      />
    </div>
  );
};

export default App;
