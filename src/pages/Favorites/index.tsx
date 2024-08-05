import { useEffect, useState } from 'react';

import { PAGE_TEXT } from '@constants/index';
import FavoriteProps from '@/types/favoriteProps';

import favoritesTitle from '@assets/img/favoritesTitle.svg';

import Card from '@components/Card';
import Container from '@components/Container/styles';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Subtitle from '@components/Subtitle';

import {
  FavoritesContainer,
  FavoritesIconTitle,
  FavoritesTitleUnder,
  Title,
} from './styles';

const Favorites: React.FC<FavoriteProps> = ({ arts }) => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const removeFavorite = (id: number) => {
    setFavorites((favs) =>
      favs.includes(id) ? favs.filter((favId) => favId !== id) : [...favs, id]
    );
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const favoriteArts = arts.filter((art) => favorites.includes(art.id));

  return (
    <div>
      <Header></Header>
      <Container>
        <Title>
          Here are your{' '}
          <FavoritesTitleUnder>
            <FavoritesIconTitle
              src={favoritesTitle}
              alt="favorites icon title"
            ></FavoritesIconTitle>
            <span>Favorites</span>
          </FavoritesTitleUnder>
        </Title>
      </Container>
      <Subtitle {...PAGE_TEXT.favorites}></Subtitle>
      <Container>
        <FavoritesContainer>
          {favoriteArts.map((art) => (
            <Card
              key={art.id}
              id={art.id}
              title={art.title}
              artist={art.artist}
              imageUrl={art.imageUrl}
              isFavorite={true}
              onToggleFavorite={removeFavorite}
            />
          ))}
        </FavoritesContainer>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Favorites;
