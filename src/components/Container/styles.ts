import styled from 'styled-components';

import { BREAKPOINTS } from '@constants/index';

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: ${BREAKPOINTS.xl}) {
    max-width: 960px;
  }

  @media (max-width: ${BREAKPOINTS.lg}) {
    max-width: 720px;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    max-width: 540px;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    max-width: 100%;
    padding: 0 8px;
  }
`;

export default Container;
