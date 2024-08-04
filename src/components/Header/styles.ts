import NavItemProps from '@/types/navItemProps';
import { Link } from 'react-router-dom';
import LinkProps from '@/types/linkProps';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
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

export const Logo = styled.div`
  width: 206px;
  height: 63px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
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
  @media (max-width: 576px) {
    margin-left: 0;
    margin-bottom: 16px;
  }
`;

export const Links = styled.div<LinkProps>`
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

export const LinkStyled = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  display: flex;

  @media (max-width: 576px) {
    font-size: 24px;
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
    background: #fff;
    margin: 4px 0;
    width: 25px;
  }

  @media (max-width: 576px) {
    display: flex;
  }
`;

export const NavItemText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
