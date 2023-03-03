import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Home } from '../pages/Home';
import { Header } from '../components/Header/Header';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { Contacts } from '../pages/Contacts/Contacts';
import { refreshUser } from '../redux/user/operations';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { PrivateRoute } from '../components/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />}/>
        <Route path="/register" element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          } /> 
         <Route path="/login" element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          } />
      <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}/>
      </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes> 
  );
};

