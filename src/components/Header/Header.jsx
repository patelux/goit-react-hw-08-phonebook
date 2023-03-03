import { Outlet, NavLink} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import css from '../../styles/Contacts.module.css';


export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={css.headerbar}>
    <header className={css.header}>
      <NavLink className={css.link} to="/home">← Back to start page</NavLink>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}      
    </header>
    <Outlet />
    </div>
  );
};
