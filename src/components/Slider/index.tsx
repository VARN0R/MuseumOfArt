import React, { useCallback } from 'react';

import SliderProps from '@/types/sliderProps';
import CardSlider from '@components/CardSlider';
import Container from '@components/Container/styles';
import Subtitle from '@components/Subtitle';
import {
  AMOUNT_SLIDER_ARTS,
  LENGTH_PAGINATION,
  PAGE_TEXT,
} from '@constants/index';
import { useFavorites } from '@helpers/favoritesContext';
import usePaginatedArts from '@hooks/usePaginatedArts';
import usePagination from '@hooks/usePagination';

import {
  ArtContainer,
  Page,
  PageActive,
  Pagination,
  PaginationButton,
  PaginationWrapper,
} from './styles';
import Loader from '@components/Loader/styles';
import loadingGif from '@assets/gif/loading.gif';

const Slider: React.FC<SliderProps> = ({ query }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { currentPage, nextPage, prevPage, setPage } = usePagination();
  const { paginatedArts, loading } = usePaginatedArts(query, currentPage);

  const totalPages = Math.ceil(AMOUNT_SLIDER_ARTS / LENGTH_PAGINATION);
  const handleSetPage = useCallback(
    (page: number) => () => {
      setPage(page);
    },
    []
  );

  return (
    <div>
      <Subtitle {...PAGE_TEXT.main} />
      <Container>
        {loading ? (
          <Loader width="100%" height="444px" loaded={!loading}>
            <img src={loadingGif} alt="Loading..." />
          </Loader>
        ) : query !== 'not found' ? (
          <>
            <ArtContainer>
              {paginatedArts.map(({ id, title, artist, imageUrl }) => (
                <CardSlider
                  key={id}
                  id={id}
                  title={title}
                  artist={artist}
                  imageUrl={imageUrl}
                  isFavorite={favorites.includes(id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </ArtContainer>
            <PaginationWrapper>
              <Pagination>
                <PaginationButton
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  {'<'}
                </PaginationButton>
                {[...Array(totalPages).keys()].map((num) => (
                  <PaginationButton key={num} onClick={handleSetPage(num + 1)}>
                    {currentPage === num + 1 ? (
                      <PageActive>{num + 1}</PageActive>
                    ) : (
                      <Page>{num + 1}</Page>
                    )}
                  </PaginationButton>
                ))}
                <PaginationButton
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
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
