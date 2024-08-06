export default interface FavoritesContextProps {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}
