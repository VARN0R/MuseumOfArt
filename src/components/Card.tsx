import styled from 'styled-components';
import CardSliderProps from '../types/CardSliderProps';
import {
  Artist,
  Title,
  FavoriteButton,
  Public,
  CardContentText,
} from './CardSlider';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import loadingGif from '../assets/gif/loading.gif';
import Loader from './Loader';
import ImageProps from '../types/ImageProps';
import favoritesIconCard from '../assets/img/favoritesIconCard.svg';

const CardStyled = styled.div`
  border: 1px solid #f0f1f1;
  padding: 25px 13px;
  width: 416px;
  height: 130px;
  background: #fff;
`;

const Image = styled.img<ImageProps>`
  width: 80px;
  height: 80px;
  display: ${(props) => (props.loaded ? 'block' : 'none')};
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card: React.FC<CardSliderProps> = (props) => {
  const { id, title, artist, imageUrl, isFavorite, onToggleFavorite } = props;
  const [imageLoad, setImageLoad] = useState<boolean>(false);
  return (
    <CardStyled>
      <CardContent>
        <Link to={`/details/${id}`}>
          <Loader width="80px" height="80px" loaded={imageLoad}>
            <img src={loadingGif} alt="Loading..." />
          </Loader>
          <Image
            src={imageUrl}
            alt={title}
            loaded={imageLoad}
            onLoad={() => setImageLoad(true)}
          />
        </Link>
        <CardContentText>
          <Title title={title}>{title}</Title>
          <Artist title={artist}>{artist ? artist : 'Name is unknown'}</Artist>
          <Public>Public</Public>
        </CardContentText>

        <FavoriteButton
          favorite={isFavorite ? true : false}
          onClick={() => onToggleFavorite(id)}
        >
          <img src={favoritesIconCard} alt="favorites icon" />
        </FavoriteButton>
      </CardContent>
    </CardStyled>
  );
};

export default Card;
