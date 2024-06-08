import BasicSalary from "./components/BasicSalary";
import Earnings from "./components/Earnings";
import Deductions from "./components/Deductions";
import SalaryDetails from "./components/SalarySummary";
import { useState } from "react";
import resetIcon from "./assets/reset.png";
import Popup from "./components/PopupWindow"; 

const App = () => {
  const [basicSalary, setBasicSalary] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalEarningsEPFTrue, setTotalEarningsEPFTrue] = useState(0);
  const [totalEarningsEPFFalse, setTotalEarningsEPFFalse] = useState(0);
  const [totalDeduction, setTotalDeduction] = useState(0);

  const [earnings, setEarnings] = useState([]);
  const [deductions, setDeductions] = useState([]);

  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(""); // "earning" or "deduction"

  const handleOpenEarningsPopup = () => {
    setPopupType("earning");
    setShowPopup(true);
  };

  const handleOpenDeductionsPopup = () => {
    setPopupType("deduction");
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupType("");
  };

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
              // Reset all states to their initial values
              setBasicSalary(0);
              setTotalEarnings(0);
              setTotalEarningsEPFTrue(0);
              setTotalEarningsEPFFalse(0);
              setTotalDeduction(0);
              setEarnings([]);
              setDeductions([]);
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
          earnings={earnings}
          setEarnings={setEarnings}
          handleOpenEarningsPopup={handleOpenEarningsPopup}
        />
        <Deductions
          deductions={deductions}
          setDeductions={setDeductions}
          onTotalDeductionChange={setTotalDeduction}
          handleOpenDeductionsPopup={handleOpenDeductionsPopup}
        />
      </div>
      <SalaryDetails
        basicSalary={basicSalary}
        totalEarnings={totalEarnings}
        totalEarningsEPFTrue={totalEarningsEPFTrue}
        totalEarningsEPFFalse={totalEarningsEPFFalse}
        totalDeduction={totalDeduction}
      />

      {showPopup && (
        <Popup
          type={popupType}
          onClose={handleClosePopup}
          onSave={(newItem) => {
            if (popupType === "earning") {
              setEarnings([...earnings, newItem]);
            } else if (popupType === "deduction") {
              setDeductions([...deductions, newItem]);
            }
            handleClosePopup();
          }}
        />
      )}
    </div>
  );
};

export default App;
