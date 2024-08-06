import React, { useEffect, useState } from 'react';

import Art from '@/types/art';
import SliderProps from '@/types/sliderProps';
import CardSlider from '@components/CardSlider';
import Container from '@components/Container/styles';
import Subtitle from '@components/Subtitle';
import {
  AMOUNT_SLIDER_ARTS,
  LENGTH_PAGINATION,
  PAGE_TEXT,
} from '@constants/index';
import { useFavorites } from '@helpes/favoritesContext';
import { fetchPaginatedArts } from '@services/fetchPaginatedArts';

import {
  ArtContainer,
  Page,
  PageActive,
  Pagination,
  PaginationButton,
  PaginationWrapper,
} from './styles';

const Slider: React.FC<SliderProps> = ({ query }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const [paginatedArts, setPaginatedArts] = useState<Art[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    console.log(query);
    const fetchData = async () => {
      if (query === '') {
        setPaginatedArts(
          await fetchPaginatedArts(
            currentPage,
            'https://api.artic.edu/api/v1/artworks'
          )
        );
      } else if (query !== 'not found') {
        console.log(query);
        setPaginatedArts(await fetchPaginatedArts(currentPage, query));
      } else if (query === 'not found') {
        setPaginatedArts([]);
      }
    };

    fetchData();
  }, [currentPage, query]);

  return (
    <div>
      <Subtitle {...PAGE_TEXT.main} />
      <Container>
        {query !== 'not found' ? (
          <>
            <ArtContainer>
              {paginatedArts.map((art) => (
                <CardSlider
                  key={art.id}
                  id={art.id}
                  title={art.title}
                  artist={art.artist}
                  imageUrl={art.imageUrl}
                  isFavorite={favorites.includes(art.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </ArtContainer>
            <PaginationWrapper>
              <Pagination>
                <PaginationButton
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  {'<'}
                </PaginationButton>
                {[
                  ...Array(
                    Math.ceil(AMOUNT_SLIDER_ARTS / LENGTH_PAGINATION)
                  ).keys(),
                ].map((num) => (
                  <PaginationButton
                    key={num}
                    onClick={() => setCurrentPage(num + 1)}
                  >
                    {currentPage === num + 1 ? (
                      <PageActive>{num + 1}</PageActive>
                    ) : (
                      <Page>{num + 1}</Page>
                    )}
                  </PaginationButton>
                ))}
                <PaginationButton
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={
                    currentPage ===
                    Math.ceil(AMOUNT_SLIDER_ARTS / LENGTH_PAGINATION)
                  }
                >
                  {'>'}
                </PaginationButton>
              </Pagination>
            </PaginationWrapper>
          </>
        ) : (
          'not found'
        )}
      </Container>
    </div>
  );
};

export default Slider;
