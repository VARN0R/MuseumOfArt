import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Container from '../components/Container';
import Subtitle from '../components/Subtitle';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Art from '../types/Art';
import Card from '../components/Card';
import favoritesTitle from '../assets/img/favoritesTitle.svg';

const Title = styled.h2`
  font-weight: 700;
  font-size: 64px;
  text-transform: capitalize;

  color: #393939;
  text-align: center;
  width: 690px;
  margin: 120px auto 0 auto;
  span {
    display: block;
    color: #f17900;
  }
`;

const FavoritesContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 40px;
`;

const FavoritesIconTitle = styled.img`
  display: inline-block;
`;

const FavoritesTitleUnder = styled.div`
  display: flex;
  justify-content: center;
`;

interface FavoriteProps {
  arts: Art[];
}

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
      <Subtitle
        underText="Your favorites list"
        topText="Saved by you"
      ></Subtitle>
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
