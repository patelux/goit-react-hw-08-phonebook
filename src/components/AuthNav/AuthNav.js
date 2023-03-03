import { NavLink } from 'react-router-dom';
import css from '../../styles/Contacts.module.css';


export const AuthNav = () => {
  
  return (
    <div className={css.wrapper}>
          <NavLink className={css.link} to="login">Log In</NavLink>
          <NavLink className={css.link} to="register">Register</NavLink>
    </div>
  );
};


