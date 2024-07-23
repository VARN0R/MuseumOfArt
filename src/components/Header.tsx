import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import logoHeader from '../assets/img/logoHeader.svg';
import homeIcon from '../assets/img/homeIcon.svg';
import favoritesIcon from '../assets/img/favoritesIcon.svg';
import { useState } from 'react';

const HeaderStyled = styled.header`
  background: linear-gradient(
    90deg,
    #343333 16.73%,
    #484848 58.63%,
    #282828 98.63%
  );
  height: 127px;
  padding: 32px 0;
  @media (max-width: 576px) {
    height: auto;
    padding: 16px 0;
  }
`;

const Logo = styled.div`
  width: 206px;
  height: 63px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Icon = styled.div`
  width: 24px;
  height: 25px;
  margin-right: 4px;
`;

interface NavItemProps {
  display: string;
}

const NavItem = styled.div<NavItemProps>`
  display: flex;
  align-items: center;
  margin-left: 29px;
  &:nth-child(1) {
    display: ${({ display }) => display || 'none'};
  }
  @media (max-width: 576px) {
    margin-left: 0;
    margin-bottom: 16px;
  }
`;

interface LinkProps {
  open: boolean;
}
const Links = styled.div<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 576px) {
    flex-direction: column;
    position: absolute;
    z-index: 2;
    top: 0;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: black;
    opacity: 0.8;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    width: 100%;
  }
`;

const LinkStyled = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  display: flex;

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  z-index: 3;
  top: 10px;
  right: 10px;

  span {
    height: 2px;
    background: #fff;
    margin: 4px 0;
    width: 25px;
  }

  @media (max-width: 576px) {
    display: flex;
  }
`;

const NavItemText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
