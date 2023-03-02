import { useDispatch } from 'react-redux';
import { login } from 'redux/user/operations';

export const Login = () => {
  const dispatch = useDispatch();

  const handelSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(login(user));
    event.target.reset();
  };
  return (
    <form onSubmit={handelSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};
