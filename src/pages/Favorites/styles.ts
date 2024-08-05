import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.massive};
  text-transform: capitalize;

  color: ${(props) => props.theme.colors.lightBlack};
  text-align: center;
  width: 690px;
  margin: 120px auto 0 auto;
  span {
    display: block;
    color: ${(props) => props.theme.colors.orange};
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    font-size: ${(props) => props.theme.fontSizes.extraLarge3};
    width: 100%;
  }
`;

export const FavoritesContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const FavoritesIconTitle = styled.img`
  display: inline-block;
  @media (max-width: 768px) {
    height: 40px;
  }
`;

export const FavoritesTitleUnder = styled.div`
  display: flex;
  justify-content: center;
`;
