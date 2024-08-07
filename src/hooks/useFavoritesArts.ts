import { useEffect, useState } from 'react';
import Art from '@/types/art';
import { fetchArtId } from '@services/fetchArtId';

const useFavoriteArts = (favoriteIds: number[]) => {
  const [favoriteArts, setFavoriteArts] = useState<Art[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFavoriteArts = async () => {
      setLoading(true);
      const artsPromises = favoriteIds.map((id: number) => fetchArtId(id));
      const arts = await Promise.all(artsPromises);
      const formattedArts = arts.map(
        ({ id, title, artist_title, image_id }) => ({
          id: id,
          title: title,
          artist: artist_title,
          imageUrl: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,
        })
      );
      setFavoriteArts(formattedArts);
      setLoading(false);
    };

    fetchFavoriteArts();
  }, [favoriteIds]);

  return { favoriteArts, loading };
};

export default useFavoriteArts;
