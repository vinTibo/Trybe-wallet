import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type UserInfo = {
  email: string;
  password: string;
};

export type StoreType = {
  user: {
    email: string;
  }
  wallet: {
    currencies: string[];
    expenses: ExpensesType[];
  }
};

export type ExpensesType = {
  id: number;
  value: string;
  currency: string;
  method: string;
  tag: string;
  description: string;
  exchangeRate: ExchangeRateType;
};

export type ExchangeRateType = {
  currency: {
    code: string;
    name: string;
    ask: string;
  };
};

export type Dispatch = ThunkDispatch<StoreType, null, AnyAction>;
