import { API_URL } from './redux/actions';

export const fetchCurrenciesExchangeRates = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};
