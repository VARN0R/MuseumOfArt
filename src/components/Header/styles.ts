import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BREAKPOINTS } from '@constants/index';
import LinkProps from '@/types/linkProps';
import NavItemProps from '@/types/navItemProps';

export const HeaderStyled = styled.header`
  background: ${(props) => props.theme.colors.gradientBlack};
  height: 127px;
  padding: 32px 0;
  @media (max-width: ${BREAKPOINTS.sm}) {
    height: auto;
    padding: 16px 0;
  }
`;

export const Logo = styled.div`
  width: 206px;
  height: 63px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
  }
`;

export const Icon = styled.div`
  width: 24px;
  height: 25px;
  margin-right: 4px;
`;

export const NavItem = styled.div<NavItemProps>`
  display: flex;
  align-items: center;
  margin-left: 29px;
  &:nth-child(1) {
    display: ${({ display }) => display || 'none'};
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    margin-left: 0;
    margin-bottom: 16px;
  }
`;

export const Links = styled.div<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    position: absolute;
    z-index: 2;
    top: 0;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: ${(props) => props.theme.colors.mainBlack};
    opacity: 0.8;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    width: 100%;
  }
`;

export const LinkStyled = styled(Link)`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.small2};
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  display: flex;

  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: ${(props) => props.theme.fontSizes.extraLarge};
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  z-index: 3;
  top: 10px;
  right: 10px;

  span {
    height: 2px;
    background: ${(props) => props.theme.colors.white};
    margin: 4px 0;
    width: 25px;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    display: flex;
  }
`;

export const NavItemText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
