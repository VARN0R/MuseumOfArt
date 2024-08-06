import axios from 'axios';
import { useEffect, useState } from 'react';

import Art from '@/types/art';
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
    const fetchArtworks = async () => {
      try {
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
      } catch (error) {
        console.error('Error fetching artworks', error);
      }
    };

    fetchArtworks();
  }, []);

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
          {galleryArts.map((art) => (
            <Card
              key={art.id}
              id={art.id}
              title={art.title}
              artist={art.artist}
              imageUrl={art.imageUrl}
              isFavorite={favorites.includes(art.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </GalleryContainer>
      </Container>
    </div>
  );
};

export default Gallery;
