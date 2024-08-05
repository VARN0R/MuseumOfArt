import styled from 'styled-components';

import { BREAKPOINTS } from '@constants/index';

export const ArtContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: ${BREAKPOINTS.lg}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  width: 212px;
  height: 30px;
`;

export const PaginationButton = styled.button`
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  font-family: var(--second-family);
  font-weight: 300;
  font-size: 18px;
  line-height: 133%;
  color: #393939;

  &:disabled {
    opacity: 0;
    cursor: not-allowed;
  }
`;

export const Page = styled.div`
  background: none;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageActive = styled(Page)`
  background: #f17900;
  color: #fff;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
