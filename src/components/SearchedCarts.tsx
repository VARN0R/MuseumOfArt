import styled from 'styled-components';
import Card from './Card';
import Container from './Container';
import Subtitle from './Subtitle';
import { useEffect, useState } from 'react';
import Art from '../types/Art';

const SearchedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 40px;
  justify-items: center;
  align-items: center;
`;

interface SearchedCartsProps {
  arts: Art[];
}

const SearchedCarts: React.FC<SearchedCartsProps> = ({ arts }) => {
  console.log(arts);
  return (
    <div>
      <Container>
        <SearchedContainer>
          {arts.length > 0 ? arts.map((art) => <div>id:{art.id}</div>) : ''}
        </SearchedContainer>
      </Container>
    </div>
  );
};

export default SearchedCarts;
