class LocalStorageService {
  static getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  static setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  static getFavorites(): number[] {
    return this.getItem<number[]>('favorites') || [];
  }

  static addFavorite(id: number): void {
    const favorites = this.getFavorites();
    if (!favorites.includes(id)) {
      favorites.push(id);
      this.setItem('favorites', favorites);
    }
  }

  static removeFavorite(id: number): void {
    const favorites = this.getFavorites();
    const updatedFavorites = favorites.filter((favId) => favId !== id);
    this.setItem('favorites', updatedFavorites);
  }

  static toggleFavorite(id: number): void {
    const favorites = this.getFavorites();
    if (favorites.includes(id)) {
      this.removeFavorite(id);
    } else {
      this.addFavorite(id);
    }
  }
}

export default LocalStorageService;
