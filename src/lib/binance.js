const responseMapping = {
  openTime: 0,
  open: 1,
  high: 2,
  low: 3,
  close: 4,
  volume: 5,
  closeTime: 6,
  quoteAssetVolume: 7,
  numberOfTrades: 8
};

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.binance.com';

export const fetchCurrentPrice = async () => {
  const endpoint = '/api/v3/avgPrice';

  const params = [{ key: 'symbol', value: 'BTCUSDT' }];

  const urlParams = params.length
    ? `?${params.map(p => `${p.key}=${p.value}`).join('&')}`
    : '';

  const url = `${BASE_URL}${endpoint}${urlParams}`;
  const encodedUrl = encodeURI(url);

  const response = await fetch(encodedUrl);
  const jsonResponse = await response.json();
  return jsonResponse.price;
};

export const fetchPriceOnDate = async d => {
  const endpoint = '/api/v1/klines';

  const date = new Date(d);
  date.setHours(0, 0, 0, 0);

  const params = [
    { key: 'symbol', value: 'BTCUSDT' },
    { key: 'interval', value: '1d' },
    { key: 'startTime', value: date.valueOf() },
    { key: 'limit', value: 1 }
  ];

  const urlParams = params.length
    ? `?${params.map(p => `${p.key}=${p.value}`).join('&')}`
    : '';
  const url = `${BASE_URL}${endpoint}${urlParams}`;
  const encodedUrl = encodeURI(url);

  const response = await fetch(encodedUrl);
  const jsonResponse = await response.json();

  console.log(jsonResponse, jsonResponse[responseMapping.close]);
  return jsonResponse;
};

export const somethingElse = () => {};
