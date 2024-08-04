import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 700;
  font-size: 64px;
  text-transform: capitalize;

  color: #393939;
  text-align: center;
  width: 690px;
  margin: 120px auto 0 auto;
  span {
    display: block;
    color: #f17900;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    font-size: 32px;
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
