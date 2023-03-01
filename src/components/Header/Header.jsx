import { Outlet } from 'react-router-dom';
import { Container } from 'components/App/App.styled';

import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

export default function Header()  {

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <LinkWrapper>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/login">Login</NavLinkStyled>
            <NavLinkStyled to="/register">Register</NavLinkStyled>
            <NavLinkStyled to="/contacts">Phonebook</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>
      <main>
        <Outlet />
      </main>
    </>
  );
};
