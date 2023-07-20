import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';
import App from '../App';
import mockData from './helpers/mockData';

describe('Testing Login page', () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => (mockData),
  });
  const EMAIL_INPUT = 'email-input';
  const PASSWORD_INPUT = 'password-input';
  test('Testing Login inputs', () => {
    renderWithRouterAndRedux(<Login />);

    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passInput = screen.getByTestId(PASSWORD_INPUT);
    const loginButton = screen.getByRole('button');

    expect(emailInput).toBeInTheDocument();
    expect(passInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
  test('Testing button', async () => {
    renderWithRouterAndRedux(<Login />);

    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passInput = screen.getByTestId(PASSWORD_INPUT);
    const loginButton = screen.getByRole('button');

    await userEvent.type(emailInput, 'alguem');
    await userEvent.type(passInput, '123');

    expect(loginButton).toBeDisabled();

    await userEvent.type(emailInput, '@alguem.com');
    await userEvent.type(passInput, '456');

    expect(loginButton).toBeEnabled();
  });
  test('Testing after button click', async () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passInput = screen.getByTestId(PASSWORD_INPUT);
    const loginButton = screen.getByRole('button');

    await userEvent.type(emailInput, 'alguem@alguem.com');
    await userEvent.type(passInput, '123456');

    expect(loginButton).toBeEnabled();

    await userEvent.click(loginButton);

    const emailField = screen.getByTestId('email-field');
    expect(emailField).toBeInTheDocument();
  });
});
