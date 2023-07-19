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
  USD: {
    code: string;
    name: string;
    ask: string;
  };
  CAD: {
    code: string;
    name: string;
    ask: string;
  };
  EUR: {
    code: string;
    name: string;
    ask: string;
  };
  GBP: {
    code: string;
    name: string;
    ask: string;
  };
  ARS: {
    code: string;
    name: string;
    ask: string;
  };
  BTC: {
    code: string;
    name: string;
    ask: string;
  };
  LTC: {
    code: string;
    name: string;
    ask: string;
  };
  JPY: {
    code: string;
    name: string;
    ask: string;
  };
  CHF: {
    code: string;
    name: string;
    ask: string;
  };
  AUD: {
    code: string;
    name: string;
    ask: string;
  };
  CNY: {
    code: string;
    name: string;
    ask: string;
  };
  ILS: {
    code: string;
    name: string;
    ask: string;
  };
  ETH: {
    code: string;
    name: string;
    ask: string;
  };
  XRP: {
    code: string;
    name: string;
    ask: string;
  };
};
