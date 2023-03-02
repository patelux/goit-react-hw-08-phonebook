import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { useAuth } from 'components/hooks/useAuth';

export const UserMenu = () => {
  const {user} = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
        <p>
          <NavLink to="contacts">Contact book</NavLink>
        </p>
        <p>Welcome, {user.name}</p>
        <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
