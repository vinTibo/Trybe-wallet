import { API_URL } from './redux/actions';

export const fetchCurrenciesExchangeRates = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const exchangeRatesArray = Object.values(data)
    .filter((currency) => currency.codein !== 'BRLT')
    .map((currency) => ({
      [currency.code]: {
        code: currency.code,
        name: currency.name,
        ask: currency.ask,
      },
    }));
  return exchangeRatesArray;
};
