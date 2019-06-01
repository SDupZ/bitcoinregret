import { fetchCurrentPrice as fetchCurrentBinance } from './binance';

export const fetchPrice = date => {
  // YYYY-MM-DD
  const newDate = date.format('YYYY-MM-DD');
  const PRICE_URL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${newDate}&end=${newDate}`;
  return fetch(PRICE_URL).then(res => res.json());
};

export const fetchCurrentPrice = async () => {
  await fetchCurrentBinance();
  const PRICE_URL = `https://api.coindesk.com/v1/bpi/currentprice.json`;
  const response = await fetch(PRICE_URL);
  return response.json();
};
