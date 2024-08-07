import styled from 'styled-components';

import { BREAKPOINTS } from '@constants/index';

export const TitleStyled = styled.div`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.massive};
  text-align: center;
  color: ${(props) => props.theme.colors.lightBlack};
  width: 690px;
  margin: 120px auto 0 auto;
  span {
    color: ${(props) => props.theme.colors.orange};
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    margin-top: 60px;
    font-size: ${(props) => props.theme.fontSizes.extraLarge3};
    width: 100%;
  }
`;
