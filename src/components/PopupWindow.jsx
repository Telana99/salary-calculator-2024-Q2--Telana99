import { useState } from "react";
import PropTypes from "prop-types";

const PopupWindow = ({ type, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [epf, setEpf] = useState(false);

  const handleSave = () => {
    const newItem = { title, amount: parseFloat(amount), epf };
    onSave(newItem);
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>{type === "earning" ? "Add New Earnings" : "Add New Deduction"}</h2>
        <div className="popup-section">
          <label>{type === "earning" ? "Earning Name" : "Deduction Name"}</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={type === "earning" ? "Earning Name" : "Deduction Name"}
          />
        </div>
        <div className="popup-section">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />
        </div>
        {type === "earning" && (
          <div className="popup-section">
            <label>
              <input
                type="checkbox"
                checked={epf}
                onChange={(e) => setEpf(e.target.checked)}
              />
              EPF/ETF
            </label>
          </div>
        )}
        <div className="popup-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSave}>Add</button>
        </div>
      </div>
    </div>
  );
};

PopupWindow.propTypes = {
  type: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default PopupWindow;
