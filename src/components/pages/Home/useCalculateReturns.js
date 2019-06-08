import React from 'react';
import { fetchCurrentPrice, fetchPriceOnDate } from 'repository';

const isSameDay = (d1, d2) => {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}

const useCalculateReturns = (initialInvestmentValue, investmentDate) => {
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
    if (isSameDay(new Date(), investmentDate)) {
      setHistoricalExchangeRate(currentExchangeRate);
    } else {
      fetchAndSetHistoricalExchangeRate(investmentDate);
    }
  }, [investmentDate, currentExchangeRate]);


  // Check we have everything.
  if (!initialInvestmentValue || !currentExchangeRate || !historicalExchangeRate) {
    return {
      investmentWorthToday: undefined,
      amountCryptoCurrency: undefined,
      percentageDifference: undefined,
    }
  }

  // Calculate how much of the Cryptocurrecy I had on the given date.
  // E.g If I bought $100 bitcoin in 2010 I had 10 Bitcoin
  const amountCryptoCurrency = initialInvestmentValue * (1 / historicalExchangeRate);

  // Calculate how much that amount is worth today
  const investmentWorthToday = amountCryptoCurrency * currentExchangeRate;

  const percentageDifference =
    ((investmentWorthToday - initialInvestmentValue) /
      initialInvestmentValue) *
    100;

  return {
    investmentWorthToday,
    amountCryptoCurrency,
    percentageDifference
  };
};

export default useCalculateReturns;