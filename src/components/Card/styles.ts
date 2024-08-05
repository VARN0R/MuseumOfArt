import styled from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import { BREAKPOINTS } from '@constants/index';
import ImageProps from '@/types/imageProps';

export const CardStyled = styled.div`
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.lightGray};
  padding: 25px 13px;
  width: 416px;
  height: 130px;
  background: ${(props) => props.theme.colors.white};
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 350px;
  }
`;

export const Image = styled.img.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<ImageProps>`
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
