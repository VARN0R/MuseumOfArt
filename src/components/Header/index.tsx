import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Container from '@components/Container/styles';

import favoritesIcon from '@assets/img/favoritesIcon.svg';
import homeIcon from '@assets/img/homeIcon.svg';
import logoHeader from '@assets/img/logoHeader.svg';

import {
  Hamburger,
  HeaderStyled,
  Icon,
  Links,
  LinkStyled,
  Logo,
  Nav,
  NavItem,
  NavItemText,
} from './styles';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  let navItemHomeDisplay = 'none';
  if (
    location.pathname.includes('/favorites') ||
    location.pathname.includes('/details')
  ) {
    navItemHomeDisplay = 'flex';
  }

  return (
    <HeaderStyled>
      <Container>
        <Nav>
          <Logo>
            <img src={logoHeader} alt="logo header" />
          </Logo>

          <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>

          <Links open={menuOpen}>
            <NavItem display={navItemHomeDisplay}>
              <LinkStyled to="/">
                <Icon>
                  <img src={homeIcon} alt="home icon" />
                </Icon>
                <NavItemText>Home</NavItemText>
              </LinkStyled>
            </NavItem>

            <NavItem display={navItemHomeDisplay}>
              <LinkStyled to="/favorites">
                <Icon>
                  <img src={favoritesIcon} alt="favorites icon" />
                </Icon>
                <NavItemText>Your favorites</NavItemText>
              </LinkStyled>
            </NavItem>
          </Links>
        </Nav>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
