import React from 'react';

const AmountInput = ({ value, onChange }) => (
  <div>
    <label>Amount</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default AmountInput;
