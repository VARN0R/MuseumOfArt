import { useState, useEffect, SetStateAction } from 'react';
import { fetchPaginatedArts } from '@services/fetchPaginatedArts';
import Art from '@/types/art';

const usePaginatedArts = (query: string, currentPage: number) => {
  const [paginatedArts, setPaginatedArts] = useState<Art[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let arts: SetStateAction<Art[]> = [];
      if (query === '') {
        arts = await fetchPaginatedArts(
          currentPage,
          'https://api.artic.edu/api/v1/artworks'
        );
      } else if (query !== 'not found') {
        arts = await fetchPaginatedArts(currentPage, query);
      }
      setPaginatedArts(arts);
      setLoading(false);
    };

    fetchData();
  }, [currentPage, query]);

  return { paginatedArts, loading };
};

export default usePaginatedArts;
