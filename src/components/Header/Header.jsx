import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <NavLink to="/home">Back to start page</NavLink>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}      
      <Outlet />
    </div>
  );
};
