import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, StoreType, ExpensesType } from '../type';
import { refreshExpensesList } from '../redux/actions';

function Table() {
  const dispatch: Dispatch = useDispatch();
  const { expenses } = useSelector((state: StoreType) => state.wallet);
  const handleClick = (id: number) => {
    console.log(id);
    const filterExpeses = expenses.filter((expense) => expense.id !== id);
    console.log(filterExpeses);
    dispatch(refreshExpensesList(filterExpeses));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense: ExpensesType) => (
          <tr key={ expense.id }>
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method }</td>
            <td>{ Number(expense.value).toFixed(2) }</td>
            <td>{ expense.exchangeRates[expense.currency].name }</td>
            <td>{ Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
            <td>
              {
                (Number(expense.value)
                * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)
              }
            </td>
            <td>Real</td>
            <td>
              <button
                data-testid="delete-btn"
                onClick={ () => handleClick(expense.id) }
              >
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
