import { useState } from 'react';
import { Link } from 'react-router-dom';

import CardSliderProps from '@/types/cardSliderProps';
import loadingGif from '@assets/gif/loading.gif';
import images from '@assets/images';
import {
  Artist,
  CardContentText,
  FavoriteButton,
  Public,
  Title,
} from '@components/CardSlider/styles';
import Loader from '@components/Loader/styles';

import { CardContent, CardStyled, Image } from './styles';

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
          <img src={images.favoritesIconCard} alt="favorites icon" />
        </FavoriteButton>
      </CardContent>
    </CardStyled>
  );
};

export default Card;
