import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { StoreType } from '../type';

function Header() {
  const [result, setResult] = useState(0);
  const { email } = useSelector((state: StoreType) => state.user);
  const { expenses } = useSelector((state: StoreType) => state.wallet);

  const handleTotal = () => {
    expenses.forEach((expense) => {
      const value = Number(expense.value) * Number(
        expense.exchangeRates[expense.currency].ask,
      );
      setResult(result + value);
    });
  };

  useEffect(() => {
    handleTotal();
  }, [expenses]);

  return (
    <div>
      <p data-testid="email-field">{ email }</p>
      <p data-testid="total-field">{ result.toFixed(2) }</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
