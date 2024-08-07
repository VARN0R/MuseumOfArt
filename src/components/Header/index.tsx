import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import images from '@assets/images';
import Container from '@components/Container/styles';

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
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

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
        <Nav ref={menuRef}>
          <Logo>
            <img src={images.logoHeader} alt="logo header" />
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
                  <img src={images.homeIcon} alt="home icon" />
                </Icon>
                <NavItemText>Home</NavItemText>
              </LinkStyled>
            </NavItem>

            <NavItem display={navItemHomeDisplay}>
              <LinkStyled to="/favorites">
                <Icon>
                  <img src={images.favoritesIcon} alt="favorites icon" />
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
