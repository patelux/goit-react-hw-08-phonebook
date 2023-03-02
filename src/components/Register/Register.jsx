import { useDispatch } from 'react-redux';
import { register } from 'redux/user/operations';

export const Register = () => {
  const dispatch = useDispatch();

  const handelSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(register(user));
    event.target.reset();
  };
  return (
    <form onSubmit={handelSubmit}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Register</button>
    </form>
  );
};
