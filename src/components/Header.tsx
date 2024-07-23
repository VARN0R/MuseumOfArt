import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import logoHeader from '../assets/img/logoHeader.svg';

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
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9.5L12 2.5L21 9.5V20.5C21 21.0304 20.7893 21.5391 20.4142 21.9142C20.0391 22.2893 19.5304 22.5 19 22.5H5C4.46957 22.5 3.96086 22.2893 3.58579 21.9142C3.21071 21.5391 3 21.0304 3 20.5V9.5Z"
                    stroke="#E0A449"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 22.5V12.5H15V22.5"
                    stroke="#E0A449"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Icon>
              <LinkStyled to="/">Home</LinkStyled>
            </NavItem>

            <NavItem display={navItemHomeDisplay}>
              <Icon>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 21.5L12.375 17.5L5.25 21.5V5.5C5.25 4.96957 5.46448 4.46086 5.84625 4.08579C6.22802 3.71071 6.74581 3.5 7.28571 3.5H17.4643C18.0042 3.5 18.522 3.71071 18.9038 4.08579C19.2855 4.46086 19.5 4.96957 19.5 5.5V21.5Z"
                    stroke="#E0A449"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
