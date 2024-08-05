import styled from 'styled-components';

import { BREAKPOINTS } from '@constants/index';

export const SubtitleStyled = styled.div`
  margin: 120px auto 0 auto;
  @media (max-width: ${BREAKPOINTS.md}) {
    margin-top: 60px;
  }
`;

export const TopTextStyled = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #e0a449;
  text-align: center;
`;

export const UnderTextStyled = styled.div`
  font-weight: 400;
  font-size: 32px;
  color: #393939;
  text-align: center;
`;
