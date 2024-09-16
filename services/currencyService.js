const convertCurrency = (amount, currency) => {
  const rates = { EUR: 0.85, GBP: 0.75 };
  const conversionRate = rates[currency];
  return (amount * conversionRate).toFixed(2);
};

module.exports = { convertCurrency };
