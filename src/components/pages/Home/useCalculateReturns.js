import useExchangeRate from './useExchangeRate';

const convertNaNToUndefined = (obj) => {
  const newObj = {};
  Object
    .keys(obj)
    .forEach((k) => {
      newObj[k] = obj[k] === undefined || obj[k] === null || Number.isNaN(obj[k]) ? undefined : obj[k] ;
    });
  return newObj;
};

const useCalculateReturns = (initialInvestmentValue, investmentDate) => {
  const { currentExchangeRate, historicalExchangeRate } = useExchangeRate(investmentDate);

  // Calculate how much of the Cryptocurrecy I had on the given date.
  // E.g If I bought $100 bitcoin in 2010 I had 10 Bitcoin
  const amountCryptoCurrency = historicalExchangeRate ? initialInvestmentValue * (1 / historicalExchangeRate) : undefined;

  // Calculate how much that amount is worth today
  const investmentWorthToday = amountCryptoCurrency * currentExchangeRate;

  let percentageDifference;

  if (initialInvestmentValue === 0) {
    percentageDifference = 0;
  } else {
    percentageDifference = ((investmentWorthToday - initialInvestmentValue) / initialInvestmentValue) * 100;
  }

  const returnValue = {
    investmentWorthToday,
    amountCryptoCurrency,
    percentageDifference
  };

  return convertNaNToUndefined(returnValue);
};

export default useCalculateReturns;