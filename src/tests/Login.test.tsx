import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';

describe('Testing Login page', () => {
  renderWithRouterAndRedux(<Login />);
  const emailInput = screen.getByTestId('email-input');
  const passInput = screen.getByTestId('password-input');
  const loginButton = screen.getByRole('button');
  test('Testing Login inputs', () => {
    renderWithRouterAndRedux(<Login />);

    expect(emailInput).toBeInTheDocument();
    expect(passInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
  test('Testing button', () => {
    renderWithRouterAndRedux(<Login />);

    userEvent.type(emailInput, 'email');
    userEvent.type(passInput, '123');
    userEvent.click(loginButton);
    console.log(emailInput.textContent);

    expect(emailInput).toBeInTheDocument();
    expect(passInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
});
