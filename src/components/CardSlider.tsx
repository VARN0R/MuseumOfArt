import styled from 'styled-components';
import CardSliderProps from '../types/CardSliderProps';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Loader from './Loader';
import loadingGif from '../assets/gif/loading.gif';
import ImageProps from '../types/ImageProps';
import favoritesIconCard from '../assets/img/favoritesIconCard.svg';

const CardSliderStyled = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 387px;
  height: 514px;
  position: relative;
`;

const Image = styled.img<ImageProps>`
  width: 100%;
  height: 444px;
  display: ${(props) => (props.loaded ? 'block' : 'none')};
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 17px 24px;
  background-color: #fff;
  width: 334px;
  height: 132px;
  position: absolute;
  bottom: 0px;
  right: 27px;
  border: 1px solid #f0f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardContentText = styled.div`
  width: 219px;
`;

const Title = styled.h3`
  font-weight: 500;
  width: 219px;
  font-size: 17px;
  line-height: 150%;
  letter-spacing: -0.03em;
  color: #393939;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Artist = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 171%;
  letter-spacing: -0.01em;
  width: 219px;
  color: #e0a449;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Public = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-size: 15px;
  line-height: 171%;
  letter-spacing: -0.01em;
  color: #393939;
  margin-top: 8px;
`;

interface FavoriteButtonProps {
  favorite: boolean;
}

const FavoriteButton = styled.button<FavoriteButtonProps>`
  background: ${(props) => (props.favorite ? '#FBD7B2' : '#F9F9F9')};
  border: none;
  cursor: pointer;
  border-radius: 35px;
  padding: 17px;
  width: 59px;
  height: 59px;
`;

const CardSlider: React.FC<CardSliderProps> = (props) => {
  const [imageLoad, setImageLoad] = useState<boolean>(false);
  const { id, title, artist, imageUrl, isFavorite, onToggleFavorite } = props;

  return (
    <CardSliderStyled>
      <Link to={`/details/${id}`}>
        <Loader loaded={imageLoad} width="100%" height="444px">
          <img src={loadingGif} alt="Loading..." />
        </Loader>
        <Image
          loaded={imageLoad}
          src={imageUrl}
          alt={title}
          onLoad={() => setImageLoad(true)}
        />
      </Link>

      <CardContent>
        <CardContentText>
          <Title title={title}>{title}</Title>
          <Artist title={artist}>{artist}</Artist>
          <Public>Public</Public>
        </CardContentText>

        <FavoriteButton
          favorite={isFavorite ? true : false}
          onClick={() => onToggleFavorite(id)}
        >
          <img src={favoritesIconCard} alt="favorites icon" />
        </FavoriteButton>
      </CardContent>
    </CardSliderStyled>
  );
};

export { CardSlider, Public, Artist, Title, FavoriteButton, CardContentText };
