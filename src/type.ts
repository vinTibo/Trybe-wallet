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
    editor: boolean;
    idToEdit: number;
  }
};

export type WalletFormType = {
  value: string;
  currency: string;
  method: string;
  tag: string;
  description: string;
};

export type ExpensesType = {
  id: number;
  value: string;
  currency: string;
  method: string;
  tag: string;
  description: string;
  exchangeRates: ExchangeRateType;
};

export type Dispatch = ThunkDispatch<StoreType, null, AnyAction>;

export type ExchangeRateType = {
  [key: string]: {
    code: string;
    name: string;
    ask: string;
  };
};
