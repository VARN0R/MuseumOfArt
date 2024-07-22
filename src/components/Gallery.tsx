import styled from 'styled-components';
import Card from './Card';
import Container from './Container';
import Subtitle from './Subtitle';
import { useEffect, useState } from 'react';
import axios from 'axios';

const GalleryContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 40px;
`;

interface Art {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
}

const Gallery = () => {
  const [arts, setArts] = useState<Art[]>([]);
  const [favoritesGallery, setFavoritesGallery] = useState<number[]>([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      axios
        .get('https://api.artic.edu/api/v1/artworks', {
          params: {
            page: 1,
            limit: 50,
          },
        })
        .then((response) => {
          const artworks = response.data.data.map((art: any) => ({
            id: art.id,
            title: art.title,
            artist: art.artist_title,
            imageUrl: `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`,
          }));
          setArts(artworks);
        });
    };

    fetchArtworks();

    const storedFavorites = JSON.parse(
      localStorage.getItem('favoritesGallery') || '[]'
    );
    setFavoritesGallery(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritesGallery', JSON.stringify(favoritesGallery));
  }, [favoritesGallery]);

  const handleToggleFavorite = (id: number) => {
    setFavoritesGallery((favs) =>
      favs.includes(id) ? favs.filter((favId) => favId !== id) : [...favs, id]
    );
  };

  const storedArtsSliderId = JSON.parse(localStorage.getItem('artsId') || '[]');

  const unicueArts = arts.filter(
    (item) => !storedArtsSliderId.includes(item.id)
  );

  const galleryArts = unicueArts.slice(0, 9);

  return (
    <div>
      <Subtitle
        underText="Other works for you"
        topText="Here some more"
      ></Subtitle>
      <Container>
        <GalleryContainer>
          {galleryArts.map((art) => (
            <Card
              key={art.id}
              id={art.id}
              title={art.title}
              artist={art.artist}
              imageUrl={art.imageUrl}
              isFavorite={favoritesGallery.includes(art.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </GalleryContainer>
      </Container>
    </div>
  );
};

export default Gallery;
