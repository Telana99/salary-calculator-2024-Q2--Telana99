import { useState } from "react";
import PropTypes from "prop-types";
import clearIcon from "../assets/clear.png";
import addIcon from "../assets/add.png";

const Deductions = ({ deductions, setDeductions, onTotalDeductionChange, handleOpenDeductionsPopup }) => {

  const removeSection = (index) => {
    const updatedSections = [...deductions];
    updatedSections.splice(index, 1);
    setDeductions(updatedSections);
  };

  const handleInputChange = (index, field, value) => {
    const updatedSections = [...deductions];
    updatedSections[index][field] = value;
    setDeductions(updatedSections);
  };

  const totalDeduction = deductions.reduce(
    (total, section) => total + parseFloat(section.amount || 0),
    0
  );
  onTotalDeductionChange(totalDeduction);

  return (
    <div className="section">
      <h3>Deductions</h3>
      <p>Salary Advances, Loan Deductions, and all</p>
      {deductions.map((section, index) => (
        <div key={index} className="deduction-item">
          <input
            className="input-medium"
            type="text"
            placeholder="Deduction Details (Title)"
            value={section.title}
            onChange={(e) => handleInputChange(index, "title", e.target.value)}
          />
          <input
            className="input-small"
            type="text"
            placeholder="Amount"
            value={section.amount}
            onChange={(e) => handleInputChange(index, "amount", e.target.value)}
          />
          <div
            className="remove-icon-container"
            onClick={() => removeSection(index)}
          >
            <img src={clearIcon} className="remove-icon" alt="Remove" />
          </div>
        </div>
      ))}

      <a
        href="#"
        className="add-link"
        onClick={(e) => {
          e.preventDefault();
          handleOpenDeductionsPopup();
        }}
      >
        <img src={addIcon} /> Add New Deduction
      </a>
    </div>
  );
};

Deductions.propTypes = {
  deductions: PropTypes.array.isRequired,
  setDeductions: PropTypes.func.isRequired,
  onTotalDeductionChange: PropTypes.func.isRequired,
  handleOpenDeductionsPopup: PropTypes.func.isRequired,
};

export default Deductions;
