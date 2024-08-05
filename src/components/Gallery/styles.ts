import styled from 'styled-components';

import { BREAKPOINTS } from '@constants/index';

export const GalleryContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 40px;
  @media (max-width: ${BREAKPOINTS.xl}) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const SortSelect = styled.select`
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
  border: 1px solid #f0f1f1;
`;

export const SortContainer = styled.div`
  width: 150px;
  margin: 40px auto 0 auto;
`;
