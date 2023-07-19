// import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { expect } from 'vitest';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';
// import '@testing-library/jest-dom/extend-expect';

describe('Testing Login page', () => {
  renderWithRouterAndRedux(<Login />);
  const emailInput = screen.getByTestId('email-input');
  const passInput = screen.getByTestId('password-input');
  const loginButton = screen.getByRole('button');
  test('Testing Login inputs', () => {
    renderWithRouterAndRedux(<Login />);
  });
  test('Testing button', () => {
    renderWithRouterAndRedux(<Login />);

    userEvent.type(emailInput, 'email');
    userEvent.type(passInput, '123');
    userEvent.click(loginButton);
    console.log(emailInput.textContent);

    expect(emailInput).toBeInTheDocument();
  });
});
