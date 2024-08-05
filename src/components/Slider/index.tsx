import React, { useEffect, useState } from 'react';

import {
  AMOUNT_SLIDER_ARTS,
  LENGTH_PAGINATION,
  PAGE_TEXT,
} from '@constants/index';
import SliderProps from '@/types/sliderProps';

import CardSlider from '@components/CardSlider';
import Subtitle from '@components/Subtitle';

import Container from '@components/Container/styles';
import {
  ArtContainer,
  Page,
  PageActive,
  Pagination,
  PaginationButton,
  PaginationWrapper,
} from './styles';

const Slider: React.FC<SliderProps> = ({ arts }) => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (id: number) => {
    setFavorites((favs) =>
      favs.includes(id) ? favs.filter((favId) => favId !== id) : [...favs, id]
    );
  };

  const paginatedArts = arts.slice(
    (page - 1) * LENGTH_PAGINATION,
    page * LENGTH_PAGINATION
  );

  return (
    <div>
      <Subtitle {...PAGE_TEXT.main}></Subtitle>
      <Container>
        <ArtContainer>
          {paginatedArts.map((art) => (
            <CardSlider
              key={art.id}
              id={art.id}
              title={art.title}
              artist={art.artist}
              imageUrl={art.imageUrl}
              isFavorite={favorites.includes(art.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </ArtContainer>
        <PaginationWrapper>
          <Pagination>
            <PaginationButton
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              {'<'}
            </PaginationButton>
            {[
              ...Array(
                Math.ceil(AMOUNT_SLIDER_ARTS / LENGTH_PAGINATION)
              ).keys(),
            ].map((num) => (
              <PaginationButton key={num} onClick={() => setPage(num + 1)}>
                {page === num + 1 ? (
                  <PageActive>{num + 1}</PageActive>
                ) : (
                  <Page>{num + 1}</Page>
                )}
              </PaginationButton>
            ))}
            <PaginationButton
              onClick={() => setPage(page + 1)}
              disabled={
                page === Math.ceil(AMOUNT_SLIDER_ARTS / LENGTH_PAGINATION)
              }
            >
              {'>'}
            </PaginationButton>
          </Pagination>
        </PaginationWrapper>
      </Container>
    </div>
  );
};

export default Slider;
