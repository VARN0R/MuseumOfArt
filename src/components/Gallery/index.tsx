import { useEffect, useState } from 'react';

import Art from '@/types/art';
import { fetchGalleryArts } from '@services/fetchGalleryArts';
import Card from '@components/Card';
import Container from '@components/Container/styles';
import Subtitle from '@components/Subtitle';
import { FILTERS, PAGE_TEXT } from '@constants/index';
import { useFavorites } from '@helpes/favoritesContext';

import { GalleryContainer, SortContainer, SortSelect } from './styles';

const Gallery = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const [sortType, setSortType] = useState<string>('none');
  const [arts, setArts] = useState<Art[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setArts(await fetchGalleryArts());
    };

    fetchData();
  }, []);

  let galleryArts = arts.slice(13, 22);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
      <Subtitle {...PAGE_TEXT.mainSecond}></Subtitle>
      <Container>
        <SortContainer>
          <SortSelect value={sortType} onChange={handleSortChange}>
            <option value="none">{FILTERS[0]}</option>
            <option value="title">{FILTERS[1]}</option>
            <option value="artist">{FILTERS[2]}</option>
          </SortSelect>
        </SortContainer>
        <GalleryContainer>
          {galleryArts.map(({ id, title, artist, imageUrl }) => (
            <Card
              key={id}
              id={id}
              title={title}
              artist={artist}
              imageUrl={imageUrl}
              isFavorite={favorites.includes(id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </GalleryContainer>
      </Container>
    </div>
  );
};

export default Gallery;
