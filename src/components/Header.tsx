import { useSelector } from 'react-redux';
import { StoreType } from '../type';

function Header() {
  const { email } = useSelector((state: StoreType) => state.user);
  const { expenses } = useSelector((state: StoreType) => state.wallet);
  let result = 0;
  expenses.forEach((expense) => {
    const value = Number(expense.value) * Number(
      expense.exchangeRates[expense.currency].ask,
    );
    result += value;
  });

  return (
    <header>
      <h3 data-testid="email-field">{ email }</h3>
      <p data-testid="total-field">{ result.toFixed(2) }</p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

export default Header;
