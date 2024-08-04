import React, { useEffect, useState } from 'react';

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
  const itemsPerPage = 3;
  const amountSliderArts = 12;

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (id: number) => {
    setFavorites((favs) =>
      favs.includes(id) ? favs.filter((favId) => favId !== id) : [...favs, id]
    );
  };

  const paginatedArts = arts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const subtitleProps = {
    topText: 'Topics for you',
    underText: 'Our special gallery',
  };

  return (
    <div>
      <Subtitle {...subtitleProps}></Subtitle>
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
            {[...Array(Math.ceil(amountSliderArts / itemsPerPage)).keys()].map(
              (num) => (
                <PaginationButton key={num} onClick={() => setPage(num + 1)}>
                  {page === num + 1 ? (
                    <PageActive>{num + 1}</PageActive>
                  ) : (
                    <Page>{num + 1}</Page>
                  )}
                </PaginationButton>
              )
            )}
            <PaginationButton
              onClick={() => setPage(page + 1)}
              disabled={page === Math.ceil(amountSliderArts / itemsPerPage)}
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
