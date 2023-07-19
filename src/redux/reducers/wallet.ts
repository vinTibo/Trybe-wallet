import { CREATE_EXPENSE, REFRESH_EXPENSES_LIST, REQUEST_CURRENCIES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

type ActionType = {
  type: string;
  payload: string;
};

function wallet(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case REQUEST_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    case CREATE_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case REFRESH_EXPENSES_LIST:
      return {
        ...state,
        expenses: action.payload,
      };
    default:
      return state;
  }
}

export default wallet;
