import isPropValid from '@emotion/is-prop-valid';
import styled from 'styled-components';

import ImageProps from '@/types/imageProps';

export const Image = styled.img.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<ImageProps>`
  width: 497px;
  height: 570px;
  display: ${(props) => (props.loaded ? 'block' : 'none')};
  object-fit: cover;
  @media (max-width: 1200px) {
    width: 350px;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Artist = styled.div`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  color: ${(props) => props.theme.colors.lightPeach};
  margin-top: 32px;
`;

export const Date = styled.div`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.small2};
  color: ${(props) => props.theme.colors.lightBlack};
  margin-top: 16px;
`;

export const Public = styled.div`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.small2};
  color: ${(props) => props.theme.colors.mainBlack};
  margin-top: 16px;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.extraLarge3};
  color: ${(props) => props.theme.colors.lightBlack};
`;

export const Subtitle = styled(Title)`
  margin-top: 170px;
  @media (max-width: 992px) {
    margin-top: 60px;
  }
`;

export const Nationality = styled.div`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.small2};
  color: ${(props) => props.theme.colors.lightPeach};
  margin-top: 32px;
  span {
    color: ${(props) => props.theme.colors.lightBlack};
  }
`;

export const Dimensions = styled(Nationality)`
  margin-top: 16px;
`;

export const CreditLine = styled(Nationality)`
  margin-top: 16px;
`;

export const Repository = styled(Nationality)`
  margin-top: 16px;
`;

export const DetailsText = styled.div`
  width: 600px;
  @media (max-width: 1200px) {
    width: 550px;
  }
  @media (max-width: 992px) {
    margin-top: 40px;
  }
  @media (max-width: 576px) {
    width: 350px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
