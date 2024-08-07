import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import FavoritesContextProps from '@/types/favoritesContextProps';

import LocalStorageService from '@services/localStorageService';

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = memo(
  ({ children }) => {
    const [favorites, setFavorites] = useState<number[]>(
      LocalStorageService.getFavorites()
    );

    useEffect(() => {
      LocalStorageService.setItem('favorites', favorites);
    }, [favorites]);

    const toggleFavorite = useCallback((id: number) => {
      setFavorites((prevFavorites) => {
        const updatedFavorites = prevFavorites.includes(id)
          ? prevFavorites.filter((favId) => favId !== id)
          : [...prevFavorites, id];
        LocalStorageService.setItem('favorites', updatedFavorites);
        return updatedFavorites;
      });
    }, []);

    return (
      <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
        {children}
      </FavoritesContext.Provider>
    );
  }
);
