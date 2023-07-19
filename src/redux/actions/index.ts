import { Dispatch } from 'redux';
import { ExpensesType, WalletFormType } from '../../type';

export const SAVE_USER = 'SAVE_USER';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const API_URL = 'https://economia.awesomeapi.com.br/json/all';
export const CREATE_EXPENSE = 'CREATE_EXPENSE';

export const actionCreator = (payload: string) => ({
  type: SAVE_USER,
  payload,
});

export const requestCurrencies = (payload: string[]) => ({
  type: REQUEST_CURRENCIES,
  payload,
});

export const createExpense = (payload: WalletFormType) => ({
  type: CREATE_EXPENSE,
  payload,
});

export const fetchCurrencies = () => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(API_URL);
    const data = await response.json();
    const currenciesArray = Object.keys(data)
      .filter((currency) => currency !== 'USDT');
    dispatch(requestCurrencies(currenciesArray));
  };
};
