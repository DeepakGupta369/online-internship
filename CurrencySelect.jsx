import React from 'react';

const CurrencySelect = ({ label, value, onChange, currencies }) => (
  <div>
    <label>{label}</label>
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {currencies.map(currency => (
        <option key={currency} value={currency}>{currency}</option>
      ))}
    </select>
  </div>
);

export default CurrencySelect;
