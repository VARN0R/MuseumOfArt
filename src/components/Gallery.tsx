import styled from 'styled-components';
import Card from './Card';
import Container from './Container';
import Subtitle from './Subtitle';
import { useEffect, useState } from 'react';
import Art from '../types/Art';

const GalleryContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 40px;
`;

interface GalleryProps {
  arts: Art[];
}

const Gallery: React.FC<GalleryProps> = ({ arts }) => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (id: number) => {
    setFavorites((favs) =>
      favs.includes(id) ? favs.filter((favId) => favId !== id) : [...favs, id]
    );
  };

  const galleryArts = arts.slice(13, 22);

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
              isFavorite={favorites.includes(art.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </GalleryContainer>
      </Container>
    </div>
  );
};

export default Gallery;
