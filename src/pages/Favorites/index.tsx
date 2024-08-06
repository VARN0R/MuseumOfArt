import React from 'react';

import favoritesTitle from '@assets/img/favoritesTitle.svg';
import Card from '@components/Card';
import Container from '@components/Container/styles';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Subtitle from '@components/Subtitle';

import { PAGE_TEXT } from '@constants/index';
import { useFavorites } from '@helpers/favoritesContext';

import {
  FavoritesContainer,
  FavoritesIconTitle,
  FavoritesTitleUnder,
  Title,
} from './styles';

import Loader from '@components/Loader/styles';
import loadingGif from '@assets/gif/loading.gif';
import useFavoriteArts from '@hooks/useFavoritesArts';

const Favorites: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const { favoriteArts, loading } = useFavoriteArts(favorites);

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
        {loading ? (
          <Loader width="100%" height="444px" loaded={!loading}>
            <img src={loadingGif} alt="Loading..." />
          </Loader>
        ) : (
          <>
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
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Favorites;
