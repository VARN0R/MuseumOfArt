import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import CardSliderProps from '@/types/cardSliderProps';
import loadingGif from '@assets/gif/loading.gif';
import images from '@assets/images';
import Loader from '@components/Loader/styles';

import {
  Artist,
  CardContent,
  CardContentText,
  CardSliderStyled,
  FavoriteButton,
  Image,
  Public,
  Title,
} from './styles';

const CardSlider: React.FC<CardSliderProps> = memo((props) => {
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
          <img src={images.favoritesIconCard} alt="favorites icon" />
        </FavoriteButton>
      </CardContent>
    </CardSliderStyled>
  );
});

export default CardSlider;
