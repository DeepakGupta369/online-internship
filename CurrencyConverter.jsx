import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencySelect from './CurrencySelect';
import AmountInput from './AmountInput';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [conversionResult, setConversionResult] = useState(null);

  const API_KEY = 'your-api-key'; // Replace with your API key from a service like exchangerate-api.com

  useEffect(() => {
    // Fetch the list of currencies from an API
    axios.get(`https://open.er-api.com/v6/latest/${baseCurrency}`)
      .then(response => {
        setCurrencies(Object.keys(response.data.rates));
      })
      .catch(error => console.error(error));
  }, [baseCurrency]);

  useEffect(() => {
    if (baseCurrency && targetCurrency) {
      // Fetch the conversion rate
      axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
        .then(response => {
          const rate = response.data.rates[targetCurrency];
          setConversionResult(rate * amount);
        })
        .catch(error => console.error(error));
    }
  }, [baseCurrency, targetCurrency, amount]);

  return (
    <div>
      <CurrencySelect
        label="Base Currency"
        value={baseCurrency}
        onChange={setBaseCurrency}
        currencies={currencies}
      />
      <CurrencySelect
        label="Target Currency"
        value={targetCurrency}
        onChange={setTargetCurrency}
        currencies={currencies}
      />
      <AmountInput value={amount} onChange={setAmount} />
      <div>
        {conversionResult !== null && (
          <p>{amount} {baseCurrency} = {conversionResult.toFixed(2)} {targetCurrency}</p>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
