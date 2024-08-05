import styled from 'styled-components';

import { BREAKPOINTS } from '@constants/index';

export const TitleStyled = styled.div`
  font-weight: 700;
  font-size: 64px;
  text-align: center;
  color: #393939;
  width: 690px;
  margin: 120px auto 0 auto;
  span {
    color: #f17900;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    margin-top: 60px;
    font-size: 32px;
    width: 100%;
  }
`;
