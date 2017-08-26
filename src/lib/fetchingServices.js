export const fetchPrice = (date) => {
    // YYYY-MM-DD
    date = date.format('YYYY-MM-DD')
    const PRICE_URL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${date}&end=${date}`
    return fetch(PRICE_URL)
        .then(res => res.json())
}

export const fetchCurrentPrice = () => {
    const PRICE_URL = `https://api.coindesk.com/v1/bpi/currentprice.json`
    return fetch(PRICE_URL)
        .then(res => res.json())
}

