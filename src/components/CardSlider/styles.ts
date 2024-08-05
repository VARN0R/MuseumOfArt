import styled from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import { BREAKPOINTS } from '@constants/index';

import ImageProps from '@/types/imageProps';
import FavoriteButtonProps from '@/types/favoriteButtonProps';

export const FavoriteButton = styled.button.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<FavoriteButtonProps>`
  background: ${(props) =>
    props.favorite ? props.theme.colors.peach : props.theme.colors.lightGray};
  border: none;
  cursor: pointer;
  border-radius: 35px;
  padding: 17px;
  width: 59px;
  height: 59px;
`;

export const CardSliderStyled = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 387px;
  height: 514px;
  position: relative;

  @media (max-width: ${BREAKPOINTS.xl}) {
    width: 300px;
  }

  @media (max-width: ${BREAKPOINTS.lg}) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const Image = styled.img.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<ImageProps>`
  width: 100%;
  height: 444px;
  display: ${(props) => (props.loaded ? 'block' : 'none')};
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 17px 24px;
  background-color: ${(props) => props.theme.colors.white};
  width: 334px;
  height: 132px;
  position: absolute;
  bottom: 0px;
  right: 27px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.xl}) {
    width: 250px;
  }
`;

export const CardContentText = styled.div`
  width: 219px;
  @media (max-width: 1200px) {
    width: 150px;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  width: 219px;
  font-size: ${(props) => props.theme.fontSizes.mediumSmall};
  line-height: 150%;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.lightBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1200px) {
    width: 150px;
  }
`;

export const Artist = styled.p`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 171%;
  letter-spacing: -0.01em;
  width: 219px;
  color: ${(props) => props.theme.colors.lightPeach};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${BREAKPOINTS.xl}) {
    width: 150px;
  }
`;

export const Public = styled.div`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 700;
  line-height: 171%;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.mainBlack};
  margin-top: 8px;
`;
