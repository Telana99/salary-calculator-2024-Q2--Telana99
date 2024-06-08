
import React, { useState } from "react";
import PropTypes from "prop-types";

const PopupWindow = ({ onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [epfChecked, setEpfChecked] = useState(false);

  const handleAdd = () => {
    const newData = {
      title: name,
      amount: parseFloat(amount),
      epf: epfChecked
    };
    onAdd(newData);
    onClose();
  };

  return (
    <div className="popup-container">
      <h3>Add New Earning/Deduction</h3>
      <label>Earning/Deduction Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Amount:</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="checkbox"
        checked={epfChecked}
        onChange={(e) => setEpfChecked(e.target.checked)}
      />
      <label>EPF/ETF</label>
      <div className="buttons-container">
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

PopupWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default PopupWindow;
