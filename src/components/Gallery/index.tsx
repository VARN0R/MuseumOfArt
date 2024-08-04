import { useEffect, useState } from 'react';

import GalleryProps from '@/types/galleryProps';
import Card from '@components/Card';
import Subtitle from '@components/Subtitle';

import Container from '@components/Container/styles';
import { GalleryContainer, SortContainer, SortSelect } from './styles';

const Gallery: React.FC<GalleryProps> = ({ arts }) => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const [sortType, setSortType] = useState<string>('none');

  const [isSortedAlphabetically, setIsSortedAlphabetically] =
    useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (id: number) => {
    setFavorites((favs) =>
      favs.includes(id) ? favs.filter((favId) => favId !== id) : [...favs, id]
    );
  };

  let galleryArts = arts.slice(13, 22);

  const handleSortChange = (event: any) => {
    setSortType(event.target.value);
  };

  if (sortType === 'title') {
    galleryArts = [...galleryArts].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sortType === 'artist') {
    galleryArts = [...galleryArts].sort((a, b) => {
      const artistA = a.artist || '';
      const artistB = b.artist || '';
      return artistA.localeCompare(artistB);
    });
  }

  return (
    <div>
      <Subtitle
        underText="Other works for you"
        topText="Here some more"
      ></Subtitle>
      <Container>
        <SortContainer>
          <SortSelect value={sortType} onChange={handleSortChange}>
            <option value="none">No Sort</option>
            <option value="title">Sort by Title</option>
            <option value="artist">Sort by Artist</option>
          </SortSelect>
        </SortContainer>
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
