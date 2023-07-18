import { useSelector } from 'react-redux';
import { StoreType } from '../type';

function Header() {
  const rootState = useSelector((state: StoreType) => state);
  return (
    <div>
      <p data-testid="email-field">{ rootState.user.email }</p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
