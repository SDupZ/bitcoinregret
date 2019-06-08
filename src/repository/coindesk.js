const formatDate = (date) => {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export const fetchCurrentPrice = async () => {
  const PRICE_URL = `https://cors-anywhere.herokuapp.com/https://api.coindesk.com/v1/bpi/currentprice.json`;
  const response = await fetch(PRICE_URL);
  const result = await response.json();

  return result.bpi.USD.rate_float;
};

export const fetchPriceOnDate = async date => {
  // YYYY-MM-DD
  const newDate = formatDate(date);
  
  const PRICE_URL = `https://cors-anywhere.herokuapp.com/https://api.coindesk.com/v1/bpi/historical/close.json?start=${newDate}&end=${newDate}`;
  const response = await fetch(PRICE_URL);
  const result = await response.json();
  
  return result.bpi[(Object.keys(result.bpi)[0])];
};


