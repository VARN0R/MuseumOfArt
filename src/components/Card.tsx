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

const CardStyled = styled.div`
  border: 1px solid #f0f1f1;
  padding: 25px 13px;
  width: 416px;
  height: 130px;
  background: #fff;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card: React.FC<CardSliderProps> = (props) => {
  const { id, title, artist, imageUrl, isFavorite, onToggleFavorite } = props;

  return (
    <CardStyled>
      <CardContent>
        <Link to={`/details/${id}`}>
          <Image src={imageUrl} alt={title} />
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
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5444 21.0444L12.5444 17.0444L5.54443 21.0444V5.04443C5.54443 4.514 5.75515 4.00529 6.13022 3.63022C6.50529 3.25515 7.014 3.04443 7.54443 3.04443H17.5444C18.0749 3.04443 18.5836 3.25515 18.9586 3.63022C19.3337 4.00529 19.5444 4.514 19.5444 5.04443V21.0444Z"
              stroke="#F17900"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </FavoriteButton>
      </CardContent>
    </CardStyled>
  );
};

export default Card;
