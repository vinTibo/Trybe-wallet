import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createExpense, fetchCurrencies, requestCurrencies } from '../redux/actions';
import { Dispatch, ExchangeRateType, ExpensesType, StoreType } from '../type';
import { fetchCurrenciesExchangeRates } from '../fetch';

function WalletForm() {
  const { currencies, expenses } = useSelector((state: StoreType) => state.wallet);
  const [exRateInfo, setExRateInfo] = useState();

  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
    const handleFetchExchangeRates = async () => {
      const data = await fetchCurrenciesExchangeRates();
      console.log(data);
      setExRateInfo(data);
      console.log(exRateInfo);
    };
    handleFetchExchangeRates();
  }, []);

  const [expensesInfo, setExpensesInfo] = useState({
    id: expenses.length,
    value: '',
    currency: 'USD',
    method: 'money',
    tag: 'food',
    description: '',
    exchangeRate: exRateInfo,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpensesInfo({
      ...expensesInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setExpensesInfo({
      ...expensesInfo,
      [event.target.name]: event.target.value,
    });
  }
  console.log(expenses);

  const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createExpense(expensesInfo));
  };

  return (
    <form onSubmit={ onsubmit }>
      <label htmlFor="valeuInput">
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
          onChange={ handleChangeSelect }
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
          onChange={ handleChangeSelect }
        >
          <option value="money">Dinheiro</option>
          <option value="credit">Cartão de crédito</option>
          <option value="debit">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        Categoria:
        <select
          name="tag"
          id="tag"
          data-testid="tag-input"
          onChange={ handleChangeSelect }
        >
          <option value="food">Alimentação</option>
          <option value="relax">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transportation">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
      <button type="submit">Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
