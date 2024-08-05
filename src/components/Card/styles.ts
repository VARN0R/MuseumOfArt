import styled from 'styled-components';

import { BREAKPOINTS } from '@constants/index';
import ImageProps from '@/types/imageProps';

export const CardStyled = styled.div`
  border: 1px solid #f0f1f1;
  padding: 25px 13px;
  width: 416px;
  height: 130px;
  background: #fff;
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 350px;
  }
`;

export const Image = styled.img<ImageProps>`
  width: 80px;
  height: 80px;
  display: ${(props) => (props.loaded ? 'block' : 'none')};
  object-fit: cover;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
