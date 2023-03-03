import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { useAuth } from 'components/hooks/useAuth';
import css from '../../styles/Contacts.module.css';

export const UserMenu = () => {
  const {user} = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div classname={css.wrapperUserMenu}>
        <NavLink className={css.link} to="/contacts">← Contact book</NavLink>
        <p classname={css.username}>Welcome, {user.name}</p>
        <button className={css.btnLogout} type="button" onClick={handleLogout}> LogOut
      </button>
    </div>
  );
};
