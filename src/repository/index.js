import { api } from 'config';

const fetchPriceOnDate = async (date) => {
  const PRICE_URL = `${api}/price?date=${date}`;
  const response = await fetch(PRICE_URL);
  const result = await response.json();

  return result;
};

const fetchCurrentPrice = async () => {
  const PRICE_URL = `${api}/currentprice`;
  const response = await fetch(PRICE_URL);
  const result = await response.json();

  return result;
};

export {
  fetchCurrentPrice,
  fetchPriceOnDate,
};