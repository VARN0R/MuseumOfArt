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
  cursor: pointer;
  font-family: var(--second-family);
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSizes.mediumSmall2};
  line-height: 133%;
  color: ${(props) => props.theme.colors.mainBlack};

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
  background: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white};
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
