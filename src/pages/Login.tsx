import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserInfo } from '../type';
import { actionCreator } from '../redux/actions';

function Login() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };
  const validateEmail = () => {
    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return userInfo.email.match(emailFormat) && userInfo.password.length > 5;
  };

  const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleClick = () => {
    dispatch(actionCreator(userInfo.email));
  };
  return (
    <form onSubmit={ onsubmit }>
      <input
        type="text"
        name="email"
        value={ userInfo.email }
        onChange={ handleChange }
        data-testid="email-input"
      />
      <input
        type="password"
        name="password"
        id=""
        value={ userInfo.password }
        onChange={ handleChange }
        data-testid="password-input"
      />
      <Link to="/carteira">
        <button
          type="submit"
          disabled={ !validateEmail() }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </Link>
    </form>
  );
}

export default Login;
