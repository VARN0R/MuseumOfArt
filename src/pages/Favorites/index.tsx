import React, { useEffect, useState } from 'react';

import Art from '@/types/art';
import favoritesTitle from '@assets/img/favoritesTitle.svg';
import Card from '@components/Card';
import Container from '@components/Container/styles';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Subtitle from '@components/Subtitle';

import { PAGE_TEXT } from '@constants/index';

import { useFavorites } from '@helpes/favoritesContext';

import { fetchArtId } from '@services/fetchArtId';

import {
  FavoritesContainer,
  FavoritesIconTitle,
  FavoritesTitleUnder,
  Title,
} from './styles';

const Favorites: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const [favoriteArts, setFavoriteArts] = useState<Art[]>([]);

  useEffect(() => {
    const fetchFavoriteArts = async () => {
      const artsPromises = favorites.map((id: number) => fetchArtId(id));
      const arts = await Promise.all(artsPromises);
      const formattedArts = arts.map(
        ({ id, title, artist_title, image_id }) => ({
          id: id,
          title: title,
          artist: artist_title,
          imageUrl: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,
        })
      );
      setFavoriteArts(formattedArts);
    };

    fetchFavoriteArts();
  }, [favorites]);

  return (
    <div>
      <Header />
      <Container>
        <Title>
          Here are your{' '}
          <FavoritesTitleUnder>
            <FavoritesIconTitle
              src={favoritesTitle}
              alt="favorites icon title"
            />
            <span>Favorites</span>
          </FavoritesTitleUnder>
        </Title>
      </Container>
      <Subtitle {...PAGE_TEXT.favorites} />
      <Container>
        <FavoritesContainer>
          {favoriteArts.map(({ id, title, artist, imageUrl }) => (
            <Card
              key={id}
              id={id}
              title={title}
              artist={artist}
              imageUrl={imageUrl}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </FavoritesContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default Favorites;
