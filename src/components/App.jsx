import { Header } from './Header/Header';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />}/>     
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts"element={<Contacts />}/>    
        </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes> 
  );
};

