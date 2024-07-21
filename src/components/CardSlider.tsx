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

const FavoriteButton = styled.button`
  background: #f9f9f9;
  border: none;
  color: #f60;
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
        <FavoriteButton onClick={() => onToggleFavorite(id)}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </FavoriteButton>
      </CardContent>
    </CardSliderStyled>
  );
};

export default CardSlider;
