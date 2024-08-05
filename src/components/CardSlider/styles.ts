import styled from 'styled-components';

import { BREAKPOINTS } from '@constants/index';
import ImageProps from '@/types/imageProps';
import FavoriteButtonProps from '@/types/favoriteButtonProps';

export const FavoriteButton = styled.button<FavoriteButtonProps>`
  background: ${(props) => (props.favorite ? '#FBD7B2' : '#F9F9F9')};
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

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 444px;
  display: ${(props) => (props.loaded ? 'block' : 'none')};
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 17px 24px;
  background-color: #fff;
  width: 334px;
  height: 132px;
  position: absolute;
  bottom: 0px;
  right: 27px;
  border: 1px solid #f0f1f1;
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
  font-size: 17px;
  line-height: 150%;
  letter-spacing: -0.03em;
  color: #393939;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1200px) {
    width: 150px;
  }
`;

export const Artist = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 171%;
  letter-spacing: -0.01em;
  width: 219px;
  color: #e0a449;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${BREAKPOINTS.xl}) {
    width: 150px;
  }
`;

export const Public = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-size: 15px;
  line-height: 171%;
  letter-spacing: -0.01em;
  color: #393939;
  margin-top: 8px;
`;
