import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createExpense, fetchCurrencies } from '../redux/actions';
import { Dispatch, StoreType, WalletFormType } from '../type';
import { fetchCurrenciesExchangeRates } from '../fetch';

function WalletForm() {
  const { currencies, expenses } = useSelector((state: StoreType) => state.wallet);
  const [id, setId] = useState(0);

  const EMPTY_FORM = {
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
    exchangeRates: '',
  };

  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  const [expensesInfo, setExpensesInfo] = useState<WalletFormType>(EMPTY_FORM);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setExpensesInfo({
      ...expensesInfo,
      [event.target.name]: event.target.value,
    });
  };

  const onsubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      id,
      ...expensesInfo,
      exchangeRates: await fetchCurrenciesExchangeRates(),
    };
    dispatch(createExpense(data));
    setId(id + 1);
    setExpensesInfo(EMPTY_FORM);
  };

  return (
    <form onSubmit={ onsubmit }>
      <label htmlFor="value">
        Valor:
        <input
          type="text"
          name="value"
          id="value"
          data-testid="value-input"
          value={ expensesInfo.value }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="description">
        Decrição:
        <input
          type="text"
          name="description"
          id="description"
          data-testid="description-input"
          value={ expensesInfo.description }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="currency">
        Moeda:
        <select
          name="currency"
          id="currency"
          data-testid="currency-input"
          onChange={ handleChange }
        >
          { currencies.map((currency, index) => (
            <option
              key={ `${currency} ${index}` }
              value={ `${currency}` }
            >
              { currency }
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="method">
        Método de pagamento:
        <select
          name="method"
          id="method"
          data-testid="method-input"
          onChange={ handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        Categoria:
        <select
          name="tag"
          id="tag"
          data-testid="tag-input"
          onChange={ handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
      <button type="submit">Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
