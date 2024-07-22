import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardSlider } from './CardSlider';
import styled from 'styled-components';
import Subtitle from './Subtitle';
import Container from './Container';

interface Art {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
}

const ArtContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  width: 212px;
  height: 30px;
`;

const PaginationButton = styled.button`
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  font-family: var(--second-family);
  font-weight: 300;
  font-size: 18px;
  line-height: 133%;
  color: #393939;

  &:disabled {
    opacity: 0;
    cursor: not-allowed;
  }
`;

const Page = styled(PaginationButton)`
  background: none;
  border-radius: 4px;
  width: 30px;
  height: 30px;
`;

const PageActive = styled(Page)`
  background: #f17900;
  color: #fff;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Slider: React.FC = () => {
  const [arts, setArts] = useState<Art[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchArtworks = async () => {
      const response = await axios.get('https://api.artic.edu/api/v1/artworks');
      const artworks = response.data.data.map((art: any) => ({
        id: art.id,
        title: art.title,
        artist: art.artist_title,
        imageUrl: `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`,
      }));
      setArts(artworks);

      const artsId: Array<number> = artworks.map((item: any) => item.id);
      localStorage.setItem('artsId', JSON.stringify(artsId));
    };

    fetchArtworks();

    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (id: number) => {
    setFavorites((favs) =>
      favs.includes(id) ? favs.filter((favId) => favId !== id) : [...favs, id]
    );
  };

  console.log('page ' + page);
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
            {[...Array(Math.ceil(arts.length / itemsPerPage)).keys()].map(
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
              disabled={page === Math.ceil(arts.length / itemsPerPage)}
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
