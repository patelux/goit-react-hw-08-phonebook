import { useDispatch } from 'react-redux';
import { login } from 'redux/user/operations';
import css from '../../styles/Contacts.module.css';

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
      <label className={css.label}>
        Email
        <input className={css.inputForm} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input  className={css.inputForm} type="password" name="password" />
      </label>
      <button className={css.btnSubmit} type="submit">Log In</button>
    </form>
  );
};
