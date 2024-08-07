interface CardSliderProps {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export default CardSliderProps;
