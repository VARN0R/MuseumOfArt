import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import logoHeader from '../assets/img/logoHeader.svg';
import homeIcon from '../assets/img/homeIcon.svg';
import favoritesIcon from '../assets/img/favoritesIcon.svg';

const HeaderStyled = styled.header`
  background: linear-gradient(
    90deg,
    #343333 16.73%,
    #484848 58.63%,
    #282828 98.63%
  );
  height: 127px;
  padding: 32px 0;
`;

const Logo = styled.div`
  width: 206px;
  height: 63px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LinkStyled = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  transition: 0.5s all;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const Header = () => {
  const location = useLocation();

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

          <Links>
            <NavItem display={navItemHomeDisplay}>
              <Icon>
                <img src={homeIcon} alt="home icon" />
              </Icon>
              <LinkStyled to="/">Home</LinkStyled>
            </NavItem>

            <NavItem display={navItemHomeDisplay}>
              <Icon>
                <img src={favoritesIcon} alt="favorites icon" />
              </Icon>
              <LinkStyled to="/favorites">Your favorites</LinkStyled>
            </NavItem>
          </Links>
        </Nav>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
