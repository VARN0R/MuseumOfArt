import styled from 'styled-components';

import { BREAKPOINTS } from '@constants/index';

export const FooterStyled = styled.footer`
  height: 127px;
  padding: 32px 0;
  background: #fff;
  margin-top: 120px;
  @media (max-width: ${BREAKPOINTS.md}) {
    margin-top: 60px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 206px;
  height: 63px;
`;

export const LogoCompany = styled.div`
  width: 164px;
  height: 59px;
`;
