import { useDispatch } from 'react-redux';
import { register } from 'redux/user/operations';
import css from '../../styles/Contacts.module.css';

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
    <form className={css.form}  onSubmit={handelSubmit}>
    <label className={css.label}>
        Username
      <input className={css.inputForm} type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
      <input className={css.inputForm} type="email" name="email" />
      <label className={css.label}>
        Password
      </label>
      <input className={css.inputForm} type="password" name="password" />
      </label>
      <button className={css.btnSubmit} type="submit">Register</button>
    </form>
  );
};
