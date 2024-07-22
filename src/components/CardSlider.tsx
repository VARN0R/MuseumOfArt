import styled from 'styled-components';
import CardSliderProps from '../types/CardSliderProps';

const CardSliderStyled = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 387px;
  height: 514px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 444px;
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
  font-size: 17px;
  line-height: 150%;
  letter-spacing: -0.03em;
  color: #393939;
`;

const Artist = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 171%;
  letter-spacing: -0.01em;
  color: #e0a449;
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
  const { id, title, artist, imageUrl, isFavorite, onToggleFavorite } = props;

  return (
    <CardSliderStyled>
      <Image src={imageUrl} alt={title} />
      <CardContent>
        <CardContentText>
          <Title>{title}</Title>
          <Artist>{artist}</Artist>
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
    </CardSliderStyled>
  );
};

export default CardSlider;
