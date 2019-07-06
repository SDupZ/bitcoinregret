import React from 'react';
import { fetchCurrentPrice, fetchPriceOnDate } from 'repository';
import usePageLoading from 'hooks/usePageLoading';

const isSameDay = (d1, d2) => {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
};

const isToday = date => isSameDay(new Date(), date);

const useExchangeRate = (investmentDate) => {
  // const [isError, setError] = React.useState(false);
  const [currentExchangeRate, setCurrentExchangeRate] = React.useState();
  const [historicalExchangeRate, setHistoricalExchangeRate] = React.useState();
  const { addPromise } = usePageLoading();

  const fetchAndSetCurrentPrice = async () => {
    const currentPrice = await addPromise(fetchCurrentPrice());;
    setCurrentExchangeRate(currentPrice);
    setHistoricalExchangeRate(currentPrice);
  }

  const fetchAndSetHistoricalExchangeRate = async (date) => {
    const historicalPrice = await addPromise(fetchPriceOnDate(date));;
    setHistoricalExchangeRate(historicalPrice);
  };

  // Fetch current exchange rate
  React.useEffect(() => {
    fetchAndSetCurrentPrice();
  }, []);
  
  // Find the exchange rate of USD to crypotocurrency on the given date.
  // E.g. 400: 400usd = 1 bitcoin
  React.useEffect(() => {
    if (!isToday(investmentDate)) {
      fetchAndSetHistoricalExchangeRate(investmentDate);
    }
  }, [investmentDate]);

  return {
    currentExchangeRate,
    historicalExchangeRate: isToday(investmentDate) ? currentExchangeRate : historicalExchangeRate,
  }
};

export default useExchangeRate;