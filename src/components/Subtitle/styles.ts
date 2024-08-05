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
  font-size: ${(props) => props.theme.fontSizes.small2};
  color: ${(props) => props.theme.colors.lightPeach};
  text-align: center;
`;

export const UnderTextStyled = styled.div`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.extraLarge3};
  color: ${(props) => props.theme.colors.lightBlack};
  text-align: center;
`;
