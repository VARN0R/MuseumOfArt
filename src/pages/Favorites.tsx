import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Container from '../components/Container';
import Subtitle from '../components/Subtitle';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Art from '../types/Art';
import Card from '../components/Card';

const Title = styled.h2`
  font-weight: 700;
  font-size: 64px;
  text-transform: capitalize;

  color: #393939;
  text-align: center;
  width: 690px;
  margin: 120px auto 0 auto;
  span {
    color: #f17900;
  }
`;

const FavoritesContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 40px;
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
          <div>
            {
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.2573 57.9032L36.9993 48.4409L20.7412 57.9032V20.0538C20.7412 18.799 21.2306 17.5956 22.1017 16.7083C22.9729 15.821 24.1544 15.3226 25.3864 15.3226H48.6122C49.8442 15.3226 51.0257 15.821 51.8968 16.7083C52.7679 17.5956 53.2573 18.799 53.2573 20.0538V57.9032Z"
                  stroke="#F17900"
                  stroke-width="4.69765"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            <span>Favorites</span>
          </div>
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
