import React from 'react';
import { fetchCurrentPrice, fetchPriceOnDate } from 'repository';

const useExchangeRate = (investmentDate) => {
  const [currentExchangeRate, setCurrentExchangeRate] = React.useState();
  const [historicalExchangeRate, setHistoricalExchangeRate] = React.useState();

  const fetchAndSetCurrentPrice = async () => {
    const currentPrice = await fetchCurrentPrice();
    setCurrentExchangeRate(currentPrice);
    setHistoricalExchangeRate(currentPrice);
  }

  const fetchAndSetHistoricalExchangeRate = async (date) => {
    const historicalPrice = await fetchPriceOnDate(date);
    setHistoricalExchangeRate(historicalPrice);
  };

  // Fetch current exchange rate
  React.useEffect(() => {
    fetchAndSetCurrentPrice();
  }, []);
  
  // Find the exchange rate of USD to crypotocurrency on the given date.
  // E.g. 400: 400usd = 1 bitcoin
  React.useEffect(() => {
    fetchAndSetHistoricalExchangeRate(investmentDate);
  }, [investmentDate]);

  return {
    currentExchangeRate,
    historicalExchangeRate,
  }
};

export default useExchangeRate;